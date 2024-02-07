import validator from 'validator'

const checkIfEmailExist = async(email, model,res) => {
    if (!validator.isEmail(email)){
        res.status(400)
        throw new Error('Email must be a valid email address')
    }

    const emailExists = await model.findOne({email})

    return emailExists
}

export default checkIfEmailExist