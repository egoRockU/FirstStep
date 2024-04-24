import mongoose from "mongoose";

const { Schema } = mongoose;

const EducationSchema = new Schema({
  schoolName: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  program: {
    type: String,
    required: false,
    default: "",
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: false,
  },
  grade: {
    type: String,
    required: true,
  },
});

const ActivitesAndInvolvementsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  typeOfActivity: {
    type: String,
    required: true,
  },
  organizationOrCompanyName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: false,
  },
  description: {
    type: String,
    required: false,
    default: "",
  },
});

const ProjectsSchema = new Schema({
  previewImages: {
    type: [String],
    required: false,
    default: [],
  },
  projectTitle: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  technologiesUsed: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: false,
  },
  endDate: {
    type: Date,
    required: false,
  },
  description: {
    type: String,
    required: false,
    default: "",
  },
  githubLink: {
    type: String,
    required: false,
    default: "",
  },
  projectLink: {
    type: String,
    required: false,
    default: "",
  },
});

const AwardsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  dateReceived: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: false,
    default: "",
  },
});

const CertificatesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
    default: "",
  },
  documentFile: {
    type: String,
    required: false,
    default: "",
  },
  description: {
    type: String,
    required: false,
    default: "",
  },
  dateReceived: {
    type: Date,
    required: true,
  },
});

const CharacterReferenceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  contactNum: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: false,
    default: "",
  },
});

const ProfileSchema = new Schema({
  profileType: {
    type: String,
    required: true,
  },
  profileId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  values: {
    type: Object,
    required: false,
  },
});

export {
  EducationSchema,
  ActivitesAndInvolvementsSchema,
  ProjectsSchema,
  AwardsSchema,
  CertificatesSchema,
  CharacterReferenceSchema,
  ProfileSchema,
};
