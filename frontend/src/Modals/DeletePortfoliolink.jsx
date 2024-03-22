import { IoMdClose } from "react-icons/io";

function DeletePortfoliolink() {
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="bg-white flex flex-col w-250 h-120 border border-gray-400 shadow-xl">
        <div className="w-full flex justify-between px-2 py-2 border-b border-gray-400">
          <h1 className="text-lg text-[#444b88] font-bold">DELETE PORTFOLIO</h1>
          <IoMdClose size={30} className="cursor-pointer" />
        </div>
        <div className="flex flex-col gap-2 p-4">
          <div className="text-center">
            <h1 className="text-lg font-bold">
              ARE YOU SURE YOU WANT TO DELETE THIS PORTFOLIO?
            </h1>
          </div>
          <div className="text-center">
            <h1 className="text-base text-[#444b88]">firststep-ts.vercel.app/resume/3123214151</h1>
          </div>
        </div>
        <div className="w-full flex justify-end gap-5 px-3 py-2">
          <button className="text-lg py-1 px-3 border-2 border-[#444b88] text-[#444b88] hover:bg-[#bad2ff]">NO</button>
          <button className="text-lg py-1 px-3 border-2 border-red-500 text-red-500 hover:bg-red-300">YES, DELETE THIS PORTFOLIO</button>
        </div>
      </div>
    </div>
  );
}

export default DeletePortfoliolink;
