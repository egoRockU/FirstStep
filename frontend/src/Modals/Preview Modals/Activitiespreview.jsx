import { IoMdClose } from "react-icons/io";
import { convertDateYear } from "../../utils/convertDate";

function Activitiespreview({ onClose, activity }) {
  const {
    title,
    startDate,
    endDate,
    organizationOrCompanyName,
    location,
    description,
  } = activity;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 py-5">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="w-4/5 md:w-1/3 bg-white shadow-lg rounded-lg">
          <div className="w-full flex justify-end py-2 px-2 border border-gray-300">
            <IoMdClose size={30} onClick={onClose} />
          </div>
          <div className="border border-gray-300 flex flex-col px-4 py-2 gap-1">
            <div className="flex gap-4">
              <h1 className="text-base md:text-xl text-[#444b88] font-semibold">{title}</h1>
              <div className="flex gap-3 text-sm md:text-lg items-center">
                <h1>{convertDateYear(startDate)}</h1>
                <p>-</p>
                <h1>{convertDateYear(endDate)}</h1>
              </div>
            </div>
            <h1 className="text-sm md:text-lg">{organizationOrCompanyName}</h1>
            <p className="italic text-sm md:text-lg text-gray-400">{location}</p>
            <p className="text-sm md:text-lg">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activitiespreview;
