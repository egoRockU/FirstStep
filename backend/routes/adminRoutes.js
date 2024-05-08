import express from "express";
const router = express.Router();
import {
  getCounts,
  getApplicants,
  getApplicantProfile,
  deleteApplicant,
} from "../controllers/adminControllers.js";

router.get("/getcounts", getCounts);
router.get("/getapplicants", getApplicants);
router.post("/getapplicantprofile", getApplicantProfile);
router.post("/deleteapplicants", deleteApplicant);
export default router;
