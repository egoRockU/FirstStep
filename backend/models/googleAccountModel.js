import mongoose from "mongoose"

const googleAccountSchema = new mongoose.Schema ({
    email: {
        type: String,
        required: true
    },
    sub: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        required: false,
        default: false
    },
    uniqueString: {
        type: String,
        required: true
    },
    profileId: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        default: null
    }

})

const GoogleAccount = mongoose.model('googleAccount', googleAccountSchema)

export default GoogleAccount