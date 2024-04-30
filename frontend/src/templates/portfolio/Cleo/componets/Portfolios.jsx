import React, { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";
import { getProjects } from "../utils/getAttribs";

const Portfolios = ({ portfolioInfo }) => {
  const { projects } = portfolioInfo;
  const [projectsAttrib, setProjectsAttrib] = useState();

  useEffect(() => {
    setProjectsAttrib(getProjects(projects));
  }, [projects]);

  return (
    <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
      <h2 className="text-4xl  text-emerald-500 font-bold">PORTFOLIO 🗒</h2>
      <p className="max-w-xl p-5 font-semibold text-emerald-500">
        These are all the projects that i have worked on.
      </p>

      <div className="grid gap-8 lg:gap-14 lg:grid-cols-2 text-emerald-400">
        {projectsAttrib &&
          projectsAttrib.map(({ image, title, github, demo }, key) => (
            <div
              key={key}
              className="max-w-lg flex shadow-lg shadow-emerald-600 rounded-2xl overflow-hidden"
            >
              <img src={image} alt={title} className="w-2/3" />
              <div className="w-1/3 flex flex-col items-center justify-evenly p-1">
                <h2 className=" text-emerald-500 font-semibold">{title}</h2>

                <a
                  className="text-2xl cursor-pointer duration-150 hover:scale-110"
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>

                <a
                  className="text-2xl cursor-pointer duration-150 hover:scale-110"
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkSquareAlt />
                </a>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Portfolios;
