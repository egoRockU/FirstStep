import mongoose from 'mongoose';

const { Schema } = mongoose;

const EducationSchema = new Schema({
  schoolName: {
    type: String,
    required: true
  },
  degree: {
    type: String,
    required: true
  },
  program: {
    type: String,
    required: false,
    default: ""
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: false
  },
  grade: {
    type: String,
    required: true
  }
})

const ActivitesAndInvolvementsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  typeOfActivity: {
    type: String,
    required: true
  },
  organizationOrCompanyName: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: false
  },
  description: {
    type: String,
    required: false,
    default: ""
  }
})

const AwardsSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  dateRecieved: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: false,
    default: ""
  }
})

const CertificatesSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false,
    default: ""
  },
  documentFile: {
    type: String,
    required: false,
    default: ""
  },
  description: {
    type: String,
    required: false,
    default: ""
  },
  dateRecieved: {
    type: Date,
    required: true,
  }
})

const ApplicantProfileSchema = new Schema({
  accountId: {
    type: Schema.Types.ObjectId,
    required: false,
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
  socialLinks: {
    type: [{
      social: String,
      link: String
    }],
    required: false,
    default: []
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
  education: {
    type: [EducationSchema],
    required: false,
    default: []
  },
  activitiesAndInvolvements: {
    type: [ActivitesAndInvolvementsSchema],
    required: false,
    default: []
  },
  awards: {
    type: [AwardsSchema],
    required: false,
    default: []
  },
  certs: {
    type: [CertificatesSchema],
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
  messages: {
    type: [Schema.Types.ObjectId],
    required: false,
    default: []
  },
  
});


const ApplicantProfile = mongoose.model('ApplicantProfile', ApplicantProfileSchema);

export default ApplicantProfile;
