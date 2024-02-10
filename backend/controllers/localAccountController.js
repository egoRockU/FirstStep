import asyncHandler from 'express-async-handler'
import LocalAccount from '../models/localAccountModel.js'
import bcrypt from 'bcrypt'
import checkIfEmailExist from '../utils/checkIfEmailExists.js'
import generateToken from '../utils/generateToken.js'
import GoogleAccount from '../models/googleAccountModel.js'

const saltRounds = 10

const getAllLocalAccounts = asyncHandler(async (req, res) => {
    const accounts = await LocalAccount.find({})

    if(!accounts) {
        res.status(404)
        throw new Error('No users found')
    }

    res.status(200).json(accounts)
})

const createLocalAccount = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const emailExist = await checkIfEmailExist(email, LocalAccount, res)
    const emailExistsInGoogle = await checkIfEmailExist(email, GoogleAccount, res)

    if (emailExist) {
        res.status(400).json({error: 'Email already exists', emailExist: true})
        throw new Error('Email already exists')
    }

    if (emailExistsInGoogle) {
        res.status(400).json({error: 'This email already have an account. Try logging in using Google', emailExist: true})
        throw new Error('This email already have an account. Try logging in using Google')
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

    const emailExists = await checkIfEmailExist(email, LocalAccount,res)

    if (!emailExists) {
        res.status(401).json({error: 'Email does not Exist'})
        throw new Error('Email does not Exist')
    }

    const correctPassword = await bcrypt.compare(password, emailExists.password)
    
    if (correctPassword) {
        generateToken(email, res)
        const user = {
            email: emailExists.email,
            id: emailExists._id.toString(),
            accountType: 'local'
        }
        res.status(200).json({
            message: 'User Logged In!',
            user
        })
    } else {
        res.status(401).json({error: 'Incorrect Password'})
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

const logout = asyncHandler(async (req, res)=>{
    res.cookie('access_token', '', {
        httpOnly: true,
        expires: new Date(0)
    })

    res.status(200).json({message: 'User logged out successfully'})
})

export {
    getAllLocalAccounts,
    createLocalAccount,
    loginLocal,
    changeLocalPassword,
    logout
}