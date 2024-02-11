import nodemailer from 'nodemailer'

const sendVerificationEmail = (email, uniqueString) => {

    const transporter = nodemailer.createTransport({
        service: "Gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            type: 'login',
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASS
        }
    })

    const sender = {
        name: 'First Step',
        address: process.env.GMAIL_USER
    }

    const options = {
        from: sender,
        to: email,
        subject: 'FirstStep Email Verification',
        html: `Please click <a href=http://localhost:5000/verify/${uniqueString} here to confirm your registraion.`
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