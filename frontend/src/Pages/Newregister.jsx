import bg from "../images/signBg.jpg";
import Newnavbar from "../Components/Newnavbar";
import newlogo from "../images/newlogo.png";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import validator from "validator";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import "../Fonts.css";
import Terms from "../Modals/Terms.jsx";
import Privacyandpolicy from "../Modals/Privacyandpolicy.jsx";
import { toast } from "react-toastify";
import Loader from "../Components/Loader.jsx";

function Newregister() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [inputs, setInputs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeToPrivacyPolicy, setAgreeToPrivacyPolicy] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);

  useEffect(() => {
    setInputs({ email: email, password: password });
  }, [email, password]);

  const handleRegister = (e) => {
    e.preventDefault();

    setError("");
    setIsLoading(true);

    if (email !== confirmEmail && email) {
      setError("Emails do not match!");
      setIsLoading(false);
      return;
    }
    if (password !== confirmPassword && password) {
      setError("Passwords do not match!");
      setIsLoading(false);
      return;
    }
    if (!email) {
      setError("Please enter an email");
      setIsLoading(false);
      return;
    }
    if (!password) {
      setError("Please enter a password");
      setIsLoading(false);
      return;
    }

    if (!agreeTerms) {
      toast.error("Please review and accept the Terms & Conditions");
      setError("Please review and accept the Terms & Conditions");
      setIsLoading(false);
      return;
    }

    if (!agreeToPrivacyPolicy) {
      toast.error("Please review and accept the Privacy Policy");
      setError("Please review and accept the Privacy Policy");
      setIsLoading(false);
      return;
    }

    if (validator.isEmail(email)) {
      axios
        .post("/api/localaccounts/create", inputs, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((res) => {
          toast.success("Account has been successfully created.");
          navigate("/login");
        })
        .catch((err) => {
          if (err.response.data.emailExist) {
            setError(err.response.data.error);
          }
          console.log(err.response.data.error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setError("Email must be a valid email address");
      setIsLoading(false);
    }
  };

  const handleGoogleRegister = async (credentialResponse) => {
    setIsLoading(true);

    if (!agreeTerms) {
      toast.error("Please review and accept the Terms & Conditions");
      setError("Please review and accept the Terms & Conditions");
      setIsLoading(false);
      return;
    }

    if (!agreeToPrivacyPolicy) {
      toast.error("Please review and accept the Terms & Conditions");
      setError("Please review and accept the Privacy Policy");
      setIsLoading(false);
      return;
    }

    let credential = jwtDecode(credentialResponse.credential);
    const googleInputs = {
      email: credential.email,
      sub: credential.sub,
    };

    axios
      .post("/api/googleaccounts/create", googleInputs, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        toast.success("Account has been successfully created.");
        setIsLoading(false);
        navigate("/login");
      })
      .catch((err) => {
        if (err.response.data.emailExist) {
          setError(err.response.data.error);
        }
        console.log(err.response.data.error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleTermsOpen = () => {
    setIsTermsOpen(true);
  };

  const handlePolicyOpen = () => {
    setIsPolicyOpen(true);
  };

  const handleTermsClose = () => {
    setIsTermsOpen(false);
  };

  const handlePolicyClose = () => {
    setAgreeTerms(false);
  };

  const handleTermsCheckboxChange = (e) => {
    setAgreeTerms(e.target.checked);
  };

  const handlePolicyCheckboxChange = (e) => {
    setAgreeToPrivacyPolicy(e.target.checked);
  };

  const clickLogin = () => {
    navigate("/login");
  };

  const handleAcceptTerms = () => {
    setAgreeTerms(true);
    setIsTermsOpen(false);
  };

  const handleAcceptPolicy = () => {
    setAgreeToPrivacyPolicy(true);
    setIsPolicyOpen(false);
  };

  const handleDeclineTerms = () => {
    setAgreeTerms(false);
    setIsTermsOpen(false);
  };

  const handleDeclinePolicy = () => {
    setAgreeToPrivacyPolicy(false);
    setIsPolicyOpen(false);
  };

  return (
    <>
      <Newnavbar />
      <div className="relative flex flex-col w-screen h-screen top-10 md:top-0">
        <img
          src={bg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 w-full h-full flex justify-center items-center">
          <div className="lg:py-5 w-full xl:w-[60%] h-auto mx-auto bg-white opacity-80 flex flex-col lg:flex-row pt-10">
            <div className="w-full lg:w-1/2 mx-auto">
              <div className="w-full flex justify-center items-center h-full ">
                <img src={newlogo} alt="" className="w-[5%]" />
                <h1 className="text-2xl lg:text-3xl">FirstStep</h1>
              </div>
            </div>
            <div className="w-full lg:w-2/3">
              <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
                <h1 className="text-2xl lg:text-3xl">Register</h1>
                <form className="w-full">
                  <div className="flex flex-col gap-3 lg:gap-5 w-full pt-3 items-center ">
                    <input
                      style={{
                        backgroundColor: "#E5E8FF",
                        fontFamily: "Montserrat, sans-serif",
                        border: "2px solid #4B0082",
                      }}
                      type="email"
                      placeholder="Email"
                      className="w-[80%] lg:w-1/2 p-2 border rounded-md custom-input placeholder-black font-base"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      style={{
                        backgroundColor: "#E5E8FF",
                        fontFamily: "Montserrat, sans-serif",
                        border: "2px solid #4B0082",
                      }}
                      type="email"
                      placeholder="Confirm Email"
                      className="w-[80%] lg:w-1/2 p-2 border rounded-md custom-input font-base placeholder-black"
                      onChange={(e) => setConfirmEmail(e.target.value)}
                    />
                    <input
                      style={{
                        backgroundColor: "#E5E8FF",
                        fontFamily: "Montserrat, sans-serif",
                        border: "2px solid #4B0082",
                      }}
                      type="password"
                      placeholder="Password"
                      className="w-[80%] lg:w-1/2 p-2  border rounded-md custom-input font-base placeholder-black"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                      style={{
                        backgroundColor: "#E5E8FF",
                        fontFamily: "Montserrat, sans-serif",
                        border: "2px solid #4B0082",
                      }}
                      type="password"
                      placeholder="Confirm Password"
                      className="w-[80%] lg:w-1/2 p-2 border rounded-md custom-input font-base placeholder-black"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <div className="form-group flex flex-col gap-2">
                      <label>
                        <span onClick={handleTermsOpen}>
                          <input
                            type="checkbox"
                            onChange={handleTermsCheckboxChange}
                            checked={agreeTerms}
                          />{" "}
                          I agree to the{" "}
                          <span className="text-blue-400 cursor-pointer">
                            Terms and Conditions
                          </span>
                        </span>
                      </label>
                      <label>
                        <span onClick={handlePolicyOpen}>
                          <input
                            type="checkbox"
                            onChange={handlePolicyCheckboxChange}
                            checked={agreeToPrivacyPolicy}
                          />{" "}
                          {""}I agree to{" "}
                          <span className="text-blue-400 cursor-pointer">
                            Privacy Policy
                          </span>
                        </span>
                      </label>
                    </div>
                    <button
                      type="submit"
                      className=" bg-indigo-400 w-1/2 p-2 rounded-full text-black"
                      onClick={handleRegister}
                    >
                      Register
                    </button>
                    {error && (
                      <p className="text-[#FF0000] bg-[#FFB1B1] p-2 px-10 rounded-lg">
                        {error}
                      </p>
                    )}
                    {isLoading && <Loader />} {/* Show loader while loading */}
                    <div className="flex justify-between gap-3 items-center">
                      <h1 className="text-lg">OR</h1>
                    </div>
                    <GoogleOAuthProvider clientId={googleClientId}>
                      <GoogleLogin
                        onSuccess={handleGoogleRegister}
                        type="buttton"
                        size="large"
                        text="signup_with"
                        shape="pill"
                        logo_alignment="center"
                      />
                    </GoogleOAuthProvider>
                    <h1 className=" cursor-pointer pb-4">
                      Already have an Account? Login{" "}
                      <span className="text-blue-400" onClick={clickLogin}>
                        Here.
                      </span>
                    </h1>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Terms
          isOpen={isTermsOpen}
          onClose={handleTermsClose}
          onAccept={handleAcceptTerms}
          onDecline={handleDeclineTerms}
        />
        <Privacyandpolicy
          isOpen={isPolicyOpen}
          onClose={handlePolicyClose}
          onAccept={handleAcceptPolicy}
          onDecline={handleDeclinePolicy}
        />
      </div>
    </>
  );
}

export default Newregister;
