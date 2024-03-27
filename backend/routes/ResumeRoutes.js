import express from "express";
const router = express.Router();
import {
  create,
  deleteResume,
  retrieveOne,
} from "../controllers/ResumeController.js";

router.post("/retrieveone", retrieveOne);
router.post("/create", create);
router.post("/delete", deleteResume);

export default router;
