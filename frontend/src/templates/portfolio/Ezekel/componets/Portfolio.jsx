import React from "react";
import HTML from "../img/HTML.jpg";
import Reactjs from "../img/reactjs.png";
import Tailwindcss from "../img/tailwindcss.png";

const Portfolio = ({ portfolioInfo }) => {
  const { projects } = portfolioInfo;

  const portfolios = [
    {
      id: 1,
      src: HTML,
    },

    {
      id: 2,
      src: Reactjs,
    },

    {
      id: 3,
      src: Tailwindcss,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="text- 2xl py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map((project, key) => (
            <div key={key} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={project.previewImages[0]}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p>{project.projectTitle}</p>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={project.projectLink}>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={project.githubLink}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
