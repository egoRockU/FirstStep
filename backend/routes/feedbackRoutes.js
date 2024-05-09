import express from "express";
const router = express.Router();
import {
  getAll,
  create,
  deleteFeedback,
} from "../controllers/feedbackControllers.js";

router.get("/getAll", getAll);
router.post("/create", create);
router.post("/deletefeedback", deleteFeedback);

export default router;
