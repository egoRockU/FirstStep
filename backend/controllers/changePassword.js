import asyncHandler from "express-async-handler";
import LocalAccount from "../models/localAccountModel.js";
import GoogleAccount from "../models/googleAccountModel.js";
import { generateToken } from "../utils/generateToken.js";
import sendChangePassReqEmail from "../utils/sendChangePassEmail.js";

const changePasswordRequest = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const account = await Promise.all([
    LocalAccount.findOne({ email }),
    GoogleAccount.findOne({ email }),
  ]).then(([account1, account2]) => account1 || account2);

  if (account) {
    const jwtPayload = { email };
    const urlToken = generateToken(jwtPayload);

    sendChangePassReqEmail(email, urlToken);
    res.status(200).json({
      message:
        "An Email has been sent! Please check your inbox to proceed with changing password.",
    });
  } else {
    res.status(404).json({
      message: "Email not Found.",
    });
  }
});

export { changePasswordRequest };
