import ApplicantProfile from "../models/ApplicantProfileModel.js";
import {
  handleCreate,
  handleDelete,
  handleRetrieve,
  handleRetrieveOne,
  handleUpdate,
  handlePush,
} from "../utils/controllerUtils.js";
import getMessageValues from "../utils/getMessageValues.js";

export const createController = async (req, res) => {
  await handleCreate(ApplicantProfile, req.body, res);
};

export const deleteController = async (req, res) => {
  const { _id } = req.body;
  await handleDelete(ApplicantProfile, { _id }, res);
};

export const retrieveController = async (req, res) => {
  await handleRetrieve(ApplicantProfile, res);
};

export const retrieveOneController = async (req, res) => {
  const { profileId } = req.body;
  await handleRetrieveOne(ApplicantProfile, profileId, res);
};

export const updateController = async (req, res) => {
  const { _id, set } = req.body;
  await handleUpdate(ApplicantProfile, { _id }, set, res);
};

export const updateMessages = async (req, res) => {
  const { _id, push } = req.body;
  await handlePush(ApplicantProfile, { _id }, push, res);
};

export const getMessages = async (req, res) => {
  const { profileId } = req.body;
  try {
    const results = await ApplicantProfile.findById(profileId)
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
};

export const deleteMessage = async (req, res) => {
  const { profileId, messageId } = req.body;
  try {
    await ApplicantProfile.findOneAndUpdate(
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
};

export const searchController = async (req, res) => {
  const { type, query } = req.body;
  const showValues = {
    _id: 1,
    profileImg: 1,
    firstName: 1,
    lastName: 1,
    email: 1,
    address: 1,
    contactNum: 1,
  };
  let results;
  try {
    if (type === "string") {
      const { field, regex } = query;
      const queryObj = {};
      queryObj[field] = { $regex: new RegExp(regex, "i") };
      results = await ApplicantProfile.find(queryObj, showValues);
    }

    if (type === "array") {
      const { field, regex } = query;
      const queryObj = {};
      queryObj[field] = { $elemMatch: { $regex: new RegExp(regex, "i") } };
      results = await ApplicantProfile.find(queryObj, showValues);
    }

    if (type === "all") {
      results = await ApplicantProfile.find(query, showValues);
    }

    res.status(200).send(results);
  } catch (err) {
    res.status(500).send({
      status: false,
      message: "Not Retrieved!",
      err: err.message,
    });
  }
};
