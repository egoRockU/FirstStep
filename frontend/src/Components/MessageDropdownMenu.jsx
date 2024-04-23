import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bell from "../images/bell.svg";
import logo from "../images/profile.svg";
import Messagemodal from "../Modals/Messagemodal";
import axios from "axios";
import { useSelector } from "react-redux";

const MessageDropdownMenu = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages();
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const clickInbox = (message) => {
    setSelectedMessage(message);
    setIsOpen(false);
  };

  const viewAllMessages = () => {
    navigate("/inbox");
    setIsOpen(false);
  };

  const getMessages = () => {
    const { profileType, profileId } = user;
    const inputs = {
      profileId,
    };
    let apiLink;
    if (profileType === "applicant") {
      apiLink = "/api/applicantprofile/getMessages";
    } else if (profileType === "employer") {
      apiLink = "/api/employerprofile/getMessages";
    }

    axios
      .post(apiLink, inputs, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        console.log(res.data);
        setMessages(res.data.slice(0, 3));
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  return (
    <div className="relative inline-block">
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex justify-center w-full py-2 bg-transparent text-sm font-medium text-gray-700"
          id="message-dropdown"
          aria-haspopup="true"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <img
            src={bell}
            alt=""
            className="text-black duration-500 mx-2 cursor-pointer w-8 h-8"
          />
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="message-dropdown"
        >
          <div className="py-1" role="none">
            <div className="px-4 py-2 text-lg text-gray-700 font-semibold">
              Messages
            </div>
            {messages.map((message) => (
              <button
                key={message._id}
                onClick={() => clickInbox(message)}
                className="block px-4 py-2 text-lg text-gray-700 w-full text-left"
                role="menuitem"
              >
                <div className="border border-gray-300 rounded p-4 mb-4 flex items-center hover:bg-indigo-100">
                  <img
                    src={
                      message.sender.values.profileImg
                        ? message.sender.values.profileImg
                        : logo
                    }
                    alt="Logo"
                    className="w-6 h-6 mr-2 rounded-full border-2 border-[#444b88]"
                  />
                  <div>
                    <div className="font-bold">
                      {`${message.sender.values.firstName} ${message.sender.values.lastName}`}
                    </div>
                    <div className="text-gray-600">{message.subject}</div>
                  </div>
                </div>
              </button>
            ))}
            <button
              onClick={viewAllMessages}
              className="block px-4 py-2 text-lg text-gray-700 hover:bg-indigo-100 w-full text-left"
              role="menuitem"
            >
              View All Messages
            </button>
          </div>
        </div>
      )}
      {selectedMessage && (
        <Messagemodal
          closeModal={() => setSelectedMessage(null)}
          messageId={selectedMessage}
        />
      )}
    </div>
  );
};

export default MessageDropdownMenu;
