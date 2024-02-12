const ApplicantProfile = require('../models/ApplicantProfile');

module.exports = async (_id, set) => {
  try {
    await ApplicantProfile.updateOne({ _id }, { $set: set });
    
    return true;
  } catch (err) {
    console.error("Error updating ApplicantProfile:", err);
    return false;
  }
};
