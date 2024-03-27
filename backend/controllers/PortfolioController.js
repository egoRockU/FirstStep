import asyncHandler from "express-async-handler";
import Portfolio from "../models/PortfolioModel.js";
import ApplicantProfile from "../models/ApplicantProfileModel.js";
import { handleRetrieveOne, handleDelete } from "../utils/controllerUtils.js";

export const create = asyncHandler(async (req, res) => {
  const { profileId, portfolioInfo, templateId } = req.body;

  const createResult = await Portfolio.create(portfolioInfo);
  if (!createResult) throw new Error("Creating portfolio failed");

  const set = {
    portfolio: {
      portfolioId: createResult._id,
      templateId,
    },
  };

  //look for previous portfolioId and Delete it
  const prevPortfolio = await ApplicantProfile.findById(
    { _id: profileId },
    { portfolio: 1 }
  );
  const prevPortfolioId = prevPortfolio.portfolio?.portfolioId;
  if (prevPortfolio) {
    await Portfolio.findOneAndDelete({ _id: prevPortfolioId });
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
  const { portfolioId } = req.body;
  await handleRetrieveOne(Portfolio, portfolioId, res);
});

export const deletePortfolio = asyncHandler(async (req, res) => {
  const { _id, profileId } = req.body;

  await ApplicantProfile.updateOne(
    { _id: profileId },
    { $set: { portfolio: {} } }
  );

  await handleDelete(Portfolio, { _id }, res);
});
