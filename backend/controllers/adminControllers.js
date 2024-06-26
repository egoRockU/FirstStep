import ApplicantProfile from "../models/ApplicantProfileModel.js";
import EmployerProfile from "../models/EmployerProfileModel.js";
import Resume from "../models/ResumeModel.js";
import Portfolio from "../models/PortfolioModel.js";
import GoogleAccount from "../models/googleAccountModel.js";
import LocalAccount from "../models/localAccountModel.js";
import { getAccountValues } from "../utils/accountValues.js";

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

export const getApplicants = async (req, res) => {
  try {
    const Applicants = await ApplicantProfile.find().select(
      "firstName lastName email accountId"
    );

    let updatedApplicants = [];
    for (const applicant of Applicants) {
      let newApplicant = await getAccountValues(applicant);
      updatedApplicants.push(newApplicant);
    }

    res.status(200).send(updatedApplicants);
  } catch (err) {
    res.status(500).send({
      status: false,
      message: "Failed to Retrieve Applicants",
    });
  }
};

export const getApplicantProfile = async (req, res) => {
  try {
    const { _id, accountId, accountType } = req.body;

    const applicant = await ApplicantProfile.findById(_id).select(
      "profileImg firstName lastName email contactNum address bio about resume portfolio"
    );
    let account;
    if (accountType === "Google") {
      account = await GoogleAccount.findById(accountId).select("email sub");
    }
    if (accountType === "Local") {
      account = await LocalAccount.findById(accountId).select("email password");
    }

    res.status(200).send({
      applicant,
      account,
    });
  } catch (err) {
    res.status(500).send({
      status: false,
      message: "Failed to Retrieve Applicant",
    });
  }
};

export const deleteApplicant = async (req, res) => {
  try {
    const { deletedRows } = req.body;

    for (const row of deletedRows) {
      const { _id, accountType, accountId } = row;
      const applicantProfile = await ApplicantProfile.findById(_id);

      if (applicantProfile.resume && applicantProfile.resume.resumeId) {
        await Resume.findByIdAndDelete(applicantProfile.resume.resumeId);
      }

      if (
        applicantProfile.portfolio &&
        applicantProfile.portfolio.portfolioId
      ) {
        await Portfolio.findByIdAndDelete(
          applicantProfile.portfolio.portfolioId
        );
      }

      if (accountType == "Google") {
        await GoogleAccount.findByIdAndDelete(accountId);
      }

      if (accountType == "Local") {
        await LocalAccount.findByIdAndDelete(accountId);
      }

      await ApplicantProfile.findByIdAndDelete(_id);
    }

    res.status(200).send({
      message: "Successfully Deleted Applicants",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: false,
      message: "Failed to Delete Items",
    });
  }
};

export const getEmployers = async (req, res) => {
  try {
    const Employers = await EmployerProfile.find().select(
      "firstName lastName email accountId"
    );

    let updatedEmployers = [];
    for (const employer of Employers) {
      let newEmployer = await getAccountValues(employer);
      updatedEmployers.push(newEmployer);
    }

    res.status(200).send(updatedEmployers);
  } catch (err) {
    res.status(500).send({
      status: false,
      message: "Failed to Retrieve Employers",
    });
  }
};

export const getEmployerProfile = async (req, res) => {
  try {
    const { _id, accountId, accountType } = req.body;

    const employer = await EmployerProfile.findById(_id).select(
      "profileImg firstName lastName email contactNum address bio about"
    );

    let account;
    if (accountType === "Google") {
      account = await GoogleAccount.findById(accountId).select("email sub");
    }
    if (accountType === "Local") {
      account = await LocalAccount.findById(accountId).select("email password");
    }

    res.status(200).send({
      employer,
      account,
    });
  } catch (err) {
    res.status(500).send({
      status: false,
      message: "Failed to Retrieve Applicant",
    });
  }
};

export const deleteEmployer = async (req, res) => {
  try {
    const { deletedRows } = req.body;

    for (const row of deletedRows) {
      const { _id, accountType, accountId } = row;

      if (accountType == "Google") {
        await GoogleAccount.findByIdAndDelete(accountId);
      }

      if (accountType == "Local") {
        await LocalAccount.findByIdAndDelete(accountId);
      }

      await EmployerProfile.findByIdAndDelete(_id);
    }
    res.status(200).send({
      message: "Successfully Deleted Employers",
    });
  } catch (err) {
    res.status(500).send({
      status: false,
      message: "Failed to Delete Items",
    });
  }
};
