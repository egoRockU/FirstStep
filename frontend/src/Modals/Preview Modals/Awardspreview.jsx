import { IoMdClose } from "react-icons/io";

function Awardspreview() {
  return (
    <div className=' className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 h-[100vh]'>
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="w-1/3 bg-white shadow-lg">
          <div className="w-full flex justify-end py-2 px-2 border border-gray-300">
            <IoMdClose size={30} />
          </div>
          <div className="flex flex-col border border-gray-300 p-3 items-center gap-2 pb-10">
            <p className="text-2xl text-[#444b88] font-bold">Title</p>
            <p className="text-lg italic text-gray-400">Date Received</p>
            <p className="text-lg">Description</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awardspreview;
