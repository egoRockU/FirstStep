import express from "express";
const router = express.Router();
import {
  getAll,
  getMessage,
  create,
  deleteMessage,
} from "../controllers/MessageControllers.js";
import authenticateToken from "../middlewares/authenticateToken.js";

router.post("/getMessage", authenticateToken, getMessage);
router.get("/getAll", authenticateToken, getAll);
router.post("/create", authenticateToken, create);
router.post("/deleteMessage", authenticateToken, deleteMessage);

export default router;
