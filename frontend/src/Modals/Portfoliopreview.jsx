import React from "react";
import { IoClose } from "react-icons/io5";
import resume from "../images/hero1bg.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Portfoliopreview({
  title,
  image,
  onClose,
  portfolioInfo,
  templateId,
}) {
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
  };

  const handleSelect = () => {
    axios
      .post("/api/portfolio/create", portfolioInfo, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const portfolioId = res.data._id;
        navigate(`/portfolio/${templateId}/${portfolioId}`);
      })
      .catch(() => {
        toast.error("Failed to create portfolio.");
      });
  };

  return (
    <div className="bg-gray-400 bg-opacity-40 h-[100vh] flex flex-col justify-center">
      <div className="max-w-screen-2xl mx-auto pt-10 pb-10 ">
        <div className="bg-white flex flex-col w-1/2 mx-auto">
          <div className="flex flex-col">
            <div className="flex justify-between py-2 px-4 border border-gray-400">
              <h1 className="text-lg font-bold text-[#444b88]">{title}</h1>
              <IoClose size={25} onClick={handleClose} />
            </div>
            <div className="flex flex-col w-full bg-white border border-gray-400">
              <div className="w-full">
                <img src={image} alt="" className="w-full p-8" />
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

export default Portfoliopreview;
