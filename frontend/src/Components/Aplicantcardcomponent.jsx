import React from "react";
import { IoClose } from "react-icons/io5";

const SocialCard = ({ socialLinks, onDelete }) => {
    return (
      <div className="flex flex-col w-full">
        <div className="flex flex-col items-center">
          {socialLinks.map((link, index) => (
            <div key={index} className="flex items-center py-1">
              <div>
                <a href={link.link}>{link.link}</a>
              </div>
              <div>
                <button onClick={() => onDelete(index)}>
                  <IoClose size={30} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  const IndustriesCard = ({ industries, onDelete }) => {
    return (
      <div className="flex flex-col w-full">
        <div className="flex flex-col items-center">
          {industries.map((industry, index) => (
            <div key={index} className="flex items-center py-1">
              <div className="flex text-center bg-[#BAD2FF] p-2 rounded-full w-auto">
                <p className="whitespace-nowrap">{industry}</p>
                <button onClick={() => onDelete(index)}>
                  <IoClose size={25} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  const SkillsCard = ({ skills, onDelete }) => {
    return (
      <div className="flex flex-col w-full">
        <div className="border-2 border-[#444B88] flex py-2 flex-col justify-center items-center gap-2">
          <div className="flex gap-2 items-center flex-wrap max-w-full p-1">
            {skills.map((skill, index) => (
              <div key={index} className="">
                <div className="flex items-center gap-2">
                  <p className="text-lg">{skill}</p>
                  <button onClick={() => onDelete(index)}>
                    <IoClose size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export { SocialCard, IndustriesCard, SkillsCard };
