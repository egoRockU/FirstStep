import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/Logo.svg";
import DropdownMenu from "./DropdownMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import MessageDropdownMenu from "./MessageDropdownMenu";

function NavbarloggedinBlack() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(1);

  const clickLanding = () => {
    navigate("/");
  };

  const clickResume = () => {
    navigate("/createresume");
  };

  const clickPortfolio = () => {
    navigate("/createportfolio");
  };

  const clickApplicants = () => {
    navigate("/applicantlist");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxOpacityScroll = 60; // Scroll position where opacity becomes 60
      const minOpacity = 0.6; // Minimum opacity (60%)
      let opacity;

      if (scrollPosition < maxOpacityScroll) {
        opacity = 1 - (scrollPosition / maxOpacityScroll) * (1 - minOpacity);
      } else {
        opacity = minOpacity;
      }

      setScrollOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className="bg-black py-4 fixed w-full z-50 top-0"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${scrollOpacity})`,
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <div className="flex w-full lg:w-[80%] justify-between mx-auto relative">
        <div className="flex items-center gap-1 cursor-pointer" onClick={clickLanding}>
          <img src={logo} alt="logo" className="w-6 h-6 hover:scale-125" />
          <h1 className="text-2xl text-white">FirstStep</h1>
        </div>
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex h-full items-center space-x-10">
            <li
              className="text-lg md:text-xl font-medium text-white whitespace-nowrap cursor-pointer"
              onClick={clickResume}
            >
              Resume Builder
            </li>
            <li
              className="text-lg md:text-xl font-medium text-white whitespace-nowrap cursor-pointer"
              onClick={clickPortfolio}
            >
              Portfolio Builder
            </li>
            <li
              className="text-lg md:text-xl font-medium text-white cursor-pointer"
              onClick={clickApplicants}
            >
              For Employers
            </li>
          </ul>
        </div>
        <div>
          <div className="items-center gap-2 hidden lg:flex">
            <MessageDropdownMenu />
            <DropdownMenu />
          </div>
        </div>
        <div className="flex items-center pr-3 lg:hidden">
          <GiHamburgerMenu
            className="text-white cursor-pointer w-8 h-8"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
        {showMenu && (
          <div className="lg:hidden absolute top-full w-full bg-black py-2.5 shadow-lg flex justify-end px-5">
            <ul className="flex flex-col items-center space-y-4">
              <li
                className="text-lg md:text-xl font-medium text-white cursor-pointer whitespace-nowrap"
                onClick={() => {
                  clickResume();
                  setShowMenu(false);
                }}
              >
                Resume Builder
              </li>
              <li
                className="text-lg md:text-xl font-medium text-white cursor-pointer whitespace-nowrap"
                onClick={() => {
                  clickPortfolio();
                  setShowMenu(false);
                }}
              >
                Portfolio Builder
              </li>
              <li
                className="text-lg md:text-xl font-medium text-white cursor-pointer whitespace-nowrap"
                onClick={() => {
                  clickApplicants();
                  setShowMenu(false);
                }}
              >
                For Employers
              </li>
              <div className="flex items-center gap-2">
                <DropdownMenu />
                <MessageDropdownMenu />
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavbarloggedinBlack;
