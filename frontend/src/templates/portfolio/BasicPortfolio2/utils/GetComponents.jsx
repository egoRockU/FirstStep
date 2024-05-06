import SkillDefault from "../images/skills/skill.jpg";
import Python from "../images/skills/python.webp";
import Javascript from "../images/skills/Javascript.png";
import Java from "../images/skills/Java.webp";
import CPP from "../images/skills/cpp.jpg";
import React from "../images/skills/React.png";
import Node from "../images/skills/Node.jpg";

import { FaLinkedinIn, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const getSkillsComponent = (skills) => {
  let skillsComponent = [];

  skills.forEach((skill) => {
    switch (skill.toLowerCase()) {
      case "python":
        skillsComponent.push(
          <>
            <div className="relative group">
              <img src={Python} alt="" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50">
                <p className="text-white">Python</p>
              </div>
            </div>
          </>
        );
        break;
      case "javascript":
        skillsComponent.push(
          <>
            <div className="relative group">
              <img src={Javascript} alt="" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50">
                <p className="text-white">Javascript</p>
              </div>
            </div>
          </>
        );
        break;
      case "java":
        skillsComponent.push(
          <>
            <div className="relative group">
              <img src={Java} alt="" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50">
                <p className="text-white">Java</p>
              </div>
            </div>
          </>
        );
        break;
      case "c++":
        skillsComponent.push(
          <>
            <div className="relative group">
              <img src={CPP} alt="" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50">
                <p className="text-white">C++</p>
              </div>
            </div>
          </>
        );
        break;
      case "react.js":
        skillsComponent.push(
          <>
            <div className="relative group">
              <img src={React} alt="" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50">
                <p className="text-white">React JS</p>
              </div>
            </div>
          </>
        );
        break;
      case "node.js":
        skillsComponent.push(
          <>
            <div className="relative group">
              <img src={Node} alt="" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50">
                <p className="text-white">Node JS</p>
              </div>
            </div>
          </>
        );
        break;
      default:
        skillsComponent.push(
          <>
            <div className="relative group">
              <img
                src={SkillDefault}
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 bg-black bg-opacity-50">
                <p className="text-white">{skill}</p>
              </div>
            </div>
          </>
        );
        break;
    }
  });

  return skillsComponent;
};

const identifySocialLinks = (socialLinks) => {
  let components = [];
  socialLinks.forEach((links) => {
    const { platform, link } = links;

    switch (platform) {
      case "twitter":
        components.push(
          <>
            <Link to={link}>
              <FaTwitter size={25} className="cursor-pointer" />
            </Link>
          </>
        );
        break;
      case "facebook":
        components.push(
          <>
            <Link to={link}>
              <FaFacebook size={25} className="cursor-pointer" />
            </Link>
          </>
        );
        break;
      case "linkedin":
        components.push(
          <>
            <Link to={link}>
              <FaLinkedinIn size={25} className="cursor-pointer" />
            </Link>
          </>
        );
        break;
      case "youtube":
        components.push(
          <>
            <Link to={link}>
              <FaYoutube size={25} className="cursor-pointer" />
            </Link>
          </>
        );
        break;
      default:
        break;
    }
  });

  return components;
};

export { getSkillsComponent, identifySocialLinks };
