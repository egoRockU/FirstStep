import asyncHandler from "express-async-handler";
import LocalAccount from "../models/localAccountModel.js";
import GoogleAccount from "../models/googleAccountModel.js";
import jwt from "jsonwebtoken";
import { generateToken } from "../utils/generateToken.js";
import crypto from "crypto";
import sendVerificationEmail from "../utils/sendVerificationEmail.js";
import sendAlreadyVerifiedPage from "../pages/alreadyVerified.js";
import sendEmailVerified from "../pages/emailVerified.js";
import sendEmailLinkExpiredPage from "../pages/linkExpired.js";
import sendEmailSentPage from "../pages/emailSent.js";

const verifyEmail = asyncHandler(async (req, res) => {
  const { urlToken } = req.params;
  let appDomain = process.env.APP_DOMAIN;

  try {
    const decoded = jwt.verify(urlToken, process.env.ACCESS_TOKEN_SECRET);
    const uniqueString = decoded.uniqueString;
    const account = await Promise.all([
      LocalAccount.findOne({ uniqueString }),
      GoogleAccount.findOne({ uniqueString }),
    ]).then(([account1, account2]) => account1 || account2);

    if (account) {
      account.isVerified = true;
      account.uniqueString = "";
      await account.save();
      console.log(`${account.email} is now verified`);
    } else {
      sendAlreadyVerifiedPage(res);
      return;
    }

    sendEmailVerified(res, "https://first-step-mu.vercel.app/");
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      const decode = jwt.decode(urlToken);
      const email = decode.email;
      const url = `${appDomain}/requestverifylink/${email}`;

      sendEmailLinkExpiredPage(res, url);
    } else {
      console.log(err.message);
    }
  }
});

const requestAnotherEmail = async (req, res) => {
  const { email } = req.params;
  const uniqueString = crypto.randomBytes(64).toString("hex");

  const account = await Promise.all([
    LocalAccount.findOne({ email }),
    GoogleAccount.findOne({ email }),
  ]).then(([account1, account2]) => account1 || account2);

  if (account.isVerified) {
    sendAlreadyVerifiedPage(res);
    return;
  }

  if (account) {
    account.uniqueString = uniqueString;
    account.save();
  } else {
    throw new Error("Account Not Found");
  }

  const jwtPayload = {
    email,
    uniqueString,
  };

  const urlToken = generateToken(jwtPayload);
  sendVerificationEmail(email, urlToken);

  console.log("here");
  sendEmailSentPage(res);
};

export { verifyEmail, requestAnotherEmail };
