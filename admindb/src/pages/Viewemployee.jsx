import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";
import { FaRegEdit } from "react-icons/fa";
import { Button } from "../components/ui/button";

const Viewemployee = ({ name, email, theme }) => {
  const [personalDetailsEditable, setPersonalDetailsEditable] = useState(false);
  const [accountDetailsEditable, setAccountDetailsEditable] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedEmail, setEditedEmail] = useState(email);

  const togglePersonalDetailsEdit = () => {
    setPersonalDetailsEditable(!personalDetailsEditable);
  };

  const toggleAccountDetailsEdit = () => {
    setAccountDetailsEditable(!accountDetailsEditable);
  };

  const handlePersonalDetailsSubmit = (e) => {
    e.preventDefault();
    setPersonalDetailsEditable(false);
  };

  const handleAccountDetailsSubmit = (e) => {
    e.preventDefault();
    setAccountDetailsEditable(false);
  };

  const handleSave = (e) => {
    if (personalDetailsEditable) {
      handlePersonalDetailsSubmit(e);
    }
    if (accountDetailsEditable) {
      handleAccountDetailsSubmit(e);
    }
  };

  const handleDiscardChanges = (e) => {
    setEditedName(name);
    setEditedEmail(email);
    setPersonalDetailsEditable(false);
    setAccountDetailsEditable(false);
  };

  const isDarkTheme = theme === "dark";

  return (
    <div className="space-y-4">
      {/* Personal Details Card */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Personal Details</CardTitle>
            <FaRegEdit
              className="text-gray-500 hover:text-gray-700 cursor-pointer"
              onClick={togglePersonalDetailsEdit}
            />
          </div>
        </CardHeader>
        <CardContent>
          {personalDetailsEditable ? (
            <form onSubmit={handlePersonalDetailsSubmit}>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="font-extrabold mr-2">
                    First Name, Last Name:
                  </span>
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    className={`w-full max-w-xs px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 ${
                      isDarkTheme
                        ? "bg-gray-700 text-white"
                        : "bg-white-200 text-gray-800"
                    }`}
                  />
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Email:</span>
                  <input
                    type="email"
                    value={editedEmail}
                    onChange={(e) => setEditedEmail(e.target.value)}
                    className={`w-full max-w-xs px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 ${
                      isDarkTheme
                        ? "bg-gray-700 text-white"
                        : "bg-white-200 text-gray-800"
                    }`}
                  />
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Contact Number:</span>
                  <input
                    type="text"
                    defaultValue="1234567890"
                    className={`w-full max-w-xs px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 ${
                      isDarkTheme
                        ? "bg-gray-700 text-white"
                        : "bg-white-200 text-gray-800"
                    }`}
                  />
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Address:</span>
                  <input
                    type="text"
                    defaultValue="123 Street, City, Country"
                    className={`w-full max-w-xs px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 ${
                      isDarkTheme
                        ? "bg-gray-700 text-white"
                        : "bg-white-200 text-gray-800"
                    }`}
                  />
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Bio:</span>
                  <textarea
                    defaultValue="DOGLIKEFESH"
                    className={`w-full max-w-xs px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 overflow-hidden resize-none ${
                      isDarkTheme
                        ? "bg-gray-700 text-white"
                        : "bg-white-200 text-gray-800"
                    }`}
                  />
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">About:</span>
                  <textarea
                    defaultValue="DOGEATER"
                    className={`w-full max-w-xs px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 overflow-hidden resize-none ${
                      isDarkTheme
                        ? "bg-gray-700 text-white"
                        : "bg-white-200 text-gray-800"
                    }`}
                  />
                </div>
              </div>
            </form>
          ) : (
            <div className="flex space-x-4">
              <img
                src="https://blueypedia.fandom.com/extensions-ucp/mw139/fandom/AgeDeclaration/resources/images/adult.png"
                alt="Avatar"
                className="w-20 h-20 rounded-full border-4 border-black object-cover"
              />
              <div className="space-y-2">
                <div>
                  <span className="font-extrabold">First Name, Last Name:</span>{" "}
                  {name}
                </div>
                <div>
                  <span className="font-semibold">Email:</span> {email}
                </div>
                <div>
                  <span className="font-semibold">Contact Number:</span>{" "}
                  1234567890
                </div>
                <div>
                  <span className="font-semibold">Address:</span> G9 ANTIPOLO
                  STREET FAIRVIEW QUIZON CITY
                </div>
                <div>
                  <span className="font-semibold">Bio:</span> DOGLIKEFESH
                </div>
                <div>
                  <span className="font-semibold">About:</span> DOGEATER
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Account Details Card */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Account Details</CardTitle>
            <FaRegEdit
              className="text-gray-500 hover:text-gray-700 cursor-pointer"
              onClick={toggleAccountDetailsEdit}
            />
          </div>
        </CardHeader>
        <CardContent>
          {accountDetailsEditable ? (
            <form onSubmit={handleAccountDetailsSubmit}>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Email:</span>
                  <input
                    type="email"
                    value={editedEmail}
                    onChange={(e) => setEditedEmail(e.target.value)}
                    className={`w-full max-w-xs px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 overflow-hidden resize-none ${
                      isDarkTheme
                        ? "bg-gray-700 text-white"
                        : "bg-white-200 text-gray-800"
                    }`}
                  />
                </div>
                <div className="flex items-center">
                  <span className="font-semibold mr-2">Password:</span>
                  <input
                    type="password"
                    value="password"
                    className={`w-full max-w-xs px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 overflow-hidden resize-none ${
                      isDarkTheme
                        ? "bg-gray-700 text-white"
                        : "bg-white-200 text-gray-800"
                    }`}
                  />
                </div>
              </div>
            </form>
          ) : (
            <div className="flex flex-col space-y-4">
              <div>
                <span className="font-semibold">Email:</span> {email}
              </div>
              <div>
                <div>
                  <div>
                    <span className="font-semibold">Password:</span>{" "}
                    <span>********</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {(personalDetailsEditable || accountDetailsEditable) && (
        <div className="flex justify-end pr-20">
          <Button
            className={`btn btn-secondary mr-5 ${
              isDarkTheme ? "text-green-500" : "text-red-500"
            }`}
            onClick={handleDiscardChanges}
          >
            Discard Changes
          </Button>
          <Button
            type="submit"
            className={`btn btn-primary ${
              isDarkTheme ? "text-green-500" : "text-green-500"
            }`}
            onClick={handleSave}
          >
            Save
          </Button>
        </div>
      )}
    </div>
  );
};

export default Viewemployee;
