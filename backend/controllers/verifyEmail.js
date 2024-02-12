import asyncHandler from 'express-async-handler'
import LocalAccount from '../models/localAccountModel.js'
import GoogleAccount from '../models/googleAccountModel.js'

const verifyEmail = asyncHandler(async(req, res) => {
    const {uniqueString} = req.params

    const account = await Promise.all([
        LocalAccount.findOne({ uniqueString }),
        GoogleAccount.findOne({ uniqueString })
    ]).then(([account1, account2])=> account1 || account2 )

    if (account) {
        account.isVerified = true
        await account.save()
        console.log(`${account.email} is now verified`)
    } else {
        console.log('Account not found.')
    }

    res.status(200).send('<p>Thank you for confirming!. Your email is now verified.</p>')
})

export default verifyEmail