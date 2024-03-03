import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

function Forgotpassword({ onClose,  errorMessage }) {
  const [email, setEmail] = useState("");
  const [emailExists, setEmailExists] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSendEmail = () => {
    if (email === "example@example.com") {
    } else {
      setEmailExists(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="flex flex-col justify-center items-center w-full h-full bg-black shadow-md rounded-md">
        <div className="w-1/4 bg-white shadow-lg">
          <div className="flex flex-col items-start justify-start h-1/4 px-4 py-4 gap-4">
            <div className="flex flex-col justify-between w-full">
              <div className="flex justify-between w-full">
                <h1 className="text-xl text-[#444B88] font-bold">
                  Forgot Password
                </h1>
                <div className="flex justify-end">
                  <IoCloseOutline
                    color="black"
                    size={30}
                    onClick={onClose} 
                  />
                </div>
              </div>
              <hr className="w-full border-gray-400 my-2" />
            </div>
            <div className="w-full gap-5 flex flex-col">
              <div>Enter your Email</div>
              <input
                type="email"
                name=""
                id=""
                value={email}
                onChange={handleEmailChange}
                className="p-2 border-2 border-[#444B88] w-full bg-[#E5E8FF] rounded-lg"
              />
              {!emailExists && (
                <div className="bg-[#FFB1B1] text-red-500 px-4 py-2 flex justify-center rounded-md">
                  {errorMessage}
                </div>
              )}
            </div>
            <div className="flex flex-col w-full items-end justify-end gap-5">
              <div className="w-full">
                <hr className="w-full border-gray-400 my-2" />
              </div>
              <button
                onClick={handleSendEmail}
                className="border-2 border-[#444B88] bg-[#8B95EE] px-3 py-0 rounded-md"
              >
                Send Email
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Forgotpassword;
