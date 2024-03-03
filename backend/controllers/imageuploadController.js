import { createAccountWithImage } from "../utils/imageuploadUtils.js";

export const createAccountController = async (req, res) => {
  try {
    const createdAccount = await createAccountWithImage(
      req.body.firstName,
      req.body.lastName,
      req.file
    );

    res.status(201).json({
      status: "Success",
      message: "Account created successfully",
      account: createdAccount,
    });
  } catch (err) {
    console.error("Error creating account:", err);
    res.status(500).send({ status: "ERROR", message: "Internal server error" });
  }
};
