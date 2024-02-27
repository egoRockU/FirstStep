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

function Newregister() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); // State for error message
  const [inputs, setInputs] = useState([]);
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  useEffect(() => {
    // Update inputs state whenever email or password changes
    setInputs({ email: email, password: password });
  }, [email, password]);

  const bgStyle = {
    background: `url(${bg}) center/cover no-repeat`,
    height: "100vh",
    fontFamily: "Montserrat, sans-serif",
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Reset error state
    setError("");

    // Validation checks
    if (email !== confirmEmail && email) {
      setError("Emails do not match!");
      return;
    }
    if (password !== confirmPassword && password) {
      setError("Passwords do not match!");
      return;
    }
    if (!email) {
      setError("Please enter an email");
      return;
    }
    if (!password) {
      setError("Please enter a password");
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
          alert("Account has been successfully created.");
          navigate("/login");
        })
        .catch((err) => {
          if (err.response.data.emailExist) {
            setError(err.response.data.error); // Set error message
          }
          console.log(err.response.data.error);
        });
    } else {
      setError("Email must be a valid email address");
    }
  };

  const handleGoogleRegister = async (credentialResponse) => {
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
        alert("Account has been successfully created.");
        navigate("/login");
      })
      .catch((err) => {
        if (err.response.data.emailExist) {
          setError(err.response.data.error); // Set error message
        }
        console.log(err.response.data.error);
      });
  };

  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeToPrivacyPolicy, setAgreeToPrivacyPolicy] = useState(false);

  const handleClick = () => {
    if (agreeTerms && agreeToPrivacyPolicy) {
      navigate("/");
    } else if (!agreeTerms) {
      setError("Please agree to the terms and conditions."); // Set error message
    } else if (!agreeToPrivacyPolicy) {
      setError("Please agree to the Privacy Policy"); // Set error message
    }
  };

  const clickLogin = () => {
    navigate("/newlogin");
  };

  return (
    <div style={bgStyle} className="flex flex-col">
      <div>
        <Newnavbar />
      </div>
      <div className="w-full h-full flex justify-center items-center">
      <div className="py-5 w-[65%] mx-auto bg-white opacity-80 flex">
        <div className="w-1/2">
          <div className="w-full flex justify-center items-center h-full">
            <img src={newlogo} alt="" className="w-[5%]" />
            <h1 className="text-3xl">FirstStep</h1>
          </div>
        </div>
        <div className="w-1/2">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-3xl">Register</h1>
            <form className="w-full mb-4">
              <div className="flex flex-col w-full h-1/2 mt-5 space-y-6 items-center ">
                <input
                  style={{
                    backgroundColor: "#E5E8FF",
                    fontFamily: "Montserrat, sans-serif",
                    border: "2px solid #4B0082",
                  }}
                  type="email"
                  placeholder="Email"
                  className="w-1/2 p-2 border rounded-md custom-input placeholder-black font-base"
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
                  className="w-1/2 p-2 border rounded-md custom-input font-base placeholder-black"
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
                  className="w-1/2 p-2 mb-4 border rounded-md custom-input font-base placeholder-black"
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
                  className="w-1/2 p-2 border rounded-md custom-input font-base placeholder-black"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div className="form-group flex flex-col gap-2">
                  <label>
                    <input
                      type="checkbox"
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      checked={agreeTerms}
                    />{" "}
                    I agree to the{" "}
                    <span className="text-blue-400 cursor-pointer">
                      Terms and Conditions
                    </span>
                  </label>

                  <label>
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        setAgreeToPrivacyPolicy(e.target.checked)
                      }
                      checked={agreeToPrivacyPolicy}
                    />
                    {""} I agree to{" "}
                    <span className="text-blue-400 cursor-pointer">
                      Privacy Policy
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
                {/* Display error message */}
                {error && <p className="text-[#FF0000] bg-[#FFB1B1] p-2 px-10 rounded-lg">{error}</p>}
                <div className="flex justify-between gap-3 items-center">
                  <div className="h-[1px] bg-black w-48"></div>
                  <h1 className="text-lg">OR</h1>
                  <div className="h-[1px] bg-black w-48"></div>
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
                <h1 className=" cursor-pointer">
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
    </div>
  );
}

export default Newregister;
