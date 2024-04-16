import React from "react";
import { IoClose, IoLogoTwitter } from "react-icons/io5";
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { convertDate } from "../utils/convertDate";
import { IoCloseOutline } from "react-icons/io5";

const SocialCard = ({ socialLinks, onDelete }) => {
  const getPlatformIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case "facebook":
        return <FaFacebook />;
      case "twitter":
        return <IoLogoTwitter />;
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
    <div className="flex flex-col w-full pb-4">
      <div className="grid grid-cols-2 mx-auto gap-2 items-center">
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

function ProjectsCard({ projectsData, onDelete, onEdit }) {
  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete();
  };

  return (
    <div className="w-full bg-white hover:bg-[#BAD2FF] border-2 border-[#444B88] flex justify-between items-center">
      <div className="w-full flex flex-col gap-3 p-5" onClick={onEdit}>
        <div className="flex items-center gap-3 w-full">
          <p className="text-3xl text-[#444B88] font-bold">
            {projectsData.projectTitle}
          </p>
          <p className="text-sm">
            {convertDate(projectsData.startDate)} -{" "}
            {convertDate(projectsData.endDate)}
          </p>
        </div>
        <div className="text-lg ">{projectsData.subTitle}</div>
        <div className="text-sm italic">{projectsData.technologiesUsed}</div>
      </div>
      <button onClick={handleDeleteClick}>
        <IoCloseOutline size={50} />
      </button>
    </div>
  );
}

function CertificateCard({ cert, onDelete, onEdit }) {
  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete();
  };

  return (
    <div className="w-full bg-white hover:bg-[#BAD2FF] border-2 border-[#444B88] flex justify-between items-center">
      <div className="w-full flex flex-col gap-3 p-5" onClick={onEdit}>
        <div className="flex items-center gap-3 w-full">
          <p className="text-2xl text-[#444B88]">{cert.title}</p>
          <p className="text-sm">{convertDate(cert.dateReceived)}</p>
        </div>
      </div>
      <button onClick={handleDeleteClick}>
        <IoCloseOutline size={50} />
      </button>
    </div>
  );
}

export {
  SocialCard,
  IndustriesCard,
  SkillsCard,
  ProjectsCard,
  CertificateCard,
};
