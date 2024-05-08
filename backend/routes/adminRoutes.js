import express from "express";
const router = express.Router();
import {
  getCounts,
  getApplicants,
  getApplicantProfile,
} from "../controllers/adminControllers.js";

router.get("/getcounts", getCounts);
router.get("/getapplicants", getApplicants);
router.post("/getapplicantprofile", getApplicantProfile);
export default router;
