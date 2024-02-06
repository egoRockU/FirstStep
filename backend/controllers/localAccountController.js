import asyncHandler from 'express-async-handler'
import validator from 'validator'
import LocalAccount from '../models/localAccountModel.js'
import bcrypt from 'bcrypt'

const saltRounds = 10

const getAllAccounts = asyncHandler(async (req, res) => {
    const accounts = await LocalAccount.find({})

    if(!accounts) {
        res.status(404)
        throw new Error('User not found')
    }

    res.status(200).json(accounts)
})

const createAccount = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const emailExist = await LocalAccount.findOne({ email })

    if (!validator.isEmail(email)){
        res.status(400)
        throw new Error('Email must be a valid email address')
    }

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


export {
    getAllAccounts,
    createAccount
}