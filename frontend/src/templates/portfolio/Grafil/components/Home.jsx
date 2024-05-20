import React, { useEffect, useState } from "react";
import avatar from "../img/avatar.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { getSocialLinkIcons } from "../../Cleo/utils/getAttribs";

import { convertResLink } from "../../../../utils/convertResLink";
const Home = ({ portfolioInfo }) => {
  const { firstName, lastName, about, socialLinks, resume } =
    portfolioInfo || {};
  const [socials, setSocials] = useState([]);
  const [resumeLink, setResumeLink] = useState();

  useEffect(() => {
    setSocials(getSocialLinkIcons(socialLinks));
    getResumeLink();
  }, []);

  const getResumeLink = () => {
    if (resume.resumeId) {
      setResumeLink(convertResLink(resume));
    } else {
      setResumeLink(false);
    }
  };

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-orange-50 to-orange-200"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4
       md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-black">
            {firstName} {lastName}
          </h2>
          <p className="text-gray-900 py-4 max-w-md">{about}</p>

          <div className="flex justify-evenly py-6 lg:py-15 text-2xl w-full md:w1/2">
            {socials.map(({ link, icon }, key) => (
              <a
                href={link}
                key={key}
                target="_blank"
                rel="nooper noreferrer"
                className="cursor-pointer duration-400 hover:text-gray-700"
              >
                {icon}
              </a>
            ))}
          </div>

          <div>
            <a href={resumeLink} target="_blank">
              <button
                className="group text-black font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md
                    bg-gradient-to-r from-orange-100 to-orange-300"
              >
                Resume
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </button>
            </a>
          </div>
        </div>

        <div>
          <img
            src={avatar}
            alt="my picture"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
