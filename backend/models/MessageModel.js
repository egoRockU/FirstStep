import mongoose from "mongoose";
import { ProfileSchema } from "./OtherSchema.js";

const { Schema } = mongoose;

const MessageSchema = new Schema(
  {
    sender: {
      type: ProfileSchema,
      required: false,
      default: {},
    },
    receiver: {
      type: ProfileSchema,
      required: false,
      default: {},
    },
    subject: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", MessageSchema);

export default Message;
