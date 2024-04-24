import React, { useEffect, useState } from "react";
import logo from "../images/newlogo.png";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../Components/Loader";
import { toast } from "react-toastify";

function ChangePassword() {
  const navigate = useNavigate();
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [unmatched, setUnmatched] = useState(false);

  useEffect(() => {
    validateToken();
  }, []);

  if (!params) {
    navigate("/login");
  }

  const validateToken = () => {
    setLoading(true);
    axios
      .get(`/api/verifyToken/${params.token}`, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        setLoading(false);
        setEmail(res.data.email);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response.data.message);
        navigate("/");
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (pass === confirmPass) {
      setLoading(true);
      axios
        .post(
          "/api/localaccounts/changepassword",
          { email, newPassword: pass },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((res) => {
          setLoading(false);
          toast.success(res.data.message);
          navigate("/login");
        });
    } else {
      setUnmatched(true);
    }
  };

  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
      {loading ? <Loader /> : <></>}
      <div className="bg-white py-24 px-96 flex flex-col items-center shadow-[0px_0px_10px_rgba(0,0,0,0.5)]">
        <img className="w-24 h-24 mx-auto mb-4" src={logo} alt="Logo" />

        <h3 className="text-xl font-bold text-indigo-900 mb-4">
          Forgot Password
        </h3>
        <p className="text-black font-semibold text-lg mb-4">
          Enter new Password for {email}
        </p>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="mt-4 mb-4">
            <label htmlFor="password" className="text-black font-medium">
              Enter New Password
            </label>
            <input
              id="password"
              className="block border w-96 border-sky-800 rounded-md py-2 px-3 mt-1"
              type="password"
              placeholder=""
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="text-black font-medium">
              Confirm New Password
            </label>
            <input
              id="confirmPassword"
              className="block w-96 border-sky-800 border rounded-md py-2 px-3 mt-1"
              type="password"
              placeholder=""
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />
          </div>
          {unmatched && (
            <div className="bg-[#FFB1B1] text-red-500 px-4 py-2 flex justify-center rounded-md">
              <p>Password does not matched.</p>
            </div>
          )}

          <button
            type="submit"
            className="bg-blue-500 ml-52 mt-3 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
