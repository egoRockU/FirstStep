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

export {
  retrieveAll,
  retrieveOne,
  create,
  update,
  updateMessages,
  deleteEmployer,
};
