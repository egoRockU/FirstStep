import { IoMdClose } from "react-icons/io";
import { convertDateYear } from "../../utils/convertDate";

function Educationpreview({ onClose, education }) {
  const { schoolName, startDate, endDate, degree, program, grade } = education;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 py-5">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="w-3/4 md:w-1/3 bg-white shadow-lg rounded-lg">
          <div className="w-full flex justify-end py-2 px-2 border border-gray-300">
            <IoMdClose size={30} onClick={onClose} />
          </div>
          <div className="flex flex-col border border-gray-300 py-5">
            <div className="flex flex-col w-full items-center gap-1">
              <h1 className="text-base md:text-xl text-[#444b88] font-bold">
                {schoolName}
              </h1>
              <div className="flex italic gap-3 text-sm md:text-lg text-gray-400">
                <h1>{convertDateYear(startDate)}</h1>
                <p>-</p>
                <h1>{convertDateYear(endDate)}</h1>
              </div>
              <div className="flex gap-2 md:gap-6 text-base md:text-lg items-center text-center">
                <h1>{degree}</h1>
                <p>-</p>
                <h1>{program}</h1>
              </div>
              {grade && <h1 className="text-sm font-semibold">Grade: {grade}</h1>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Educationpreview;
