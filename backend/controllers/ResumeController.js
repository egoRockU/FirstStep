import asyncHandler from "express-async-handler";
import Resume from "../models/ResumeModel.js";
import {
  handleRetrieveOne,
  handleCreate,
  handleDelete,
} from "../utils/controllerUtils.js";

export const create = asyncHandler(async (req, res) => {
  await handleCreate(Resume, req.body, res);
});

export const retrieveOne = asyncHandler(async (req, res) => {
  const { resumeId } = req.body;
  await handleRetrieveOne(Resume, resumeId, res);
});

export const deleteResume = asyncHandler(async (req, res) => {
  const { _id } = req.body;
  await handleDelete(Resume, { _id }, res);
});
