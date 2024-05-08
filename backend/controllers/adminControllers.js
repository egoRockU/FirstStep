import ApplicantProfile from "../models/ApplicantProfileModel.js";
import EmployerProfile from "../models/EmployerProfileModel.js";
import Resume from "../models/ResumeModel.js";
import Portfolio from "../models/PortfolioModel.js";
import GoogleAccount from "../models/googleAccountModel.js";
import LocalAccount from "../models/localAccountModel.js";

export const getCounts = async (req, res) => {
  try {
    const ApplicantCount =
      await ApplicantProfile.find().estimatedDocumentCount();

    const EmployerCount = await EmployerProfile.find().estimatedDocumentCount();
    const ResumeCount = await Resume.find().estimatedDocumentCount();
    const PortfolioCount = await Portfolio.find().estimatedDocumentCount();
    const GoogleCount = await GoogleAccount.find().estimatedDocumentCount();
    const LocalCount = await LocalAccount.find().estimatedDocumentCount();

    const counts = {
      applicant: ApplicantCount,
      employer: EmployerCount,
      resume: ResumeCount,
      portfolio: PortfolioCount,
      googleAccount: GoogleCount,
      localAccount: LocalCount,
    };

    res.status(200).send({
      status: true,
      counts,
    });
  } catch (err) {
    res.status(500).send({
      status: false,
      message: "Retrieving Model Data Failed",
    });
  }
};
