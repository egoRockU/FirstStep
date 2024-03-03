// routes.js
import express from "express";
import { upload, uploadMiddleware } from "../middlewares/imagemulter.js";
import { createAccountController } from "../controllers/imageuploadController.js";

const router = express.Router();

router.post("/creates", upload, createAccountController, uploadMiddleware);

export default router;
