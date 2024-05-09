import asyncHandler from "express-async-handler";
import Feedback from "../models/FeedbackModel.js";
import {
  handleRetrieve,
  handleCreate,
  handleDelete,
} from "../utils/controllerUtils.js";
import { getFeedbackValues } from "../utils/getMessageValues.js";

const getAll = asyncHandler(async (req, res) => {
  const results = await Feedback.find().sort({ createdAt: -1 });

  if (!results) throw new Error("Error Retreiving Feedbacks");

  let feedbacks = [];
  for (const feedback of results) {
    let fWithVal = await getFeedbackValues(feedback);
    feedbacks.push(fWithVal);
  }
  res.status(200).send(feedbacks);
});

const create = asyncHandler(async (req, res) => {
  await handleCreate(Feedback, req.body, res);
});

const deleteFeedback = asyncHandler(async (req, res) => {
  const { _id } = req.body;

  await handleDelete(Feedback, { _id }, res);
});

export { getAll, create, deleteFeedback };
