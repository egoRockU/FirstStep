import logo from "../images/profile.svg";
import { IoMdClose } from "react-icons/io";

function Messagemodal({ closeModal, messageId }) {
  const { senderName } = messageId;
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="bg-white flex flex-col border w-2/4 border-[#444b88] shadow-xl">
        <div className="w-full flex justify-end py-1 px-2" onClick={closeModal}>
          {" "}
          <IoMdClose size={30} />{" "}
        </div>
        <div className="flex flex-col p-5">
          <div className="">
            <h1 className="flex text-xl gap-2">
              <span className="text-[#444b88]">From:</span>{" "}
              <img src={logo} alt="" /> {senderName}
            </h1>
          </div>
          <div className="pt-5">
            <h1 className="flex text-lg gap-2">
              <span className="text-[#444b88]">Subject</span>Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Eius magni, expedita qui
            </h1>
          </div>

          <div className="pt-8">
            <div className="w-full border border-[#444b88] py-4 px-4">
              <h1 className="pb-20 text-base text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem quas, ducimus voluptates molestias praesentium in
                vitae! Facilis expedita pariatur placeat perspiciatis possimus,
                odit amet voluptates dignissimos aspernatur, veritatis, aperiam
                praesentium?
              </h1>
            </div>
          </div>
          <div className="w-full justify-end flex gap-4 pt-5">
            <button className="px-2 py-1 border border-[#444b88] rounded-md">
              Cancel
            </button>
            <button className="px-2 py-1 border border-[#444b88] rounded-md bg-[#bad2ff]">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messagemodal;
