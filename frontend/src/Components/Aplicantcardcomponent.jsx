import React from "react";
import { IoClose} from "react-icons/io5";
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import {FaXTwitter} from 'react-icons/fa6'


const SocialCard = ({ socialLinks, onDelete }) => {
  const getPlatformIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case "facebook":
        return <FaFacebook />;
      case "twitter":
        return <FaXTwitter />;
      case "youtube":
        return <FaYoutube />;
      case "linkedin":
        return <FaLinkedin />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col items-center">
        {socialLinks.map((link, index) => (
          <div key={index} className="flex items-center py-1 justify-center">
            <div>{link.platform && getPlatformIcon(link.platform)}</div>
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
      <div className="grid grid-cols-2 mx-auto items-center gap-1">
        {industries.map((industry, index) => (
          <div key={index} className="flex items-center py-1 ">
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
    <div className="flex flex-col w-full items-center">
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center gap-2 p-1">
          <p className="text-lg">{skill}</p>
          <button onClick={() => onDelete(index)}>
            <IoClose size={20} />
          </button>
        </div>
      ))}
    </div>
  );
};
export { SocialCard, IndustriesCard, SkillsCard };
