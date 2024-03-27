import express from "express";
const router = express.Router();
import {
  create,
  deletePortfolio,
  retrieveOne,
} from "../controllers/PortfolioController.js";

router.post("/retrieveone", retrieveOne);
router.post("/create", create);
router.post("/delete", deletePortfolio);

export default router;
