// routes.js
import express from 'express';
import { upload, uploadMiddleware } from '../middlewares/imagemulter.js';
import { handleImageUpload, createAccount } from '../utils/imageuploadUtils.js';

const router = express.Router();

router.post('/upload', upload, handleImageUpload);

router.post('/create-account', upload, createAccount, uploadMiddleware);

export default router;
