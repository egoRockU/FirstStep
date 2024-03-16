import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { convertDate } from "../utils/convertDate";

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

export default ActivitiesCard;
