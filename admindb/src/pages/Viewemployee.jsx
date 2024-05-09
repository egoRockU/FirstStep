import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";
import { FaRegEdit } from "react-icons/fa";
import { Button } from "../components/ui/button";
import axios from "axios";

const Viewemployee = ({ data, name, email, theme }) => {
  const { _id, accountId, accountType } = data;
  const placeholderImg =
    "https://blueypedia.fandom.com/extensions-ucp/mw139/fandom/AgeDeclaration/resources/images/adult.png";
  const [personalDetailsEditable, setPersonalDetailsEditable] = useState(false);
  const [accountDetailsEditable, setAccountDetailsEditable] = useState(false);
  const [profileImg, setProfileImg] = useState();
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [empEmail, setEmpEmail] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [bio, setBio] = useState("");
  const [about, setAbout] = useState("");
  const [accEmail, setAccEmail] = useState("");
  const [verifier, setVerifier] = useState("");

  useEffect(() => {
    getEmployer();
  }, []);

  const togglePersonalDetailsEdit = () => {
    setPersonalDetailsEditable(!personalDetailsEditable);
  };

  const toggleAccountDetailsEdit = () => {
    if (accountType === "Google") {
      alert(
        "Google Accounts can't be edited because it might not work as intended after modifying some values"
      );

      return;
    }
    setAccountDetailsEditable(!accountDetailsEditable);
  };

  const handlePersonalDetailsSubmit = (e) => {
    e.preventDefault();
    updateMainInfo();
  };

  const handleAccountDetailsSubmit = (e) => {
    e.preventDefault();
    const proceed = confirm(
      "Are you sure you want to change these account values? "
    );
    if (proceed) {
      updateAccountInfo();
    }
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
    setPersonalDetailsEditable(false);
    setAccountDetailsEditable(false);
    getEmployer();
  };

  const isDarkTheme = theme === "dark";

  const getEmployer = () => {
    const inputs = {
      _id,
      accountId,
      accountType,
    };

    axios
      .post("/api/admin/getemployerprofile", inputs, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        const employer = res.data.employer;
        const account = res.data.account;
        setProfileImg(employer.profileImg);
        setFName(employer.firstName);
        setLName(employer.lastName);
        setEmpEmail(employer.email);
        setContactNum(employer.contactNum);
        setCity(employer.address.split(",")[0]);
        setCountry(employer.address.split(", ")[1]);
        setAddress(employer.address);
        setBio(employer.bio);
        setAbout(employer.about);
        setAccEmail(account.email);
        setVerifier(account.sub || account.password);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateMainInfo = () => {
    const input = {
      _id,
      set: {
        firstName: fName,
        lastName: lName,
        fullName: `${fName} ${lName}`,
        email,
        contactNum,
        address: `${city}, ${country}`,
        bio,
        about,
      },
    };
    axios
      .post("/api/employerprofile/update", input, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data.message);
        setPersonalDetailsEditable(false);
      })
      .catch((err) => {
        console.log(err.response.data.error);
      });
  };

  const updateAccountInfo = () => {
    const input = {
      _id: accountId,
      email: accEmail,
      password: verifier,
    };

    axios
      .post("/api/localaccounts/updateaccount", input, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data.message);
        setAccountDetailsEditable(false);
      })
      .catch((err) => {
        console.log(err.respoonse.data.error);
      });
  };

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
                  <span className="font-extrabold mr-2">Name:</span>
                  <input
                    type="text"
                    value={fName}
                    onChange={(e) => setFName(e.target.value)}
                    className={`w-full max-w-xs px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 ${
                      isDarkTheme
                        ? "bg-gray-700 text-white"
                        : "bg-white-200 text-gray-800"
                    }`}
                  />
                  <input
                    type="text"
                    value={lName}
                    onChange={(e) => setLName(e.target.value)}
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
                    value={empEmail}
                    onChange={(e) => setEmpEmail(e.target.value)}
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
                    value={contactNum}
                    onChange={(e) => setContactNum(e.target.value)}
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
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className={`w-full max-w-xs px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 ${
                      isDarkTheme
                        ? "bg-gray-700 text-white"
                        : "bg-white-200 text-gray-800"
                    }`}
                  />
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className={`w-full max-w-xs px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 ${
                      isDarkTheme
                        ? "bg-gray-700 text-white"
                        : "bg-white-200 text-gray-800"
                    }`}
                  />
                </div>
                <div className="flex items-center">
                  {/* TODO make this textbox a bit bigger */}
                  <span className="font-semibold mr-2">Bio:</span>
                  <textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className={`w-full max-w-xs px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 overflow-hidden resize-none ${
                      isDarkTheme
                        ? "bg-gray-700 text-white"
                        : "bg-white-200 text-gray-800"
                    }`}
                  />
                </div>
                <div className="flex items-center">
                  {/* TODO make this textbox a bit bigger */}
                  <span className="font-semibold mr-2">About:</span>
                  <textarea
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
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
                src={profileImg ? profileImg : placeholderImg}
                alt="Avatar"
                className="w-20 h-20 rounded-full border-4 border-black object-cover"
              />
              <div className="space-y-2">
                <div>
                  <span className="font-extrabold">Name:</span>{" "}
                  {`${fName} ${lName}`}
                </div>
                <div>
                  <span className="font-semibold">Email:</span> {empEmail}
                </div>
                <div>
                  <span className="font-semibold">Contact Number:</span>{" "}
                  {contactNum}
                </div>
                <div>
                  <span className="font-semibold">Address:</span> {address}
                </div>
                <div>
                  <span className="font-semibold">Bio:</span> {bio}
                </div>
                <div>
                  <span className="font-semibold">About:</span> {about}
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
                    value={accEmail}
                    onChange={(e) => setAccEmail(e.target.value)}
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
                    type="text"
                    value={verifier}
                    onChange={(e) => setVerifier(e.target.value)}
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
                <span className="font-semibold">Email:</span> {accEmail}
              </div>
              <div>
                <div>
                  <div>
                    {accountType === "Google" ? (
                      <>
                        <span className="font-semibold">Sub:</span>{" "}
                        <span>{verifier}</span>
                      </>
                    ) : (
                      <>
                        <span className="font-semibold">Password:</span>{" "}
                        <span>{verifier}</span>
                      </>
                    )}
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
