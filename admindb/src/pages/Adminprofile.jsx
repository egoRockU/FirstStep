import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import logo from "../images/logo.png";

export default function AdminProfile({ theme }) {
  const navigate = useNavigate();
  const isDarkTheme = theme === "dark";

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
              <div className="grid gap-4">
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
                    className={isDarkTheme ? "text-red-500" : "text-green-500"}
                    onClick={() => navigate(-1)}
                  >
                    Cancel
                  </Button>
                  <Button
                    className={isDarkTheme ? "text-green-500" : "text-red-500"}
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
