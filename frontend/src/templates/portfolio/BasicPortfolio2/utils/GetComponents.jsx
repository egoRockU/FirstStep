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
            <img src={Python} alt="" />
            <p className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
              Python
            </p>
          </>
        );
        break;
      case "javascript":
        skillsComponent.push(
          <>
            <img src={Javascript} alt="" />
            <p className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
              Javascript
            </p>
          </>
        );
        break;
      case "java":
        skillsComponent.push(
          <>
            <img src={Java} alt="" />
            <p className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
              Java
            </p>
          </>
        );
        break;
      case "c++":
        skillsComponent.push(
          <>
            <img src={CPP} alt="" />
            <p className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
              C++
            </p>
          </>
        );
        break;
      case "react.js":
        skillsComponent.push(
          <>
            <img src={React} alt="" />
            <p className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
              React JS
            </p>
          </>
        );
        break;
      case "node.js":
        skillsComponent.push(
          <>
            <img src={Node} alt="" />
            <p className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
              Node JS
            </p>
          </>
        );
        break;
      default:
        skillsComponent.push(
          <>
            <img
              src={SkillDefault}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
            <p className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
              {skill}
            </p>
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
