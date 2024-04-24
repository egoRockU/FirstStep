import asyncHandler from "express-async-handler";
import LocalAccount from "../models/localAccountModel.js";
import { generateToken } from "../utils/generateToken.js";
import sendChangePassReqEmail from "../utils/sendChangePassEmail.js";
import checkIfEmailExist from "../utils/checkIfEmailExists.js";
import jwt from "jsonwebtoken";

const changePasswordRequest = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const account = await checkIfEmailExist(email, LocalAccount, res);

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

const verifyToken = asyncHandler(async (req, res) => {
  const { token } = req.params;

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    res.status(200).json({
      status: "valid",
      email: decoded.email,
    });
  } catch (err) {
    res.status(401).json({
      status: "invalid",
      message: "Invalid Token.",
    });
  }
});

export { changePasswordRequest, verifyToken };
