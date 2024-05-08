import mongoose from "mongoose";
import { ProfileSchema } from "./OtherSchema.js";

const { Schema } = mongoose;

const FeedbackSchema = new Schema(
  {
    sender: {
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
  { timestamps: true }
);

const Feedback = mongoose.model("Feedback", FeedbackSchema);

export default Feedback;
