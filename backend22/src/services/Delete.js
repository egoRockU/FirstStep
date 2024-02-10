const ApplicantProfile = require ('../models/ApplicantProfile')

module.exports =  async (_id) => {
try{
        await ApplicantProfile.deleteOne({_id})

        return true
}catch(err){
    return false
}
}