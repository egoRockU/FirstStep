import logo from "../images/newlogo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Newnavbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [colors, setColors] = useState(["black", "white"]);

  useEffect(() => {
    identifyColors();
  }, []);

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

  const identifyColors = () => {
    if (location.pathname != "/") {
      setColors(["white", "black"]);
    }
  };

  return (
    <div
      className={`flex bg-${colors[0]} py-5 items-center shadow-lg justify-center fixed top-0 w-full z-50`}
    >
      <div className="w-[60%] flex justify-between">
        <div
          className="flex items-center cursor-pointer gap-1"
          onClick={clickLanding}
        >
          <img src={logo} alt="logo" className="w-8 h-8 hover:scale-125" />
          <h1 className={`text-2xl text-${colors[1]}`}>FirstStep</h1>
        </div>
        <div className="flex">
          <ul className="flex items-center w-full space-x-6 lg:space-x-12">
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
            <li className={`text-lg text-${colors[1]} cursor-pointer`}>
              About us
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Newnavbar;
