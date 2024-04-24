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

router.get("/retrieve", retrieveAll);
router.post("/create", create);
router.post("/retrieveone", retrieveOne);
router.post("/update", update);
router.post("/updatemessages", updateMessages);
router.post("/delete", deleteEmployer);
router.post("/getmessages", getMessages);
router.post("/deletemessage", deleteMessage);

export default router;
