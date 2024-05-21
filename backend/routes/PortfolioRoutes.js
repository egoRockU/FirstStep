import express from "express";
const router = express.Router();
import {
  create,
  deletePortfolio,
  retrieveOne,
} from "../controllers/PortfolioController.js";
import authenticateToken from "../middlewares/authenticateToken.js";

router.post("/retrieveone", retrieveOne);
router.post("/create", authenticateToken, create);
router.post("/delete", authenticateToken, deletePortfolio);

export default router;
