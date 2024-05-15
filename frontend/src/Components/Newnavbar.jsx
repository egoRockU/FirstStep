import logo from "../images/newlogo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";


function Newnavbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [colors, setColors] = useState(["black", "white"]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    identifyColors();
  }, [location.pathname]);

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

  const clickAbout = () => {
    navigate("/about");
  };

  const identifyColors = () => {
    if (location.pathname !== "/") {
      setColors(["white", "black"]);
    } else {
      setColors(["black", "white"]);
    }
  };

  return (
    <div
      className={`flex flex-col lg:flex-row bg-${colors[0]} py-5 items-center shadow-lg justify-center fixed top-0 w-full z-50`}
    >
      <div className="w-full max-w-[1200px] flex justify-between px-4 sm:px-8 lg:px-16">
        <div
          className="flex items-center cursor-pointer gap-1"
          onClick={clickLanding}
        >
          <img src={logo} alt="logo" className="w-8 h-8 hover:scale-125" />
          <h1 className={`text-2xl text-${colors[1]}`}>FirstStep</h1>
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`text-${colors[1]} text-lg`}
          >
            <IoIosMenu size={30} />
          </button>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex items-center space-x-4 sm:space-x-6 lg:space-x-12">
            <li
              className={`text-lg text-${colors[1]} cursor-pointer`}
              onClick={clickApplicants}
            >
              Find Talents
            </li>
            <li
              className={`text-lg text-${colors[1]} cursor-pointer`}
              onClick={clickPortfolio}
            >
              Portfolio Builder
            </li>
            <li
              className={`text-lg text-${colors[1]} cursor-pointer`}
              onClick={clickResume}
            >
              Resume Builder
            </li>
            <li
              className={`text-lg text-${colors[1]} cursor-pointer`}
              onClick={clickAbout}
            >
              About us
            </li>
          </ul>
        </div>
      </div>
      {menuOpen && (
        <div className="w-full lg:hidden">
          <ul className="flex flex-col items-end space-y-4 py-4 px-4">
            <li
              className="text-lg text-white cursor-pointer"
              onClick={() => {
                clickApplicants();
                setMenuOpen(false);
              }}
            >
              Find Talents
            </li>
            <li
              className="text-lg text-white cursor-pointer"
              onClick={() => {
                clickPortfolio();
                setMenuOpen(false);
              }}
            >
              Portfolio Builder
            </li>
            <li
              className="text-lg text-white cursor-pointer"
              onClick={() => {
                clickResume();
                setMenuOpen(false);
              }}
            >
              Resume Builder
            </li>
            <li
              className="text-lg text-white cursor-pointer"
              onClick={() => {
                clickAbout();
                setMenuOpen(false);
              }}
            >
              About us
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Newnavbar;
