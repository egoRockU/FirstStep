import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { convertDate } from "../utils/convertDate";

function EducationCard({ education, onDelete, onEdit }) {
  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete();
  };

  return (
    <div className="w-full bg-white hover:bg-[#BAD2FF] border-2 border-[#444B88] flex justify-between items-center">
      <div className="w-full flex flex-col gap-3 p-5" onClick={onEdit}>
        <div className="flex items-center gap-3 w-full">
          <p className="text-2xl text-[#444B88] ">{education.schoolName}</p>
          <p className="text-sm">
            {convertDate(education.startDate)} -{" "}
            {convertDate(education.endDate)}
          </p>
        </div>
        <div className="text-xl">
          {education.degree} - {education.program}
        </div>
        <div className="text-sm">{education.fieldOfStudy}</div>
        
      </div>
      <button onClick={handleDeleteClick}>
        <IoCloseOutline size={50} />
      </button>
    </div>
  );
}

function ActivitiesCard({ activity, onDelete, onEdit }) {
  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete();
  };

  return (
    <div className="w-full bg-white hover:bg-[#BAD2FF] border-2 border-[#444B88] flex justify-between items-center">
      <div className="w-full flex flex-col gap-3 p-5" onClick={onEdit}>
        <div className="flex items-center gap-3 w-full">
          <p className="text-2xl text-[#444B88]">{activity.title}</p>
          <p className="text-xl">{activity.typeOfActivity}</p>
        </div>
        <div className="text-xl">{activity.organizationOrCompanyName}</div>
        <div className="text-sm">
          {convertDate(activity.startDate)} - {convertDate(activity.endDate)},{" "}
          {activity.location}
        </div>
      </div>
      <button onClick={handleDeleteClick}>
        <IoCloseOutline size={50} />
      </button>
    </div>
  );
}

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

function AwardCard({ award, onDelete, onEdit }) {
  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete();
  };

  return (
    <div className="w-full bg-white hover:bg-[#BAD2FF] border-2 border-[#444B88] flex justify-between items-center">
      <div className="w-full flex flex-col gap-3 p-5" onClick={onEdit}>
        <div className="flex items-center gap-3 w-full">
          <p className="text-2xl text-[#444B88]">{award.title}</p>
          <p className="text-sm">{convertDate(award.dateReceived)}</p>
        </div>
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
  ActivitiesCard,
  AwardCard,
  CertificateCard,
  EducationCard,
  ProjectsCard,
};
