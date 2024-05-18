import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, loginGoogle } from "../slices/userSlice";
import Modal from "../Modals/Forgotpassword";
import { toast } from "react-toastify";
import Loader from "../Components/Loader";
import bg from "../images/signBg.jpg";
import newlogo from "../images/newlogo.png";
import Newnavbar from "../Components/Newnavbar";

function Newlogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputs, setInputs] = useState([]);
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);

  useEffect(() => {
    setInputs({ email: email, password: password });
  }, [email, password]);

  const login = (e) => {
    e.preventDefault();
    if (validator.isEmail(email)) {
      dispatch(loginUser(inputs)).then((res) => {
        if (res.error) {
          toast.error(res.error.message);
        } else {
          navigate("/");
        }
      });
    } else {
      toast.error("Email must be a valid email address");
    }
  };

  const handleGoogleLogin = (credentialResponse) => {
    let credential = jwtDecode(credentialResponse.credential);
    const googleInputs = {
      email: credential.email,
      sub: credential.sub,
    };
    dispatch(loginGoogle(googleInputs)).then((result) => {
      if (result.error) {
        navigate("/register");
      }
      navigate("/");
    });
  };

  const clickRegister = () => {
    navigate("/register");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Newnavbar />
      <div className="relative flex flex-col w-screen h-screen top-10 md:top-0">
        <img src={bg} alt="" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 w-full h-full flex justify-center items-center">
          <div className="h-auto w-[80%] lg:w-[65%] mx-auto bg-white opacity-80 flex flex-col lg:flex-row relative">
            <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-center gap-8 p-4">
              <h1 className="text-3xl">Log In</h1>
              <input
                style={{
                  backgroundColor: "#E5E8FF",
                  fontFamily: "Montserrat, sans-serif",
                  border: "2px solid #4B0082",
                }}
                type="email"
                placeholder="Email"
                className="w-[90%] lg:w-2/3 p-2 border rounded-md custom-input placeholder-black font-base"
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                style={{
                  backgroundColor: "#E5E8FF",
                  fontFamily: "Montserrat, sans-serif",
                  border: "2px solid #4b0082",
                }}
                type="password"
                placeholder="Password"
                className="w-[90%] lg:w-2/3 p-2 border rounded-md custom-input placeholder-black font-base"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="flex items-start w-[90%] lg:w-2/3 mx-auto">
                <h1
                  className="cursor-pointer hover:underline"
                  button
                  onClick={openModal}
                >
                  Forgot password?
                </h1>
                {isModalOpen && (
                  <Modal
                    onClose={closeModal}
                    errorMessage="Email does not exist"
                  />
                )}
              </div>
              <button
                className="w-[90%] lg:w-1/2 mx-auto p-2 rounded-full bg-blue-500 text-white "
                type="submit"
                onClick={login}
              >
                {loading ? <Loader /> : "Log In"}
              </button>
              <div className="flex justify-between gap-3 items-center">
                <h1 className="text-lg">OR</h1>
              </div>
              <div
                className={`flex items-center w-[90%] lg:w-2/3 mx-auto ${
                  isModalOpen ? "hidden" : ""
                }`}
              >
                {loading ? (
                  <Loader />
                ) : (
                  <GoogleOAuthProvider clientId={googleClientId}>
                    <GoogleLogin
                      onSuccess={handleGoogleLogin}
                      type="button"
                      size="large"
                      text="Sign in with Google"
                      shape="pill"
                    />
                  </GoogleOAuthProvider>
                )}
              </div>

              <div className="flex items-start w-full lg:w-[70%]
              
              mx-auto">
                <h1 className=" cursor-pointer">
                  Don't have an Account? Register{" "}
                  <span className="text-blue-400" onClick={clickRegister}>
                    Here.
                  </span>
                </h1>
              </div>
            </div>
            <div className="hidden lg:w-1/2 lg:flex justify-center items-center">
              <div className="flex items-center">
                <img src={newlogo} alt="" className="w-8" />
                <h1 className="text-3xl">FirstStep</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newlogin;
