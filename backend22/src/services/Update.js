const ApplicantProfile = require('../models/ApplicantProfile');

module.exports = async (_id, set) => {
  try {
    
    await ApplicantProfile.updateOne({ _id }, { $set: set });

    return true;
  } catch (err) {
    console.log("err: ", err);
    return false;
  }
};
/* sira pa tong update pala ger 'di ko pa naayos */