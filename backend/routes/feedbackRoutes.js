import express from "express";
const router = express.Router();
import {
  getAll,
  create,
  deleteFeedback,
} from "../controllers/feedbackControllers.js";
import authenticateToken from "../middlewares/authenticateToken.js";

router.get("/getAll", authenticateToken, getAll);
router.post("/create", authenticateToken, create);
router.post("/deletefeedback", authenticateToken, deleteFeedback);

export default router;
