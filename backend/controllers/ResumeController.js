import asyncHandler from "express-async-handler";
import Resume from "../models/ResumeModel.js";
import ApplicantProfile from "../models/ApplicantProfileModel.js";
import { handleRetrieveOne, handleDelete } from "../utils/controllerUtils.js";

export const create = asyncHandler(async (req, res) => {
  const { profileId, resumeInfo, templateId } = req.body;

  const createResult = await Resume.create(resumeInfo);
  if (!createResult) throw new Error("Creating resume failed");

  const set = {
    resume: {
      resumeId: createResult._id,
      templateId,
    },
  };

  //look for previous resumeId and Delete it
  const prevResume = await ApplicantProfile.findById(
    { _id: profileId },
    { resume: 1 }
  );
  const prevResumeId = prevResume.resume?.resumeId;
  if (prevResumeId) {
    await Resume.findOneAndDelete({ _id: prevResumeId });
  }

  //update applicant profile
  const updateResult = await ApplicantProfile.updateOne(
    { _id: profileId },
    { $set: set }
  );
  if (!updateResult.acknowledged) throw new Error("Updating Profile Failed");

  res.status(200).send({
    status: true,
    message: "Successfully Created!",
    _id: createResult._id,
  });
});

export const retrieveOne = asyncHandler(async (req, res) => {
  const { resumeId } = req.body;
  await handleRetrieveOne(Resume, resumeId, res);
});

export const deleteResume = asyncHandler(async (req, res) => {
  const { _id } = req.body;
  await handleDelete(Resume, { _id }, res);
});
