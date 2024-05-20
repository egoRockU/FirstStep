import express from "express";
const router = express.Router();
import {
  create,
  deleteResume,
  retrieveOne,
} from "../controllers/ResumeController.js";
import authenticateToken from "../middlewares/authenticateToken.js";

router.post("/retrieveone", retrieveOne);
router.post("/create", authenticateToken, create);
router.post("/delete", authenticateToken, deleteResume);

export default router;
