import mongoose from "mongoose"

const localAccountSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profileId: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        default: null
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
    isAdmin: {
        type: Boolean,
        required: false,
        default: false,
    }
})

const LocalAccount = mongoose.model('localAccount', localAccountSchema)

export default LocalAccount