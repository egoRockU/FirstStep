import html from "../img/logohtml.png";
import PHP from "../img/logo php.png";
import Reactjs from "../img/logoreact.png";
import CSS from "../img/logocss.png";
import Github from "../img/logogithub.png";
import Tailwind from "../img/logotailwind.png";
import Sql from "../img/logosql.png";
import Js from "../img/logojs.png";
import CPP from "../img/logoc++.png";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

export const getSkillAttrib = (skills) => {
  const skillAttribs = [];

  skills.forEach((skill) => {
    switch (skill.toLowerCase()) {
      case "html":
        skillAttribs.push({
          src: html,
          title: "HTML",
          style: "shadow-orange-500",
        });
        break;
      case "php":
        skillAttribs.push({
          src: PHP,
          title: "PHP",
          style: "shadow-purple-500",
        });
        break;
      case "react.js":
        skillAttribs.push({
          src: Reactjs,
          title: "ReactJs",
          style: "shadow-blue-500",
        });
        break;
      case "css":
        skillAttribs.push({
          src: CSS,
          title: "CSS",
          style: "shadow-blue-500",
        });
        break;
      case "github":
        skillAttribs.push({
          src: Github,
          title: "GITHUB",
          style: "shadow-gray-500",
        });
        break;
      case "tailwind":
        skillAttribs.push({
          src: Tailwind,
          title: "Tailwindcss",
          style: "shadow-sky-400",
        });
        break;
      case "sql":
        skillAttribs.push({
          src: Sql,
          title: "SQL",
          style: "shadow-violet-400",
        });
        break;
      case "javascript":
        skillAttribs.push({
          src: Js,
          title: "JavaScript",
          style: "shadow-white",
        });
        break;
      case "c++":
        skillAttribs.push({
          src: CPP,
          title: "C++",
          style: "shadow-blue-500",
        });
      default:
        break;
    }
  });

  return skillAttribs;
};

export const getSocialLinkAttrib = (socialLinks) => {
  let socialAttribs = [];

  socialLinks.forEach((links) => {
    const { platform, link } = links;

    switch (platform) {
      case "twitter":
        socialAttribs.push({
          child: (
            <>
              Twitter <FaTwitter size={30} />
            </>
          ),
          href: link,
        });
        break;
      case "linkedin":
        socialAttribs.push({
          child: (
            <>
              LinkedIn <FaLinkedin size={30} />
            </>
          ),
          href: link,
        });
        break;
      case "facebook":
        socialAttribs.push({
          child: (
            <>
              Facebook <FaFacebook size={30} />
            </>
          ),
          href: link,
        });
        break;
      case "youtube":
        socialAttribs.push({
          child: (
            <>
              Youtube <FaYoutube size={30} />
            </>
          ),
          href: link,
        });
        break;
      case "github":
        socialAttribs.push({
          child: (
            <>
              Github <FaGithub size={30} />
            </>
          ),
          href: link,
        });
        break;
      default:
        break;
    }
  });

  return socialAttribs;
};
