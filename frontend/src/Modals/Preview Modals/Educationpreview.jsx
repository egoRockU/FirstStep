import { IoMdClose } from "react-icons/io";

function Educationpreview() {
  return (
    <div className=' className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 h-[100vh]'>
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="w-1/3 bg-white shadow-lg">
          <div className="w-full flex justify-end py-2 px-2 border border-gray-300">
            <IoMdClose size={30} />
          </div>
          <div className="flex flex-col border border-gray-300 py-5">
            <div className="flex flex-col w-full items-center gap-1">
              <h1 className="text-2xl text-[#444b88] font-bold">School Name</h1>
              <div className="flex italic gap-3 text-lg text-gray-400">
                <h1>Start-Date</h1>
                <p>-</p>
                <h1>End-Date</h1>
              </div>
              <div className="flex gap-3 text-lg items-center">
                <h1>Degree</h1>
                <p>-</p>
                <h1>Program</h1>
              </div>
              <h1 className="text-lg">Grade</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Educationpreview;
