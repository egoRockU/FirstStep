import React from "react";
import logo from "../images/newlogo.png";
import { IoIosMailOpen } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <div className="flex bg-white w-full border-t-[1px]">
      <div className="flex flex-col md:flex-row w-full xl:w-1/2 mx-auto justify-around m-5 items-center">
        <div className="flex h-full">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <h2 className="text-2xl font-medium">FirstStep</h2>
        </div>
        <div>
          <ul className="flex flex-col gap-5 items-center md:items-start">
            <li
              className="text-[#444B88] cursor-pointer text-sm"
              onClick={() => navigate("/feedback")}
            >
              Feedback
            </li>
            <li
              className="text-[#444B88] cursor-pointer text-sm"
              onClick={() => navigate("/about")}
            >
              About Us
            </li>
            <li
              className="text-[#444B88] cursor-pointer text-sm"
              onClick={() => navigate("/termsandconditions")}
            >
              Terms & Conditions
            </li>
            <li
              className="text-[#444B88] cursor-pointer text-sm"
              onClick={() => navigate("/privacypolicy")}
            >
              Privacy Policy
            </li>
            <li
              className="text-[#444B88] cursor-pointer text-sm"
              onClick={() => navigate("/supportus")}
            >
              Support us
            </li>
          </ul>
          <p className="mt-2">@2024 FirstStep. All rights reserved.</p>
        </div>
        <div className="h-full">
          <p className="underline text-medium flex items-center gap-2">
            <IoIosMailOpen />
            <a
              href="techstack.firststep2024@gmail.com
"
            >
              techstack.firststep2024@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
