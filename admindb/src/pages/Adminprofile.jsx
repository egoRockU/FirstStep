import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import logo from "../images/logo.png";
import { useSelector } from "react-redux";
import axios from "axios";

export default function AdminProfile({ theme }) {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const isDarkTheme = theme === "dark";
  const [username, setUsername] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPass, setConfirmNewPass] = useState("");
  const [error, setError] = useState("");

  const updateAdmin = () => {
    if (confirmNewPass !== newPassword) {
      alert("New password and comfirm password must be matched!");
      return;
    }

    if (!username) return alert("Please Add New Username");
    if (!currentPassword) return alert("Please Write your Current Password");
    if (!newPassword) return alert("Please enter a New Password");

    const inputs = {
      _id: user.id,
      username,
      currentPassword,
      newPassword,
    };
    axios
      .post("/api/localaccounts/updateadmin", inputs, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        alert("Admin Account update done");
        console.log(res.data.message);
        navigate("/dashboard");
      })
      .catch((err) => {
        setError(err.response.data.error);
        console.log(err.response.data.error);
      });
  };

  return (
    <>
      <Navbar theme={theme} />
      <div className="flex">
        <Sidebar theme={theme} />
        <div
          className={`flex flex-col items-center justify-center h-screen w-full ${
            isDarkTheme ? "bg-gray-800 text-white" : " text-white-800"
          }`}
        >
          <div className="w-full max-w-[450px] bg-secondary rounded-lg p-6 shadow-lg">
            <img src={logo} alt="Logo" className="w-15 h-16 mb-8 mx-auto" />
            <div className="grid gap-6 text-center">
              <h1
                className={`text-3xl font-bold ${
                  isDarkTheme ? "text-white" : "text-white-800"
                }`}
              >
                Admin Profile
              </h1>
              <p className="text-red-500">{error}</p>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label
                    htmlFor="username"
                    className={isDarkTheme ? "text-white" : "text-white-800"}
                  >
                    Change Username
                  </Label>
                  <Input
                    id="username"
                    placeholder={user.username ? user.username : user.email}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className={`w-full px-3 py-2 rounded-md focus:outline-none ${
                      isDarkTheme
                        ? "bg-gray-700 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  />
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="currentPassword"
                    className={isDarkTheme ? "text-white" : "text-white-800"}
                  >
                    Current Password
                  </Label>
                  <Input
                    id="currentPassword"
                    type="password"
                    placeholder="Current Password"
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                    className={`w-full px-3 py-2 rounded-md focus:outline-none ${
                      isDarkTheme
                        ? "bg-gray-700 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  />
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="newPassword"
                    className={isDarkTheme ? "text-white" : "text-white-800"}
                  >
                    New Password
                  </Label>
                  <Input
                    id="newPassword"
                    type="password"
                    placeholder="New Password"
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    className={`w-full px-3 py-2 rounded-md focus:outline-none ${
                      isDarkTheme
                        ? "bg-gray-700 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  />
                </div>
                <div className="grid gap-2">
                  <Label
                    htmlFor="confirmPassword"
                    className={isDarkTheme ? "text-white" : "text-white-800"}
                  >
                    Confirm New Password
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm New Password"
                    onChange={(e) => setConfirmNewPass(e.target.value)}
                    required
                    className={`w-full px-3 py-2 rounded-md focus:outline-none ${
                      isDarkTheme
                        ? "bg-gray-700 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  />
                </div>

                <div className="flex justify-between mt-4">
                  <Button
                    className={isDarkTheme ? "text-green-500" : "text-red-500"}
                    onClick={() => navigate(-1)}
                  >
                    Cancel
                  </Button>
                  <Button
                    className={isDarkTheme ? "text-red-500" : "text-green-500"}
                    onClick={updateAdmin}
                  >
                    Save
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
