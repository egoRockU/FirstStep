import express from "express";
const router = express.Router();
import {
  getAll,
  getMessage,
  create,
  deleteMessage,
} from "../controllers/MessageControllers.js";

router.post("/getMessage", getMessage);
router.get("/getAll", getAll);
router.post("/create", create);
router.post("/deleteMessage", deleteMessage);

export default router;
