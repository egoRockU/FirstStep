import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdMessage } from "react-icons/md";
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
      apiLink = "/api/applicantprofile/getmessages";
    } else if (profileType === "employer") {
      apiLink = "/api/employerprofile/getmessages";
    }

    axios
      .post(apiLink, inputs, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
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
          <MdMessage size={32} color="#444b88" className="items-center justify-center" />
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 w-72 lg:w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="message-dropdown"
        >
          <div className="py-1" role="none">
            <div className="px-4 py-2 text=md lg:text-lg text-gray-700 font-semibold">
              Messages
            </div>
            {messages.map((message) => (
              <button
                key={message._id}
                onClick={() => clickInbox(message)}
                className="block px-4 py-2 text-lg text-gray-700 w-full text-left"
                role="menuitem"
              >
                {user.profileId === message.sender.profileId && (
                  <div className="border border-gray-300 rounded p-4 mb-4 flex items-center hover:bg-indigo-100">
                    <img
                      src={
                        message.receiver.values.profileImg
                          ? message.receiver.values.profileImg
                          : logo
                      }
                      alt="Logo"
                      className="w-6 h-6 mr-2 rounded-full border-2 border-[#444b88]"
                    />
                    <div>
                      <div className="flex flex-row items-center">
                        <p className="text-sm mr-2">Sent to: </p>
                        <p className="font-bold">{`${message.receiver.values.firstName} ${message.receiver.values.lastName}`}</p>
                      </div>
                      <div className="text-gray-600">{message.subject}</div>
                    </div>
                  </div>
                )}
                {user.profileId !== message.sender.profileId && (
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
                )}
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
          message={selectedMessage}
          userId={user.profileId}
          userType={user.profileType}
          reload={() => getMessages()}
        />
      )}
    </div>
  );
};

export default MessageDropdownMenu;
