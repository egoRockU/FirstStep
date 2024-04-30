import {
  FaTwitter,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

import html from "../img/logohtml.png";
import PHP from "../img/logo php.png";
import Reactjs from "../img/logoreact.png";
import CSS from "../img/logocss.png";
import Github from "../img/logogithub.png";
import Tailwind from "../img/logotailwind.png";
import Sql from "../img/logosql.png";
import Js from "../img/logojs.png";
import CPP from "../img/logoc++.png";
import Python from "../img/python.png";

export const getSkills = (skills) => {
  let skillsAttrib = [];

  skills.forEach((skill) => {
    switch (skill.toLowerCase()) {
      case "html":
        skillsAttrib.push({
          src: html,
          title: "HTML",
          style: "shadow-orange-700",
        });
        break;
      case "php":
        skillsAttrib.push({
          src: PHP,
          title: "PHP",
          style: "shadow-purple-600",
        });
        break;
      case "react.js":
        skillsAttrib.push({
          src: Reactjs,
          title: "ReactJs",
          style: "shadow-blue-500",
        });
        break;
      case "css":
        skillsAttrib.push({
          src: CSS,
          title: "CSS",
          style: "shadow-blue-500",
        });
        break;
      case "github":
        skillsAttrib.push({
          src: Github,
          title: "GITHUB",
          style: "shadow-gray-500",
        });
        break;
      case "tailwind":
        skillsAttrib.push({
          src: Tailwind,
          title: "Tailwindcss",
          style: "shadow-sky-400",
        });
        break;
      case "sql":
        skillsAttrib.push({
          src: Sql,
          title: "SQL",
          style: "shadow-violet-400",
        });
        break;
      case "javascript":
        skillsAttrib.push({
          src: Js,
          title: "JavaScript",
          style: "shadow-white",
        });
        break;
      case "c++":
        skillsAttrib.push({
          src: CPP,
          title: "C++",
          style: "shadow-blue-500",
        });
        break;
      case "python":
        skillsAttrib.push({
          src: Python,
          title: "Python",
          style: "shadow-yellow-500",
        });
        break;
      default:
        break;
    }
  });

  return skillsAttrib;
};

export const getProjects = (projects) => {
  let projectsAttrib = [];
  projects.forEach((project) => {
    const { previewImages, projectTitle, githublink, projectLink } = project;
    projectsAttrib.push({
      image: previewImages[0],
      title: projectTitle,
      github: githublink,
      demo: projectLink,
    });
  });

  return projectsAttrib;
};

export const getSocialLinkIcons = (socialLinks) => {
  let socials = [];
  socialLinks.forEach((links) => {
    const { platform, link } = links;

    switch (platform) {
      case "twitter":
        socials.push({
          link,
          icon: <FaTwitter />,
        });
        break;
      case "facebook":
        socials.push({
          link,
          icon: <FaFacebook />,
        });
        break;
      case "github":
        socials.push({
          link,
          icon: <FaGithub />,
        });
        break;
      case "linkedin":
        socials.push({
          link,
          icon: <FaLinkedin />,
        });
        break;
      case "youtube":
        socials.push({
          link,
          icon: <FaYoutube />,
        });
        break;
      default:
        break;
    }
  });

  return socials;
};
