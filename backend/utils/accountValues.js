import GoogleAccount from "../models/googleAccountModel.js";
import LocalAccount from "../models/localAccountModel.js";

export const getAccountValues = async (profile) => {
  try {
    const localAccount = await LocalAccount.findById({
      _id: profile.accountId,
    });
    const googleAccount = await GoogleAccount.findById({
      _id: profile.accountId,
    });

    if (localAccount) {
      profile.accountType = "Local";
    }

    if (googleAccount) {
      profile.accountType = "Google";
    }

    profile.fullName = `${profile.firstName} ${profile.lastName}`;

    return profile;
  } catch (err) {
    console.log(err);
  }
};
