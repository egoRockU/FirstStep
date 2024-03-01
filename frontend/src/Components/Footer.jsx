import React from "react";
import logo from "../images/newlogo.png";
import { IoIosMailOpen } from "react-icons/io";

function Footer() {
  return (
    <div className="flex bg-white w-full border-t-[1px]">
      <div className="flex w-1/2 mx-auto justify-around m-5 items-center">
        <div className="flex h-full">
        <img src={logo} alt="Logo" className="w-8 h-8" />
        <h2 className="text-2xl font-medium">FirstStep</h2>
        </div>
        <div>
          <ul className="space-y-3">
            <li className="text-[#444B88] cursor-pointer text-sm">Feedback</li>
            <li className="text-[#444B88] cursor-pointer text-sm">About Us</li>
            <li className="text-[#444B88] cursor-pointer text-sm">Terms & Conditions</li>
            <li className="text-[#444B88] cursor-pointer text-sm">Privacy Policy</li>
          </ul>
          <p className="mt-2">@2024 FirstStep. All rights reserved.</p>
        </div>
        <div className="h-full">
          <p className="underline text-medium flex items-center gap-2"><IoIosMailOpen />Firststep@gmail.com</p>

        </div>
      </div>
    </div>
  );
}

export default Footer;
