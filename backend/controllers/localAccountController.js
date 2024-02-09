import asyncHandler from 'express-async-handler'
import LocalAccount from '../models/localAccountModel.js'
import bcrypt from 'bcrypt'
import checkIfEmailExist from '../utils/checkIfEmailExists.js'

const saltRounds = 10

const getAllLocalAccounts = asyncHandler(async (req, res) => {
    const accounts = await LocalAccount.find({})

    if(!accounts) {
        res.status(404)
        throw new Error('No users found')
    }

    res.status(200).json(accounts)
})

const createLocalAccount = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body

    const emailExist = await checkIfEmailExist(email, LocalAccount, res)

    if (emailExist) {
        res.status(400).json({error: 'Email already exists', emailExist: true})
        throw new Error('Email already exists')
    }

    const passwordHash = await bcrypt.hash(password, saltRounds)

    const insertResult = await LocalAccount.create({email, password: passwordHash})
    if (!insertResult) throw new Error ('Error creating account')

    next()
    // res.status(201).json({
    //     message: 'success!',
    //     _id: insertResult.insertedId
    // })
})

const loginLocal = asyncHandler(async (req, res)=>{
    const { email, password } = req.body
    const emailExists = await checkIfEmailExist(email, LocalAccount,res)

    if (!emailExists) {
        res.status(401).json({error: 'Email does not Exist'})
        throw new Error('Email does not Exist')
    }
    
    const accountId = emailExists._id.toString()

    const correctPassword = await bcrypt.compare(password, emailExists.password)
    
    //session
    if (req.session.authenticated) {
        res.status(200).json({ message: 'already logged in!', isAuthenticated: true})
        return
    }

    if (correctPassword) {
        req.session.authenticated = true
        req.session.user = { email, id: accountId }
        res.status(200).json({
            message: 'User Logged In!',
            isAuthenticated: true
        })
    } else {
        res.status(403).json({error: 'Incorrect Password'})
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


const logout = asyncHandler(async (req, res) => {
    req.session.destroy()
    res.clearCookie('connect.sid')
    res.status(200).json({message: 'User Logged Out'})
})

export {
    getAllLocalAccounts,
    createLocalAccount,
    loginLocal,
    changeLocalPassword,
    logout
}