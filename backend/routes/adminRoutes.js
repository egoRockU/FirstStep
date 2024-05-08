import express from "express";
const router = express.Router();
import { getCounts } from "../controllers/adminControllers.js";

router.get("/getcounts", getCounts);
export default router;
