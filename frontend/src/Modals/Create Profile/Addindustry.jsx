import React from "react";
import { IoCloseOutline } from "react-icons/io5";


function Addindustry() {
  return (
    <div className="h-[100vh] bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="w-1/4 bg-white shadow-lg">
            <div className="flex justify-end"><IoCloseOutline color="black" size={30} /></div>
          <div className="flex flex-col items-start justify-start h-1/4 px-4 py-4 gap-4">
            <h1 className="text-xl">Add Industries</h1>
            <div className="w-full">
              <input
                type="email"
                name=""
                id=""
                className="p-2 border-2 border-[#444B88] w-full"
              />
            </div>
            <div className="flex justify-end w-full gap-4">
            <button className="border-2 border-[#444B88] px-3 py-1 rounded-md">Cancel</button>
            <button className="border-2 border-[#444B88] bg-[#8B95EE] px-3 py-1 rounded-md">Save</button>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addindustry;
