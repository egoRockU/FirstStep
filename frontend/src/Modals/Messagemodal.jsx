import { useEffect, useState } from "react";
import logo from "../images/profile.svg";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import { toast } from "react-toastify";
import { ImSpinner } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Messagemodal({ closeModal, message, userId, userType, reload }) {
  const { user } = useSelector((state) => state.user);
  const { _id, sender, receiver, subject, body } = message;
  const navigate = useNavigate();
  const [senderName, setSenderName] = useState();
  const [senderImg, setSenderImg] = useState();
  const [receiverName, setReceiverName] = useState();
  const [receiverImg, setReceiverImg] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setSenderName(`${sender.values.firstName} ${sender.values.lastName}`);
    setSenderImg(sender.values.profileImg);
    setReceiverName(`${receiver.values.firstName} ${receiver.values.lastName}`);
    setReceiverImg(receiver.values.profileImg);
  }, []);

  const handleDeleteMessage = () => {
    setLoading(true);

    let apiLink;
    const inputs = {
      profileId: userId,
      messageId: _id,
    };
    if (userType === "applicant") {
      apiLink = "/api/applicantprofile/deletemessage";
    } else if (userType === "employer") {
      apiLink = "/api/employerprofile/deletemessage";
    }

    axios
      .post(apiLink, inputs, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        setLoading(false);
        toast.success(res.data.message, { onClose: reload() });
        closeModal();
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        toast.error("Failed to delete message.");
      });
  };

  const handleReply = () => {
    let state;
    if (userId !== sender.profileId) {
      state = {
        rName: senderName,
        rProfileImg: senderImg,
        rId: sender.profileId,
        rType: sender.profileType,
      };
    } else {
      state = {
        rName: receiverName,
        rProfileImg: receiverImg,
        rId: receiver.profileId,
        rType: receiver.profileType,
      };
    }
    navigate("/message", { state });
  };

  const visitProfile = (id, type) => {
    if (type === "applicant") {
      if (id === user.profileId && type === user.profileType) {
        navigate("/editprofile");
        return;
      }
      navigate(`/profile/${id}`);
    }
    if (type === "employer") {
      if (id === user.profileId && type === user.profileType) {
        navigate("/editemployer");
        return;
      }
      navigate(`/employerprofile/${id}`);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white flex flex-col border w-5/6 md:w-96 lg:w-2/5 h-2/3 md:h[600px] overflow-y-auto border-[#444b88] shadow-xl rounded-lg">
        <div className="w-full flex justify-end py-1 px-2" onClick={closeModal}>
          {" "}
          <IoMdClose size={30} />{" "}
        </div>
        <div className="flex flex-col p-5">
          <div className="">
            <h1 className="flex text-xl gap-2 mb-2">
              <span className="text-[#444b88]">From:</span>{" "}
              <img
                src={senderImg ? senderImg : logo}
                alt=""
                className="size-7 rounded-full border-2 border-[#444b88] cursor-pointer"
                onClick={() =>
                  visitProfile(sender.profileId, sender.profileType)
                }
              />{" "}
              <p
                className="hover:underline cursor-pointer"
                onClick={() =>
                  visitProfile(sender.profileId, sender.profileType)
                }
              >
                {senderName}
              </p>
            </h1>
            <h1 className="flex text-xl gap-2">
              <span className="text-[#444b88]">To:</span>{" "}
              <img
                src={receiverImg ? receiverImg : logo}
                alt=""
                className="size-7 rounded-full border-2 border-[#444b88] cursor-pointer"
                onClick={() =>
                  visitProfile(receiver.profileId, receiver.profileType)
                }
              />{" "}
              <p
                className="hover:underline cursor-pointer"
                onClick={() =>
                  visitProfile(receiver.profileId, receiver.profileType)
                }
              >
                {receiverName}
              </p>
            </h1>
          </div>
          <div className="pt-5">
            <h1 className="flex text-lg gap-2 break-all">
              <span className="text-[#444b88]">Subject</span>
              {subject}
            </h1>
          </div>

          <div className="pt-8">
            <div className="w-full border border-[#444b88] py-4 px-4">
              <h1 className="pb-20 text-base text-black break-all overflow-y-auto">{body}</h1>
            </div>
          </div>
          <div className="w-full justify-end flex gap-4 pt-5">
            <button
              className="px-2 py-1 border border-[#444b88] rounded-md hover:bg-[#FFA7A7]"
              onClick={handleDeleteMessage}
            >
              {loading ? <ImSpinner className="animate-spin mr-2" /> : "Delete"}
            </button>
            <button
              className="px-2 py-1 border border-[#444b88] rounded-md bg-[#bad2ff] hover:bg-[#8B95EE]"
              onClick={handleReply}
            >
              Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messagemodal;
