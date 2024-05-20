import axios from "axios";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ImSpinner } from "react-icons/im";
import { useState } from "react";

function DeletePortfoliolink({ profileId, link, onClose }) {
  const navigate = useNavigate();
  const linkSplit = link.split("/");
  const portfolioId = linkSplit[linkSplit.length - 1];
  const [loading, setLoading] = useState(false);

  const handleDelete = () => {
    setLoading(true);
    const input = {
      profileId,
      _id: portfolioId,
    };

    axios
      .post("/api/portfolio/delete", input, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        setLoading(false);
        toast.success(res.data.message, { onClose: () => navigate(0) });
        onClose();
      })
      .catch((err, res) => {
        console.log(err);
        setLoading(false);
        toast.error(res.data.message, { onClose: () => navigate(0) });
        onClose();
      });
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div className="w-80 md:w-2/5 lg:w-1/4 rounded-lg bg-white flex flex-col w-250 h-120 border border-gray-400 shadow-xl">
        <div className="w-full flex justify-between px-2 py-2 border-b border-gray-400">
          <h1 className="text-lg text-[#444b88] font-bold">Delete Portfolio</h1>
          <IoMdClose size={30} className="cursor-pointer" onClick={onClose} />
        </div>
        <div className="flex flex-col gap-2 p-4">
          <div className="text-center">
            <h1 className="text-base md:text-lg font-semibold">
              ARE YOU SURE YOU WANT TO DELETE THIS PORTFOLIO?
            </h1>
          </div>
          <div className="text-center">
            <h1 className="text-sm md:text-md text-[#444b88] overflow-hidden">{link}</h1>
          </div>
        </div>
        <div className="w-full flex justify-end gap-5 px-3 py-2">
          <button
            className="text-sm md:text-md lg:text-lg rounded-lg py-1 px-3 border-2 border-[#444b88] text-[#444b88] hover:bg-[#bad2ff]"
            onClick={onClose}
          >
            NO
          </button>
          <button
            className="text-xs md:text-md lg:text-lg rounded-lg py-1 px-3 border-2 border-red-500 text-red-500 hover:bg-red-300"
            onClick={handleDelete}
          >
            {loading ? (
              <ImSpinner className="animate-spin mr-2" />
            ) : (
              "YES, DELETE THIS PORTFOLIO"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletePortfoliolink;
