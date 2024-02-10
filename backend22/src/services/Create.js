const ApplicantProfile = require ('../models/ApplicantProfile')

module.exports =  async (firstName, lastName) => {
try{
        await ApplicantProfile.insertMany({
            
            firstName,
            lastName
        })
        return true
}catch(err){
    console.log("err: ", err)
    return false
}
}