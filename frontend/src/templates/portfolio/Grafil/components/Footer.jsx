import React, { useState, useEffect } from "react";
import { getSocialLinkIcons } from "../../Cleo/utils/getAttribs";
import { Link } from "react-scroll";

const Footer = ({ socialLinks }) => {
  const [socials, setSocials] = useState([]);

  useEffect(() => {
    setSocials(getSocialLinkIcons(socialLinks));
  }, []);

  return (
    <div className="bg-gradient-to-b from-orange-50 to-orange-200 min-h-fit flex flex-col space-y-10 justify-start items-center py-16 px-5 text-center">
      <nav class="flex justify-center flex-wrap gap-6 text-gray-800 font-medium">
        <Link to="home" smooth duration={500}>
          <p class="hover:font-bold medium  text-gray-900">Home</p>
        </Link>
        <Link to="projects" smooth duration={500}>
          <p class="hover:font-bold medium  text-gray-900">Projects</p>
        </Link>
        <Link to="skills" smooth duration={500}>
          <p class="hover:font-bold medium  text-gray-900">Skills</p>
        </Link>
        <Link to="contact" smooth duration={500}>
          <p class="hover:font-bold medium  text-gray-900">Contact</p>
        </Link>
      </nav>

      <div class="flex justify-center space-x-5">
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

      <p className="max-w-xl font-medium text-emerald-600 mb-10">
        ©2022 Intern.CCL
      </p>
    </div>
  );
};

export default Footer;
