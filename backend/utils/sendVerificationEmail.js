import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

const sendVerificationEmail = (email, uniqueString) => {

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASS
        }
    })

    // const sender = {
    //     name: 'FirstStep',
    //     address: process.env.GMAIL_USER
    // }

    let options = {
        from: process.env.GMAIL_USER,
        to: email,
        subject: 'FirstStep Email Verification',
        html: `Please click <a href=http://localhost:8000/verify/${uniqueString}> here </a> to confirm your registraion.`
    }

    transporter.sendMail(options, (err, res) => {
        if (err) {
            console.log(err.message)
        } else {
            console.log("Email Sent!")
        }
    })
}

export default sendVerificationEmail