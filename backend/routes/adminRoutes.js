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
import authenticateToken from "../middlewares/authenticateToken.js";

router.get("/getcounts", authenticateToken, getCounts);
router.get("/getapplicants", authenticateToken, getApplicants);
router.post("/getapplicantprofile", authenticateToken, getApplicantProfile);
router.post("/deleteapplicants", authenticateToken, deleteApplicant);
router.get("/getEmployers", authenticateToken, getEmployers);
router.post("/getemployerprofile", authenticateToken, getEmployerProfile);
router.post("/deleteemployers", authenticateToken, deleteEmployer);

export default router;
