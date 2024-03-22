import mongoose from "mongoose";

import { ProjectsSchema, CertificatesSchema } from "./OtherSchema.js";

const { Schema } = mongoose;

const PortfolioSchema = new Schema({
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
  projects: {
    type: [ProjectsSchema],
    required: false,
    default: [],
  },
  certs: {
    type: [CertificatesSchema],
    required: false,
    default: [],
  },
});

const Portfolio = mongoose.model("Portfolio", PortfolioSchema);

export default Portfolio;
