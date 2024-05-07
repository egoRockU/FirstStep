import React, { useEffect, useState } from "react";

import { getSkills } from "../utils/getAttribs";

const Skills = ({ portfolioInfo }) => {
  const { skills } = portfolioInfo;
  const [skillsAttrib, setSkillsAttrib] = useState([]);

  useEffect(() => {
    setSkillsAttrib(getSkills(skills));
  }, [skills]);

  return (
    <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
      <h2 className="text-4xl  text-emerald-500 font-bold p-10">
        MY SKILLS 👩‍💻
      </h2>
      <p className="max-w-xl font-semibold text-emerald-500">
        Here are all my skills
      </p>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
        {skillsAttrib &&
          skillsAttrib.map(({ src, title, style }, key) => (
            <div
              key={key}
              className={
                style
                  ? `flex flex-col items-center justify-center p-5 shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`
                  : ""
              }
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 text-xl font-semibold text-emerald-600">
                {title}
              </p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Skills;
