import LocalAccount from "./localAccountModel.js";
import GoogleAccount from "./googleAccountModel.js";
import mongoose from "mongoose";
import {
  EducationSchema,
  ActivitesAndInvolvementsSchema,
  ProjectsSchema,
  AwardsSchema,
  CertificatesSchema,
} from "./OtherSchema.js";

const { Schema } = mongoose;

const ApplicantProfileSchema = new Schema({
  accountId: {
    type: Schema.Types.ObjectId,
    required: false,
  },
  profileImg: {
    type: String,
    required: false,
    default: "",
  },
  banner: {
    type: String,
    required: false,
    default: "",
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  contactNum: {
    type: String,
    required: false,
    default: "",
  },
  address: {
    type: String,
    required: false,
    default: "",
  },
  bio: {
    type: String,
    required: false,
    default: "",
  },
  about: {
    type: String,
    required: false,
    default: "",
  },
  socialLinks: {
    type: [
      {
        platform: String,
        link: String,
      },
    ],
    required: false,
    default: [],
  },
  skills: {
    type: [String],
    required: false,
    default: [],
  },
  preferredCareer: {
    type: [String],
    required: false,
    default: [],
  },
  education: {
    type: [EducationSchema],
    required: false,
    default: [],
  },
  activitiesAndInvolvements: {
    type: [ActivitesAndInvolvementsSchema],
    required: false,
    default: [],
  },
  awards: {
    type: [AwardsSchema],
    required: false,
    default: [],
  },
  certs: {
    type: [CertificatesSchema],
    required: false,
    default: [],
  },
  projects: {
    type: [ProjectsSchema],
    required: false,
    default: [],
  },
  resume: {
    type: {
      resumeId: Schema.Types.ObjectId,
      templateId: String,
    },
    required: false,
    default: {},
  },
  portfolio: {
    type: {
      portfolioId: Schema.Types.ObjectId,
      templateId: String,
    },
    required: false,
    default: {},
  },
  messages: {
    type: [Schema.Types.ObjectId],
    required: false,
    default: [],
  },
});

ApplicantProfileSchema.pre("remove", { document: true }, async function () {
  try {
    await LocalAccount.updateMany(
      { profileId: this._id },
      { $set: { profileId: null, profileType: "" } }
    );
    await GoogleAccount.updateMany(
      { profileId: this._id },
      { $set: { profileId: null, profileType: "" } }
    );
    next();
  } catch (err) {
    next(err);
  }
});

const ApplicantProfile = mongoose.model(
  "ApplicantProfile",
  ApplicantProfileSchema
);

export default ApplicantProfile;
