import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/newlogo.png";
import DropdownMenu from "./DropdownMenu";
import bell from "../images/bell.png";
import { toast } from "react-toastify";

function NavbarLoggedIn() {
  const navigate = useNavigate();

  const clickLanding = () => {
    navigate("/");
  };

  return (
    <nav className="bg-white py-2.5 fixed w-full z-50 top-0">
      <div className="flex w-full lg:w-[60%] justify-between mx-auto">
        <div className="flex items-center gap-1" onClick={clickLanding}>
          <img src={logo} alt="" className="w-6 h-6 hover:scale-125" />
          <h1 className="text-2xl text-">FirstStep</h1>
        </div>
        <div className="flex items-center gap-10">
          <ul className="flex h-full items-center space-x-10">
            <li className="text-lg md:text-xl font-medium text-black whitespace-nowrap">Resume Builder</li>
            <li className="text-lg md:text-xl font-medium text-black whitespace-nowrap">
              Portfolio Builder
            </li>
            <li className="text-lg md:text-xl font-medium text-black">For Employers</li>
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <img
              src={bell}
              alt=""
              className="text-black duration-500  cursor-pointer w-8 h-8"
            />
            <DropdownMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarLoggedIn;
