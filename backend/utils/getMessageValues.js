import Message from "../models/MessageModel.js";
import ApplicantProfile from "../models/ApplicantProfileModel.js";
import EmployerProfile from "../models/EmployerProfileModel.js";

const getMessageValues = async (messageId) => {
  try {
    let message = await Message.findById(messageId);
    let { sender, receiver } = message;
    const senderId = sender.profileId;
    const senderType = sender.profileType;
    const receiverId = receiver.profileId;
    const receiverType = receiver.profileType;

    //fill sender and receiver with actual values
    if (senderType === "applicant") {
      sender.values = await ApplicantProfile.findById(senderId).select(
        "firstName lastName profileImg"
      );
    } else {
      sender.values = await EmployerProfile.findById(senderId).select(
        "firstName lastName profileImg"
      );
    }

    if (receiverType === "applicant") {
      receiver.values = await ApplicantProfile.findById(receiverId).select(
        "firstName lastName profileImg"
      );
    } else {
      receiver.values = await EmployerProfile.findById(receiverId).select(
        "firstName lastName profileImg"
      );
    }
    return message;
  } catch (err) {
    console.log(err);
  }
};

const getFeedbackValues = async (feedback) => {
  try {
    const { sender } = feedback;
    if (sender.profileType === "applicant") {
      sender.values = await ApplicantProfile.findById(sender.profileId).select(
        "firstName lastName profileImg"
      );
    } else {
      sender.values = await EmployerProfile.findById(sender.profileId).select(
        "firstName lastName profileImg"
      );
    }
    return feedback;
  } catch (err) {
    console.log(err);
  }
};

export { getFeedbackValues, getMessageValues };
