const ApplicantProfile = require ('../models/ApplicantProfile')

module.exports =  async (accountId,firstName, lastName) => {
try{
      const results=  await ApplicantProfile.find()
       
        return results
}catch(err){
    return []
}
}