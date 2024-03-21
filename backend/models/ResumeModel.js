import mongoose from "mongoose";
import {
  EducationSchema,
  ActivitesAndInvolvementsSchema,
  ProjectsSchema,
  AwardsSchema,
  CertificatesSchema,
  CharacterReferenceSchema,
} from "./OtherSchema.js";

const { Schema } = mongoose;

const ResumeSchema = new Schema({
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
  characterReference: {
    type: [CharacterReferenceSchema],
    required: false,
    default: [],
  },
});
