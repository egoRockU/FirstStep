// controller image
import { getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase.config.js';
import { getDownloadURL } from 'firebase/storage';
import sharp from 'sharp';
import Account from '../models/ApplicantProfileModel.js'; 

async function uploadImage(file) {
    if (!file || !file.originalname) {
      throw new Error('File object or originalname is missing');
       

      
    }
  
    const storageFB = getStorage();
  
    await signInWithEmailAndPassword(auth, process.env.FIREBASE_USER, process.env.FIREBASE_AUTH);
  
    const dateTime = Date.now();
    const fileName = `lasttest/${dateTime}`;
    const storageRef = ref(storageFB, fileName);
  
    // Set content type based on file extension
    const contentType = getFileContentType(file.originalname);
  
    const metadata = {
      contentType: contentType,
    };
  
    // Resize the image to fit the parent container while maintaining aspect ratio
    const resizedBuffer = await sharp(file.buffer)
      .resize({ fit: 'inside', width: 500, height: 500 }) // Adjust dimensions as needed
      .toBuffer();
  
    await uploadBytesResumable(storageRef, resizedBuffer, metadata);
    const downloadURL = await getDownloadURL(storageRef);
    console.log('Uploaded Image URL:', downloadURL);
    return { fileName, downloadURL };
  }

function getFileContentType(fileName) {
    if (!fileName) {
        throw new Error('File name is undefined or null');
    }

    const extension = fileName.split('.').pop().toLowerCase();
    switch (extension) {
        case 'jpeg':
        case 'jpg':
            return 'image/jpeg';
        case 'png':
            return 'image/png';
        default:
            return 'application/octet-stream';
    }
}
async function createAccountWithImage(firstName, lastName, file) {
    let imageUrl = '';

    try {
        if (file) {
            const uploadedImage = await uploadImage(file);
            imageUrl = uploadedImage.downloadURL;
        }
        console.log('Image URL in createAccountWithImage:', imageUrl);  //

        const newAccount = new Account({
            firstName,
            lastName,
            profileImg: imageUrl || '',
        });

        const savedAccount = await newAccount.save();
        return savedAccount;
    } catch (err) {
        console.error(`Failed to create account: ${err.message}`);
        throw err; 
    }
}


export { uploadImage, createAccountWithImage };
