import { IoMdClose } from "react-icons/io";
import { convertDate } from "../../utils/convertDate";

function Awardspreview({ onClose, award }) {
  const { title, dateReceived, description } = award;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 py-5">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="w-3/4 md:w-1/3 bg-white shadow-lg rounded-lg">
          <div className="w-full flex justify-end py-2 px-2 border border-gray-300">
            <IoMdClose size={30} onClick={onClose} />
          </div>
          <div className="flex flex-col border border-gray-300 p-3 items-center gap-2 pb-10">
            <p className="text-base md:text-lg text-[#444b88] font-bold">{title}</p>
            <p className="text-sm md:text-lg italic text-gray-400">
              {convertDate(dateReceived)}
            </p>
            <p className="text-sm md:text-lg text-justify text-center">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awardspreview;
