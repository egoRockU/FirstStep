import { IoMdClose } from "react-icons/io";

function Activitiespreview({ onClose }) {
  return (
   <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 py-5">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="w-1/3 bg-white shadow-lg">
          <div className="w-full flex justify-end py-2 px-2 border border-gray-300">
            <IoMdClose size={30} onClick={onClose}/>
          </div>
          <div className="border border-gray-300 flex flex-col px-4 py-2 gap-1">
            <div className="flex gap-4">
              <h1 className="text-2xl text-[#444b88] font-bold">Title</h1>
              <div className="flex gap-3 text-lg items-center">
                <h1>Start-Date</h1>
                <p>-</p>
                <h1>End-Date</h1>
              </div>
            </div>
            <h1 className="text-lg">Organization/Company Name</h1>
            <p className="italic text-lg text-gray-400">Location</p>
            <p className="text-lg">Description</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activitiespreview;
