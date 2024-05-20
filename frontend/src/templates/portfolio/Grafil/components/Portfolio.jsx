import React from "react";
import p3 from "../img/p3.jpg";
import p4 from "../img/p4.jpg";
import p6 from "../img/p6.jpg";

const Portfolio = ({ projects }) => {
  const portfolios = [
    {
      id: 1,
      src: p3,
    },

    {
      id: 2,
      src: p4,
    },

    {
      id: 3,
      src: p6,
    },
  ];

  return (
    <div
      name="projects"
      className="h-screen w-full bg-gradient-to-b from-orange-50 to-orange-200 text-gray-800 md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-900">
            Portfolio
          </p>
          <p className="py-6 font-semibold font text-lg">
            Check out some of my work right here
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map((project, key) => (
            <div key={key} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={project.previewImages ? project.previewImages[0] : p3}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 font-semibold">
                  <a href={project.projectLink}>Demo</a>
                </button>

                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 font-semibold">
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
