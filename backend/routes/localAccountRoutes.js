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
  updateAdmin,
} from "../controllers/localAccountController.js";
import authenticateToken from "../middlewares/authenticateToken.js";

router.get("/", authenticateToken, getAllLocalAccounts);
router.post("/create", createLocalAccount);
router.post("/login", loginLocal);
router.post("/changepassword", changeLocalPassword);
router.post("/addprofile", authenticateToken, addProfile);
router.post("/loginadmin", loginAdmin);
router.post("/updateadmin", authenticateToken, updateAdmin);
router.post("/updateaccount", authenticateToken, updateAccount);

export default router;
