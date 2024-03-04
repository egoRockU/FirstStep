import bg from "../images/signBg.jpg";
import newlogo from "../images/newlogo.png";
import Newnavbar from "../Components/Newnavbar";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, loginGoogle } from "../slices/userSlice";
import Modal from "../Modals/Forgotpassword";
import { toast } from "react-toastify";
function Newlogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputs, setInputs] = useState([]);
  const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    setInputs({ email: email, password: password });
  }, [email, password]);

  const login = (e) => {
    e.preventDefault();
    if (validator.isEmail(email)) {
      dispatch(loginUser(inputs)).then((res) => {
        if (res.error) {
          alert(res.error.message);
        } else {
          navigate("/");
          toast.success("Succesfully Logged In")
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
    });
    navigate("/");
  };

  const bgStyle = {
    background: `url(${bg}) center/cover no-repeat`,
    height: "100vh",
    fontFamily: "Montserrat, sans-serif",
  };

  const clickRegister = () => {
    navigate("/newregister");
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={bgStyle} className="flex flex-col">
      <div>
        <Newnavbar />
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="h-[65%] w-[65%] mx-auto bg-white opacity-80 flex">
          <div className="w-1/2 h-full flex flex-col items-center justify-center gap-8">
            <h1 className="text-3xl">Log In</h1>
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
              className="w-1/2 p-2 border rounded-md custom-input placeholder-black font-base"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="flex items-start w-1/2 mx-auto">
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
              className="w-1/2 mx-auto p-2 rounded-full bg-blue-500 text-white "
              type="submit"
              onClick={login}
            >
              Log In
            </button>
            <div className="flex justify-between gap-3 items-center">
              <div className="h-[1px] bg-black w-48"></div>
              <h1 className="text-lg">OR</h1>
              <div className="h-[1px] bg-black w-48"></div>
            </div>
            <div
              className={`flex items-center w-1/2 mx-auto ${
                isModalOpen ? "hidden" : ""
              }`}
            >
              <GoogleOAuthProvider clientId={googleClientId}>
                <GoogleLogin
                  onSuccess={handleGoogleLogin}
                  type="buttton"
                  size="large"
                  text="signin_with"
                  shape="pill"
                />
              </GoogleOAuthProvider>
            </div>

            <div className="flex items-start w-1/2 mx-auto">
              <h1 className=" cursor-pointer">
                Don't have an Account? Register{" "}
                <span className="text-blue-400" onClick={clickRegister}>
                  Here.
                </span>
              </h1>
            </div>
          </div>
          <div className="w-1/2">
            <div className="w-full flex justify-center items-center h-full">
              <img src={newlogo} alt="" className="w-[5%]" />
              <h1 className="text-3xl">FirstStep</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newlogin;
