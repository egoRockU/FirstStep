import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/Logo.svg";
import DropdownMenu from "./DropdownMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import MessageDropdownMenu from "./MessageDropdownMenu";
function NavbarLoggedIn() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const clickResume = () => {
    navigate("/createresume");
  };

  const clickPortfolio = () => {
    navigate("/createportfolio");
  };

  const clickLanding = () => {
    navigate("/");
  };

  const clickApplicants = () => {
    navigate("/applicantlist");
  };

  return (
    <nav className="bg-white py-4 shadow-lg fixed w-full z-50 top-0">
      <div className="flex w-[90%] xl:w-[60%] justify-between mx-auto relative">
        <div className="flex items-center gap-1" onClick={clickLanding}>
          <img src={logo} alt="" className="w-6 h-6 hover:scale-125" />
          <h1 className="text-2xl text-black">FirstStep</h1>
        </div>
        <div className="hidden lg:flex items-center gap-10">
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
            <li
              className="text-lg md:text-xl font-medium text-black cursor-pointer"
              onClick={clickApplicants}
            >
              For Employers
            </li>
          </ul>
        </div>
        <div>
          <div className="items-center gap-2 hidden lg:flex ">
            <MessageDropdownMenu />
            <DropdownMenu />
          </div>
        </div>
        <div className="flex items-center pr-3 lg:hidden">
          <GiHamburgerMenu
            className="text-black cursor-pointer w-8 h-8"
            onClick={() => setShowMenu(!showMenu)}
            color="444b88"
          />
        </div>
        {/* Overlay menu */}
        {showMenu && (
          <div className="lg:hidden absolute top-full  flex justify-end bg-white bg-opacity-80 py-8 w-full shadow-lg">
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
                <MessageDropdownMenu />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavbarLoggedIn;
