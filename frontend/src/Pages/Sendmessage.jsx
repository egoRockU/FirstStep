import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import Footer from "../Components/Footer";
import profile from "../images/profile.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

function Sendmessage() {
  const { user } = useSelector((state) => state.user);
  let profileName = localStorage.getItem("profileName");
  let profileImage = JSON.parse(localStorage.getItem("profileImage"));
  const location = useLocation();
  const navigate = useNavigate();
  const [rName, setRName] = useState();
  const [rProfileImg, setRProfileImg] = useState();

  useEffect(() => {
    if (location.state === null) {
      navigate("/notfound");
    } else {
      setRName(location.state.rName);
      setRProfileImg(location.state.rProfileImg);
    }
  }, []);

  return (
    <>
      {console.log(profileImage)}
      <NavbarLoggedIn />
      <div className="w-full pt-20 pb-20">
        <div className="flex flex-col w-full text-center">
          <div className="pt-20">
            <h1 className="font-bold text-2xl text-[#444b88] pb-4">
              Send Message
            </h1>
          </div>
          <div className="border border-[#444b88] w-3/5 mx-auto">
            <div className="flex flex-col px-10 py-6 ">
              <div className="flex flex-col text-[#444b88]">
                <h1 className="flex text-xl gap-2">
                  To:{" "}
                  <img
                    src={rProfileImg ? rProfileImg : profile}
                    alt=""
                    className="size-7 rounded-full border-2 border-[#444b88]"
                  />{" "}
                  {rName}
                </h1>
                <h1 className="flex text-xl gap-2">
                  From:{" "}
                  <img
                    src={profileImage ? profileImage : profile}
                    alt=""
                    className="size-7 rounded-full border-2 border-[#444b88]"
                  />{" "}
                  {profileName}
                </h1>
              </div>
              <div className=" flex items-center gap-2 w-full pt-8">
                <h1 className="text-xl">Subject:</h1>
                <input
                  type="text"
                  className="border-b-2 border-[#444b88] w-full outline-none"
                />
              </div>
              <div className="pt-8">
                <textarea
                  name="Body"
                  id=""
                  cols="30"
                  rows="10"
                  className="w-full border border-[#444b88] outline-none px-3 py-2"
                  placeholder="Body"
                ></textarea>
              </div>
              <div className="flex w-full justify-end gap-4 pt-2">
                <button className="border border-[#444b88] px-2 py-1 rounded-md">
                  Cancel
                </button>
                <button className="border border-[#444b88] px-2 py-1 rounded-md bg-[#bad2ff]">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Sendmessage;
