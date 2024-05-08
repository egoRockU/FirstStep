import express from "express";
const router = express.Router();
import { getAll, create } from "../controllers/feedbackControllers.js";

router.get("/getAll", getAll);
router.post("/create", create);

export default router;
