import mongoose from 'mongoose';

const { Schema } = mongoose;

const ApplicantProfileSchema = new Schema({
  accountId: {
    type: Schema.Types.ObjectId,
    required: false
  },
  profileImg: {
    type: String,
    required: false,
    default: ''
  },
  banner: {
    type: String,
    required: false,
    default: ''
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: false,
    default: ''
  },
  address: {
    type: String,
    required: false,
    default: ''
  },
  bio: {
    type: String,
    required: false,
    default: ''
  },
  about: {
    type: String,
    required: false,
    default: ''
  },
  skills: {
    type: [String],
    required: false,
    default: []
  },
  preferredCareer: {
    type: [Schema.Types.ObjectId],
    required: false,
    default: []
  },
  academicAchievements: {
    type: [String],
    required: false,
    default: []
  },
  activitiesAndInvolvements: {
    type: [String],
    required: false,
    default: []
  },
  certs: {
    type: [String],
    required: false,
    default: []
  },
  projects: {
    type: [Schema.Types.ObjectId],
    required: false,
    default: []
  },
  resume: {
    type: String,
    required: false,
    default: ''
  },
  portfolioStyle: {
    type: String,
    required: false,
    default: ''
  },
  portfolioId: {
    type: Schema.Types.ObjectId,
    required: false,
    default: null
  },
  messages: {
    type: [Schema.Types.ObjectId],
    required: false,
    default: []
  },
  
});

const ApplicantProfile = mongoose.model('ApplicantProfile', ApplicantProfileSchema);

export default ApplicantProfile;
