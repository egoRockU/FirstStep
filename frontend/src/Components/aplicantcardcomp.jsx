import React from "react";

import { convertDate } from "../utils/convertDate";

function EducationCard({ education, openEducationModal }) {
  return (
    <div className="w-full bg-white hover:bg-[#BAD2FF] border-2 border-[#444B88] flex justify-between items-center"onClick={() => openEducationModal(education)}>
      <div className="w-full flex flex-col gap-3 p-5">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-3 w-full">
          <p className="text-xl lg:text-2xl text-[#444B88] ">{education.schoolName}</p>
          <p className="text-sm">
            {convertDate(education.startDate)} -{" "}
            {convertDate(education.endDate)}
          </p>
        </div>
        <div className="text-sm lg:text-xl">
          {education.degree} - {education.program}
        </div>
        <div className="text-sm">{education.fieldOfStudy}</div>
      </div>
    </div>
  );
}

function ActivitiesCard({ activity, openActivitiesModal  }) {
  return (
    <div className="w-full bg-white hover:bg-[#BAD2FF] border-2 border-[#444B88] flex justify-between items-center" onClick={() => openActivitiesModal(activity)}>
      <div className="w-full flex flex-col lg:gap-3 p-3 lg:p-5">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-3 w-full">
          <p className="text-xl lg:text-2xl text-[#444B88]">{activity.title}</p>
          <p className="text-md lg:text-xl">{activity.typeOfActivity}</p>
        </div>
        <div className="text-xl">{activity.organizationOrCompanyName}</div>
        <div className="text-sm">
          {convertDate(activity.startDate)} - {convertDate(activity.endDate)},{" "}
          {activity.location}
        </div>
      </div>
    </div>
  );
}
function ProjectsCard({ projectsData, onClick }) {
    return (
      <div className="w-full bg-white hover:bg-[#BAD2FF] border-2 border-[#444B88] flex justify-between items-center" onClick={onClick}>
        <div className="w-full flex flex-col gap-3 p-5">
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
      </div>
    );
  }
  

function AwardCard({ award, openAwardsModal  }) {
  return (
    <div className="w-full bg-white hover:bg-[#BAD2FF] border-2 border-[#444B88] flex justify-between items-center" onClick={openAwardsModal}>
      <div className="w-full flex flex-col gap-3 p-5">
        <div className="flex items-center gap-3 w-full">
          <p className="text-2xl text-[#444B88]">{award.title}</p>
          <p className="text-sm">{convertDate(award.dateReceived)}</p>
        </div>
      </div>
    </div>
  );
}



export {
  ActivitiesCard,
  AwardCard,
  EducationCard,
  ProjectsCard,
};
