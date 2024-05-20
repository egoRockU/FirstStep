import express from "express";
const router = express.Router();
import {
  retrieveAll,
  create,
  retrieveOne,
  update,
  deleteEmployer,
  updateMessages,
  getMessages,
  deleteMessage,
} from "../controllers/EmployerProfileController.js";
import authenticateToken from "../middlewares/authenticateToken.js";

router.get("/retrieve", authenticateToken, retrieveAll);
router.post("/create", authenticateToken, create);
router.post("/retrieveone", authenticateToken, retrieveOne);
router.post("/update", authenticateToken, update);
router.post("/updatemessages", authenticateToken, updateMessages);
router.post("/delete", authenticateToken, deleteEmployer);
router.post("/getmessages", authenticateToken, getMessages);
router.post("/deletemessage", authenticateToken, deleteMessage);

export default router;
