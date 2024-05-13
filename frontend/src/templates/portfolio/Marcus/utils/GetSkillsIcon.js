import html from "../img/logohtml.png";
import PHP from "../img/logo php.png";
import Reactjs from "../img/logoreact.png";
import CSS from "../img/logocss.png";
import Tailwind from "../img/logotailwind.png";
import Sql from "../img/logosql.png";
import Js from "../img/logojs.png";
import CPP from "../img/logoc++.png";
import Python from "../img/python.png";

const getSkillsIcons = (skills) => {
  let skillIcons = [];

  skills.forEach((skill) => {
    switch (skill.toLowerCase()) {
      case "html":
        skillIcons.push({ src: html, title: "HTML" });
        break;
      case "php":
        skillIcons.push({ src: PHP, title: "PHP" });
        break;
      case "react.js":
        skillIcons.push({ src: Reactjs, title: "ReactJS" });
        break;
      case "css":
        skillIcons.push({ src: CSS, title: "CSS" });
        break;
      case "tailwind":
        skillIcons.push({ src: Tailwind, title: "Tailwind" });
        break;
      case "sql":
        skillIcons.push({ src: Sql, title: "SQL" });
        break;
      case "javascript":
        skillIcons.push({ src: Js, title: "Javascript" });
        break;
      case "c++":
        skillIcons.push({ src: CPP, title: "C++" });
        break;
      case "python":
        skillIcons.push({ src: Python, title: "Python" });
        break;
      default:
        break;
    }
  });

  return skillIcons;
};

export default getSkillsIcons;
