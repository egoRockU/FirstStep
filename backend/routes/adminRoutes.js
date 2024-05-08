import express from "express";
const router = express.Router();
import {
  getCounts,
  getApplicants,
  getApplicantProfile,
  deleteApplicant,
  getEmployers,
  getEmployerProfile,
  deleteEmployer,
} from "../controllers/adminControllers.js";

router.get("/getcounts", getCounts);
router.get("/getapplicants", getApplicants);
router.post("/getapplicantprofile", getApplicantProfile);
router.post("/deleteapplicants", deleteApplicant);
router.get("/getEmployers", getEmployers);
router.post("/getemployerprofile", getEmployerProfile);
router.post("/deleteemployers", deleteEmployer);

export default router;
