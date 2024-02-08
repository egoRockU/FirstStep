import asyncHandler from 'express-async-handler'
import GoogleAccount from '../models/googleAccountModel.js'
import checkIfEmailExist from '../utils/checkIfEmailExists.js'

const getAllGoogleAccounts = asyncHandler(async (req, res) => {
    const accounts = await GoogleAccount.find({})

    if (!accounts) {
        res.status(404)
        throw new Error('No users found')
    }

    res.status(200).json(accounts)
})

const createGoogleAccount = asyncHandler(async (req, res) => {
    const { email, sub } = req.body

    const emailExist = await checkIfEmailExist(email, GoogleAccount, res)

    if (emailExist) {
        res.status(400).json({error: 'Email already exists', emailExist: true})
        throw new Error('Email already exists')
    }

    const insertResult = await GoogleAccount.create({email, sub})
    if (!insertResult) throw new Error ('Error creating account')

    res.status(201).json({
        message: 'success!',
        _id: insertResult.insertedId
    })

})

const loginGoogle = asyncHandler(async (req, res) => {
    const {email, sub} = req.body

    const emailExist = await checkIfEmailExist(email, GoogleAccount, res)

    if (!emailExist){
        res.status(401).json({error: 'This account has not been registered yet.', emailDoesNotExist: true})
        throw new Error('Email does not Exist')
    }

    if (emailExist.sub !== sub) {
        res.status(401)
        throw new Error('Invalid sub string.')
    }

    res.status(200).json({
        message: 'Google User Logged In!'
    })
})

export {
    getAllGoogleAccounts,
    createGoogleAccount,
    loginGoogle
}