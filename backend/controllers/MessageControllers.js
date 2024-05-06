import asyncHandler from "express-async-handler";
import Message from "../models/MessageModel.js";
import ApplicantProfile from "../models/ApplicantProfileModel.js";
import EmployerProfile from "../models/EmployerProfileModel.js";
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
    const { messageId } = req.body;
    let message = await Message.findById(messageId);
    let { sender, receiver } = message;
    const senderId = sender.profileId;
    const senderType = sender.profileType;
    const receiverId = receiver.profileId;
    const receiverType = receiver.profileType;

    //fill sender and receiver with actual values
    if (senderType === "applicant") {
      sender.values = await ApplicantProfile.findById(senderId).select(
        "firstName lastName profileImg"
      );
      console.log(sender);
    } else {
      sender.values = await EmployerProfile.findById(senderId).select(
        "firstName lastName profileImg"
      );
      console.log(sender);
    }

    if (receiverType === "applicant") {
      receiver.values = await ApplicantProfile.findById(receiverId).select(
        "firstName lastName profileImg"
      );
    } else {
      receiver.values = await EmployerProfile.findById(receiverId).select(
        "firstName lastName profileImg"
      );
    }

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
