import asyncHandler from "express-async-handler";
import Message from "../models/MessageModel.js";
import {
  handleCreate,
  handleDelete,
  handleRetrieve,
  handleRetrieveOne,
} from "../utils/controllerUtils.js";

const getAll = asyncHandler(async (req, res) => {
  await handleRetrieve(Message, res);
});

const getMessage = asyncHandler(async (req, res) => {
  const { messageId } = req.body;
  const message = await Message.findById(message)
    .populate("EmployerProfile")
    .populate("ApplicantProfile");
  await handleRetrieveOne(Message, messageId, res);
});

const create = asyncHandler(async (req, res) => {
  await handleCreate(Message, req.body, res);
});

const deleteMessage = asyncHandler(async (req, res) => {
  const { _id } = req.body;
  await handleDelete(EmployerProfile, { _id }, res);
});

export { getAll, getMessage, create, deleteMessage };
