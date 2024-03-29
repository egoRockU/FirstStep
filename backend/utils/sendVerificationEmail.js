import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const sendVerificationEmail = async (email, urlToken) => {
  let appDomain = process.env.APP_DOMAIN;
  const url = `${appDomain}/verify/${urlToken}`;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASS,
    },
  });

  let options = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "FirstStep Email Verification",
    html: `<p>Thank you for signing up in FirstStep!</p> 
            <p>By verifying your Email, we can confirm that: </p>
            <ul>
                <li>You're a real person.</li>
                <li>You've read and agreed our terms and conditions as well as our privacy policy.</li>
                <li>This email account is working and can be use to send important notifications.</li>
            </ul>
            <p>Click the button below to verify your email!.</p>
            <a href=${url}>
                <button style="background-color: #8B95EE; color: white; padding: 10px 24px; border: 1px solid; border-radius: 8px; cursor: pointer">
                    Verify Email
                </button>
            </a>

            <p>If the button does not work, copy the link and use it to your browser.</p>
            <p>${url}</p>
            `,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(options, (err, res) => {
      if (err) {
        console.log(err);
        reject(err);
        return;
      } else {
        console.log("Email Sent!");
        resolve();
        return;
      }
    });
  });
};

export default sendVerificationEmail;
