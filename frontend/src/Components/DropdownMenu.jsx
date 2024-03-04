import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../slices/userSlice";
import profile from "../images/profileicon.png";
import { toast } from "react-toastify";

const DropdownMenu = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  let userObj = JSON.parse(localStorage.getItem("user"));

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const clickLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };
  const clickProfile = () => {
    let userAccountType = userObj.profileType;
    let userAccountId = userObj.profileId;

    if (userAccountId && userAccountType) {
      if (userAccountType === "applicant") {
        navigate("/editprofile");
      }
      if (userAccountType === "employer") {
        navigate("/editemployer");
      }
    } else {
      navigate("/choose");
    }
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex justify-center w-full shadow-sm py-2 bg-transparent text-sm font-medium text-gray-700"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          <img
            src={profile}
            alt=""
            className="text-black duration-500 mx-2 cursor-pointer w-8 h-8"
          />
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <button
              onClick={clickProfile}
              className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 w-full text-left"
              role="menuitem"
            >
              Profile
            </button>
            <button
              onClick={clickLogout}
              className="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 w-full text-left"
              role="menuitem"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
