import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/newlogo.png";
import DropdownMenu from "./DropdownMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import bell from "../images/bell.png";

function NavbarLoggedIn() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const clickLanding = () => {
    navigate("/");
  };

  const clickResume = () => {
    navigate("/createresume");
  };

  const clickPortfolio = () => {
    navigate("/createportfolio");
  };

  return (
    <nav className="bg-white py-2.5 fixed w-full z-50 top-0">
      <div className="flex w-full lg:w-[80%] justify-between mx-auto relative">
        <div className="flex items-center gap-1" onClick={clickLanding}>
          <img src={logo} alt="" className="w-6 h-6 hover:scale-125" />
          <h1 className="text-2xl text-black">FirstStep</h1>
        </div>
        <div className="hidden sm:flex lg:flex items-center gap-10">
          <ul className="flex h-full items-center space-x-10">
            <li
              className="text-lg md:text-xl font-medium text-black whitespace-nowrap cursor-pointer"
              onClick={clickResume}
            >
              Resume Builder
            </li>
            <li
              className="text-lg md:text-xl font-medium text-black whitespace-nowrap cursor-pointer"
              onClick={clickPortfolio}
            >
              Portfolio Builder
            </li>
            <li className="text-lg md:text-xl font-medium text-black">
              For Employers
            </li>
          </ul>
        </div>
        <div>
          <div className="items-center gap-2 hidden sm:flex lg:flex ">
            <img
              src={bell}
              alt=""
              className="text-black duration-500  cursor-pointer w-8 h-8"
            />
            <DropdownMenu />
          </div>
        </div>
        <div className="flex items-center pr-3 lg:hidden">
          <GiHamburgerMenu
            className="text-black cursor-pointer w-8 h-8"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
        {/* Overlay menu */}
        {showMenu && (
          <div className="lg:hidden absolute top-full flex justify-end bg-white bg-opacity-80 w-full py-2.5 shadow-lg">
            <div className="flex flex-col items-center">
              <ul className="flex flex-col lg:flex-row lg:flex-grow lg:justify-end space-y-4 lg:space-y-0 lg:space-x-10">
                <li className="text-lg md:text-xl font-medium text-black whitespace-nowrap">
                  Resume Builder
                </li>
                <li className="text-lg md:text-xl font-medium text-black whitespace-nowrap">
                  Portfolio Builder
                </li>
                <li className="text-lg md:text-xl font-medium text-black whitespace-nowrap">
                  For Employers
                </li>
              </ul>
              <div className="lg:flex items-center gap-2">
                <DropdownMenu />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavbarLoggedIn;
