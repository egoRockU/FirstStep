import asyncHandler from "express-async-handler";
import EmployerProfile from "../models/EmployerProfileModel.js";
import {
  handleCreate,
  handleDelete,
  handlePush,
  handleRetrieve,
  handleRetrieveOne,
  handleUpdate,
} from "../utils/controllerUtils.js";
import getMessageValues from "../utils/getMessageValues.js";

const retrieveAll = asyncHandler(async (req, res) => {
  await handleRetrieve(EmployerProfile, res);
});

const retrieveOne = asyncHandler(async (req, res) => {
  const { profileId } = req.body;
  await handleRetrieveOne(EmployerProfile, profileId, res);
});

const create = asyncHandler(async (req, res) => {
  await handleCreate(EmployerProfile, req.body, res);
});

const update = asyncHandler(async (req, res) => {
  const { _id, set } = req.body;
  await handleUpdate(EmployerProfile, { _id }, set, res);
});

const updateMessages = asyncHandler(async (req, res) => {
  const { _id, push } = req.body;
  await handlePush(EmployerProfile, { _id }, push, res);
});

const deleteEmployer = asyncHandler(async (req, res) => {
  const { _id } = req.body;
  await handleDelete(EmployerProfile, { _id }, res);
});

const getMessages = asyncHandler(async (req, res) => {
  const { profileId } = req.body;
  try {
    const results = await EmployerProfile.findById(profileId)
      .select("messages")
      .populate({ path: "messages", options: { sort: { createdAt: -1 } } });

    let messages = [];
    for (const message of results.messages) {
      let mWithVal = await getMessageValues(message._id);
      messages.push(mWithVal);
    }

    res.status(200).send(messages);
  } catch (err) {
    res.status(500).send({
      status: false,
      message: "Failed to retrieve messages",
    });
  }
});

const deleteMessage = asyncHandler(async (req, res) => {
  const { profileId, messageId } = req.body;
  try {
    await EmployerProfile.findOneAndUpdate(
      { _id: profileId },
      { $pull: { messages: messageId } },
      { new: true }
    );

    res.status(200).send({
      status: true,
      message: "Message Successfully Deleted!",
    });
  } catch (err) {
    console.error(`Error updating model: ${err}`);
    res.status(500).send({
      status: false,
      message: "Not Updated!",
    });
  }
});

export {
  retrieveAll,
  retrieveOne,
  create,
  update,
  updateMessages,
  getMessages,
  deleteMessage,
  deleteEmployer,
};
