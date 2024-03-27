import React, { useState, useEffect } from "react";
import { getSkillAttrib } from "../utils/getAttribs.jsx";

const Experience = ({ portfolioInfo }) => {
  const { skills } = portfolioInfo;

  const [skillAttrib, setSkillAttrib] = useState([]);

  useEffect(() => {
    setSkillAttrib(getSkillAttrib(skills));
  }, []);

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-ful h-scree"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6"> These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skillAttrib.map(({ src, title, style }, key) => (
            <div
              key={key}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
