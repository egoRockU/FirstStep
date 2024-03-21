import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Resumepreview({ title, image, onClose, resumeInfo }) {
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
  };

  const handleSelect = () => {
    navigate("/generatedresume", { state: { resumeInfo, resumeTitle: title } });
  };

  return (
    <div className="bg-gray-400 bg-opacity-40 h-screen w-full items-self-center">
      <div className="max-w-screen-2xl mx-auto pt-10 pb-10 h-full flex items-center">
        <div className="bg-white flex flex-col w-1/2 mx-auto">
          <div className="flex flex-col">
            <div className="flex justify-between py-2 px-4 border border-gray-400">
              <h1 className="text-lg font-bold text-[#444b88]">{title}</h1>
              <IoClose size={25} onClick={handleClose} />
            </div>
            <div className="flex flex-col w-full bg-white border border-gray-400">
              <div className="w-full h-[40rem]">
                <img
                  src={image}
                  alt=""
                  className="w-full h-full p-8 object-scale-down"
                />
              </div>
              <div className="pb-5 w-full flex justify-center">
                <button
                  className="border border-[#444b88] py-2 px-3 font-bold text-[#444b88] hover:bg-[#bad2ff]"
                  onClick={handleSelect}
                >
                  Select Template
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resumepreview;
