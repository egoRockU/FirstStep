import ApplicantProfile from "../models/ApplicantProfileModel.js";
import {
  handleCreate,
  handleDelete,
  handleRetrieve,
  handleRetrieveOne,
  handleUpdate,
} from "../utils/controllerUtils.js";

export const createController = async (req, res) => {
  const {
    accountId,
    profileImg,
    banner,
    firstName,
    lastName,
    email,
    phone,
    address,
    bio,
    about,
    skills,
    preferedCareer,
    academicAchievements,
    activitiesAndInvolvements,
    certs,
    projects,
    resume,
    portfolioStyle,
    portfolioId,
    messages,
  } = req.body;

  // await handleCreate(ApplicantProfile, {
  //   accountId,
  //   profileImg,
  //   banner,
  //   firstName,
  //   lastName,
  //   email,
  //   phone,
  //   address,
  //   bio,
  //   about,
  //   skills,
  //   preferedCareer,
  //   academicAchievements,
  //   activitiesAndInvolvements,
  //   certs,
  //   projects,
  //   resume,
  //   portfolioStyle,
  //   portfolioId,
  //   messages
  // }, res);

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

export const searchController = async (req, res) => {
  const { query } = req.body;
  try {
    const results = await ApplicantProfile.find(query, {
      _id: 1,
      profileImg: 1,
      firstName: 1,
      lastName: 1,
      email: 1,
      address: 1,
      contactNum: 1,
    });
    res.status(200).send(results);
  } catch (err) {
    res.status(500).send({
      status: false,
      message: "Not Retrieved!",
      err: err.message,
    });
  }
};
