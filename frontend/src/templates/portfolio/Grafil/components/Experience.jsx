import React, { useEffect, useState } from "react";
import { getSkillAttrib } from "../../Ezekel/utils/getAttribs";

const Skills = ({ skills }) => {
  const [skillAttrib, setSkillAttrib] = useState([]);

  useEffect(() => {
    setSkillAttrib(getSkillAttrib(skills));
  }, []);

  return (
    <div
      name="skills"
      className="h-screen w-full bg-gradient-to-b from-orange-50 to-orange-200"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-800">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-900">
            Skills
          </p>
          <p className="py-6 font-semibold font text-lg">
            {" "}
            These are the technologies I've worked with
          </p>
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

export default Skills;
