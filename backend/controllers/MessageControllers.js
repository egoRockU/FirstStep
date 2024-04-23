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
  try {
    const select = "firstName lastName profileImg";
    const { messageId } = req.body;
    const message = await Message.findById(messageId)
      .populate({ path: "sender", select })
      .populate({ path: "receiver", select })
      .exec();
    res.status(200).send(message);
  } catch (err) {
    res.status(500).send({
      status: false,
      message: "Not Retrieved!",
      err,
    });
  }
});

const create = asyncHandler(async (req, res) => {
  await handleCreate(Message, req.body, res);
});

const deleteMessage = asyncHandler(async (req, res) => {
  const { _id } = req.body;
  await handleDelete(Message, { _id }, res);
});

export { getAll, getMessage, create, deleteMessage };
