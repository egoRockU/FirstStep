import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

function Resumepreview({ title, image, onClose, resumeInfo, templateId }) {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
  };

  //create new resume database and updates profile values
  const handleSelect = () => {
    const inputs = {
      profileId: user.profileId,
      resumeInfo,
      templateId,
    };

    axios
      .post("/api/resume/create", inputs, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const resumeId = res.data._id;
        navigate(`/resume/${templateId}/${resumeId}`);
      })
      .catch(() => {
        toast.error("Failed to create resume.");
      });
  };

  return (
    <div className="bg-gray-400 bg-opacity-40 h-screen w-full items-self-center">
      <div className="h-full mx-auto lg:pt-10 lg:h-full flex items-center">
        <div className="bg-white flex flex-col w-[80%] lg:h-auto lg:w-1/2 mx-auto">
          <div className="flex flex-col">
            <div className="flex justify-between py-2 px-4 border border-gray-400">
              <h1 className="text-lg font-bold text-[#444b88]">{title}</h1>
              <IoClose size={25} onClick={handleClose} />
            </div>
            <div className="flex flex-col w-full bg-white border border-gray-400">
              <div className="lg:w-full lg:h-[40rem]">
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
