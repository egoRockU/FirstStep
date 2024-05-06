import React from "react";
import { FaArrowDown } from "react-icons/fa";
import Avatar from "../img/avatar3.png";
import { useState, useEffect } from "react";
import { getSocialLinkIcons } from "../utils/getAttribs";
import { convertResLink } from "../../../../utils/convertResLink";

const Home = ({ portfolioInfo }) => {
  const { firstName, lastName, profileImg, bio, about, socialLinks, resume } =
    portfolioInfo;
  const [socials, setSocials] = useState([]);
  const [resumeLink, setResumeLink] = useState();

  useEffect(() => {
    setSocials(getSocialLinkIcons(socialLinks));
    getResumeLink();
  }, []);

  window.addEventListener("scroll", function () {
    const downArrow = document.querySelector(".down-arrow");

    if (this.scrollY >= 90) downArrow.classList.add("hide-down-arrow");
    else downArrow.classList.remove("hide-down-arrow");
  });

  const getResumeLink = () => {
    if (resume.resumeId) {
      setResumeLink(convertResLink(resume));
    } else {
      setResumeLink(false);
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
      <h2 className="text-5xl  text-emerald-500 font-bold">{`${firstName} ${lastName}`}</h2>
      <h3 className="py-3 text-2xl text-emerald-600">{bio}</h3>
      <p className="max-w-xl font-semibold text-emerald-500">{about}</p>

      {/*Social icon */}
      <div className="flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3 text-emerald-700">
        {socials.map(({ link, icon }, key) => (
          <a
            href={link}
            key={key}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer duration-300 hover:text-teal-400"
          >
            {icon}
          </a>
        ))}
      </div>
      <div>
        <img
          src={profileImg ? profileImg : Avatar}
          alt="avatar3"
          className="w-60 md:w-72 md:h-72 object-cover object-top bg-gradient-to-b from-emerald-400 rounded-2xl pt-5"
        />

        <a
          href={resumeLink}
          className="flex items-center justify-center mt-10 bg-gradient-to-r from-emerald-500 to text-emerald-950 font-semibold uppercase py-2 rounded-lg"
        >
          Resume
        </a>
      </div>
      {}
      <div className="mt-10 down-arrow">
        <FaArrowDown className="text-gray-500 text-2xl animate-bounce" />
      </div>
    </section>
  );
};

export default Home;
