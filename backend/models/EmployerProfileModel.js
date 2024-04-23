import mongoose from "mongoose";

const { Schema } = mongoose;

const EmployerProfileSchema = new Schema({
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
  companyName: {
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
  website: {
    type: String,
    required: false,
    default: "",
  },
  messages: {
    type: [Schema.Types.ObjectId],
    required: false,
    default: [],
    ref: "Message",
  },
});

const EmployerProfile = mongoose.model(
  "EmployerProfile",
  EmployerProfileSchema
);

export default EmployerProfile;
