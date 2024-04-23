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
} from "../controllers/ApplicantProfileController.js";

router.post("/create", createController);
router.get("/retrieve", retrieveController);
router.post("/retrieveone", retrieveOneController);
router.post("/update", updateController);
router.post("/delete", deleteController);
router.post("/search", searchController);
router.post("/updatemessages", updateMessages);

export default router;
