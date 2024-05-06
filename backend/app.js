import express from "express";
import cors from "cors";
import localAccountRoutes from "./routes/localAccountRoutes.js";
import googleAccountRoutes from "./routes/googleAccountRoutes.js";
import ApplicantProfileRoutes from "./routes/ApplicantProfileRoutes.js";
import EmployerPriofileRoutes from "./routes/EmployerProfileRoutes.js";
import ResumeRoutes from "./routes/ResumeRoutes.js";
import PortfolioRoutes from "./routes/PortfolioRoutes.js";
import MessageRoutes from "./routes/MessageRoutes.js";
import { verifyEmail, requestAnotherEmail } from "./controllers/verifyEmail.js";
import {
  changePasswordRequest,
  verifyToken,
} from "./controllers/changePassword.js";
import logout from "./routes/logout.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/db.js";
import { errorHandler } from "./middlewares/errorMiddlewares.js";

const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("pages"));

//routes
app.use("/localaccounts", localAccountRoutes);
app.use("/googleaccounts", googleAccountRoutes);
app.use("/logout", logout);
app.use("/applicantprofile", ApplicantProfileRoutes);
app.use("/employerprofile", EmployerPriofileRoutes);
app.use("/resume", ResumeRoutes);
app.use("/portfolio", PortfolioRoutes);
app.get("/verify/:urlToken", verifyEmail);
app.get("/requestverifylink/:email", requestAnotherEmail);
app.post("/requestchangepass", changePasswordRequest);
app.get("/verifyToken/:token", verifyToken);
app.use("/message", MessageRoutes);

app.use(errorHandler);

export default app;
