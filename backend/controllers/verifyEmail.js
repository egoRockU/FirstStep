import asyncHandler from 'express-async-handler'
import LocalAccount from '../models/localAccountModel.js'
import GoogleAccount from '../models/googleAccountModel.js'
import jwt from 'jsonwebtoken'
import { generateToken } from '../utils/generateToken.js'
import crypto from 'crypto'
import sendVerificationEmail from '../utils/sendVerificationEmail.js'

const verifyEmail = asyncHandler(async(req, res) => {
    const {urlToken} = req.params

    try {
        const decoded = jwt.verify(urlToken, process.env.ACCESS_TOKEN_SECRET)
        const uniqueString = decoded.uniqueString
        const account = await Promise.all([
            LocalAccount.findOne({ uniqueString }),
            GoogleAccount.findOne({ uniqueString })
        ]).then(([account1, account2])=> account1 || account2 )
    
        if (account) {
            account.isVerified = true
            account.uniqueString = ""
            await account.save()
            console.log(`${account.email} is now verified`)
        } else {
            res.status(404).send(`<h3>Page not Found</h3>
                                <p>Account not Found</p>`)
            throw new Error('Account not Found')
        }
    
        res.status(200).send(`
        <body style="text-align: center;">
            <h3>Your email is now verified!</h3>
            <p>Thank you for verifying your email.</p>
        </body>
        `)
    } catch (err) {
        if (err.name === 'TokenExpiredError'){
            const decode = jwt.decode(urlToken)
            const email = decode.email
            const url = `http://localhost:8000/requestverifylink/${email}`

            res.status(200).send(`
            <body style="text-align: center;">
                <h3>Email Link Expired!</h3>
                <p>Request another link by clicking the button below</p>
                <a href=${url}>
                    <button style="background-color: #CB8A8A; color: white; padding: 10px 24px; border: 1px solid; border-radius: 8px; cursor: pointer">
                        Request Verification Email
                    </button>
                </a>
                <p>If the button does not work, copy the link and use it to your browser.</p>
                <p>${url}</p>
            </body>
            `)
        } else {
            console.log(err.name)
        }
    }
})

const requestAnotherEmail = async(req, res) => {
    const { email } = req.params
    const uniqueString = crypto.randomBytes(64).toString('hex')

    const account = await Promise.all([
        LocalAccount.findOne({ email }),
        GoogleAccount.findOne({ email })
    ]).then(([account1, account2])=> account1 || account2 )

    if (account) {
        account.uniqueString = uniqueString
        account.save()
    } else {
        throw new Error('Account Not Found')
    }

    const jwtPayload = {
        email,
        uniqueString
    }
    
    const urlToken = generateToken(jwtPayload)
    sendVerificationEmail(email, urlToken)

    res.status(200).send(`
        <body style="text-align: center;">
            <h3>Email Sent!</h3>
            <p>Please check your email and verify as soon as possible.</p>
        </body>
    `)
}

export {verifyEmail,
        requestAnotherEmail
}