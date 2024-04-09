import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const sendChangePassReqEmail = async (email, urlToken) => {
  let clientDomain = process.env.TEST_CLIENT_DOMAIN;
  const url = `${clientDomain}/changepassword/${urlToken}`;

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
    subject: "FirstStep Change Password Request",
    html: `<p>We have recieved a request to reset the password for you account.</p>
    <p>For security purposes, the link is only valid for three(3) days and you have to send a request again.</p>
    <p>To proceed, click on the button below: </p>
    <a href=${url}>
        <button style="background-color: #8B95EE; color: white; padding: 10px 24px; border: 1px solid; border-radius: 8px; cursor: pointer">
            Reset Password
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
        console.log("Change Password Request Email Sent!");
        resolve();
        return;
      }
    });
  });
};

export default sendChangePassReqEmail;
