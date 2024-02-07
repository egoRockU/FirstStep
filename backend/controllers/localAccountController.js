import asyncHandler from 'express-async-handler'
import validator from 'validator'
import LocalAccount from '../models/localAccountModel.js'
import bcrypt from 'bcrypt'

const saltRounds = 10

const checkIfEmailExist = async(email, res) => {
    if (!validator.isEmail(email)){
        res.status(400)
        throw new Error('Email must be a valid email address')
    }

    const emailExists = await LocalAccount.findOne({email})

    return emailExists
}

const getAllLocalAccounts = asyncHandler(async (req, res) => {
    const accounts = await LocalAccount.find({})

    if(!accounts) {
        res.status(404)
        throw new Error('User not found')
    }

    res.status(200).json(accounts)
})

const createLocalAccount = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const emailExist = await checkIfEmailExist(email, res)

    if (emailExist) {
        res.status(400)
        throw new Error('Email already exists')
    }

    const passwordHash = await bcrypt.hash(password, saltRounds)

    const insertResult = await LocalAccount.create({email, password: passwordHash})
    if (!insertResult) throw new Error ('Error creating account')

    res.status(201).json({
        message: 'success!',
        _id: insertResult.insertedId
    })

})

const loginLocal = asyncHandler(async (req, res)=>{
    const { email, password } = req.body

    const emailExists = await checkIfEmailExist(email, res)

    if (!emailExists) {
        res.status(401)
        throw new Error('Email does not Exist')
    }

    const correctPassword = await bcrypt.compare(password, emailExists.password)
    
    //Add express session when frontend is done
    if (correctPassword) {
        res.status(200).json({
            message: 'User Logged In!'
        })
    } else {
        res.status(401)
        throw new Error('Incorrect Password')
    }
})


const changeLocalPassword = asyncHandler(async (req, res) => {
    const {email, password, newPassword} = req.body

    const emailExists = await checkIfEmailExist(email, res)

    if (!emailExists) {
        res.status(401)
        throw new Error('Email does not Exist')
    }

    const correctPassword = await bcrypt.compare(password, emailExists.password)
    if (!correctPassword){
        res.status(401)
        throw new Error('Incorrect Password')
    }

    const newPasswordHash = await bcrypt.hash(newPassword, saltRounds)

    const updateResult = await LocalAccount.findOneAndUpdate({email}, {password: newPasswordHash})
    if (!updateResult) throw new Error ('Error Updating Password')

    res.status(201).json({
    message: 'Password Changed Successfully!',
    _id: updateResult.id
    })
})


export {
    getAllLocalAccounts,
    createLocalAccount,
    loginLocal,
    changeLocalPassword
}