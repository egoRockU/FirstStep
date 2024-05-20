import express from "express";
const router = express.Router();

import {
  createController,
  deleteController,
  retrieveController,
  updateController,
  retrieveOneController,
  searchController,
  updateMessages,
  getMessages,
  deleteMessage,
} from "../controllers/ApplicantProfileController.js";
import authenticateToken from "../middlewares/authenticateToken.js";

router.post("/create", authenticateToken, createController);
router.get("/retrieve", authenticateToken, retrieveController);
router.post("/retrieveone", retrieveOneController);
router.post("/update", authenticateToken, updateController);
router.post("/delete", authenticateToken, deleteController);
router.post("/search", searchController);
router.post("/updatemessages", authenticateToken, updateMessages);
router.post("/getmessages", authenticateToken, getMessages);
router.post("/deletemessage", authenticateToken, deleteMessage);

export default router;
