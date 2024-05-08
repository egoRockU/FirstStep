import asyncHandler from "express-async-handler";
import Feedback from "../models/FeedbackModel.js";
import { handleCreate } from "../utils/controllerUtils.js";

const getAll = asyncHandler(async (req, res) => {
  await handleRetrieve(Message, res);
});

const create = asyncHandler(async (req, res) => {
  await handleCreate(Feedback, req.body, res);
});

export { getAll, create };
