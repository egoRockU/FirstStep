import asyncHandler from "express-async-handler";
import Portfolio from "../models/PortfolioModel.js";
import {
  handleRetrieveOne,
  handleCreate,
  handleDelete,
} from "../utils/controllerUtils.js";

export const create = asyncHandler(async (req, res) => {
  await handleCreate(Portfolio, req.body, res);
});

export const retrieveOne = asyncHandler(async (req, res) => {
  const { portfolioId } = req.body;
  await handleRetrieveOne(Portfolio, portfolioId, res);
});

export const deletePortfolio = asyncHandler(async (req, res) => {
  const { _id } = req.body;
  await handleDelete(Portfolio, { _id }, res);
});
