import express from "express";
const router = express.Router();
import {
  getAllLocalAccounts,
  createLocalAccount,
  loginLocal,
  changeLocalPassword,
  addProfile,
  loginAdmin,
  updateAccount,
} from "../controllers/localAccountController.js";
import authenticateToken from "../middlewares/authenticateToken.js";

router.get("/", authenticateToken, getAllLocalAccounts);
router.post("/create", createLocalAccount);
router.post("/login", loginLocal);
router.post("/changepassword", changeLocalPassword);
router.post("/addprofile", addProfile);
router.post("/loginadmin", loginAdmin);
router.post("/updateaccount", updateAccount);

export default router;
