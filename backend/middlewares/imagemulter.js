//multer
import multer from 'multer';
import path from 'path';
import sharp from 'sharp'; 
import AccountModel from '../models/ApplicantProfileModel.js';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../config/firebase.config.js';

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 1000000 }, // 3MB limit
  fileFilter: (req, file, cb) => checkFileType(file, cb),
}).single('profileimage');

function checkFileType(file, cb) {
  const fileTypes = /jpeg|jpg|png/;
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());

  if (extName) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only JPEG, JPG, and PNG files are allowed.'), false);
  }
}


  const uploadMiddleware = async (req, res, next) => {
    try {
      await upload(req, res);
  
      const { firstName, lastName } = req.body;
      const file = req.file;
  
      
      if (!req.fileValidationError) {
        const contentType = file.mimetype;
  
        const resizedBuffer = await sharp(file.buffer)
          .resize({ fit: 'inside', width: 500, height: 500 })
          .toBuffer();
  
        const storageRef = ref(storage, `profileImages/${Date.now()}_${file.originalname}`);
        await uploadBytes(storageRef, resizedBuffer, { contentType });
  
        const downloadUrl = await getDownloadURL(storageRef);
  
        const newAccount = new AccountModel({
          firstName,
          lastName,
          profileImg: downloadUrl,
        });
  
        const result = await newAccount.save();
  
        req.uploadedAccount = result;
        return next();
      }
  
      // Handle file size limit error
      console.error('File size limit exceeded. Please upload an image smaller than 3MB.');
      return res.status(400).json({ error: 'File size limit exceeded. Please upload an image smaller than 3MB.' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  


export { upload, uploadMiddleware };
