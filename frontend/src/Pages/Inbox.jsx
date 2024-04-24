import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import Footer from "../Components/Footer";
import Messagemodal from "../Modals/Messagemodal";
import { useEffect, useState } from "react";
import Pagination from "../Components/Pagination";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Inbox() {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [messages, setMessages] = useState([]);

  const openMessageModal = (message) => {
    setSelectedMessage(message);
    setModalOpen(true);
  };

  useEffect(() => {
    getMessages();
  }, [messages]);

  // Pagination
  const messagesPerPage = 5;
  const totalMessages = messages.length;
  const totalPagesCount = Math.ceil(totalMessages / messagesPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
  const currentMessages = messages.slice(
    indexOfFirstMessage,
    indexOfLastMessage
  );

  const getMessages = () => {
    const { profileType, profileId } = user;
    const inputs = {
      profileId,
    };
    let apiLink;
    if (profileType === "applicant") {
      apiLink = "/api/applicantprofile/getmessages";
    } else if (profileType === "employer") {
      apiLink = "/api/employerprofile/getmessages";
    }

    axios
      .post(apiLink, inputs, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        setMessages(res.data);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  return (
    <>
      <NavbarLoggedIn />
      <div className="flex flex-col pt-20 w-full">
        <div className="flex flex-col gap-2 w-3/5 mx-auto pt-20">
          <div className="pb-5">
            <h1 className="text-2xl font-bold text-[#444b88]">Inbox</h1>
          </div>
          <div className="flex flex-col gap-4 pb-10">
            {currentMessages.map((message) => (
              <div
                key={message._id}
                className="flex flex-col border border-[#444b88] p-4 hover:bg-[#bad2ff]"
                onClick={() => openMessageModal(message)}
              >
                {user.profileId === message.sender.profileId && (
                  <h1 className="text-lg">
                    <span className="text-[#444b88]">Sent to:</span>{" "}
                    {`${message.receiver.values.firstName} ${message.receiver.values.lastName}`}
                  </h1>
                )}
                {user.profileId !== message.sender.profileId && (
                  <h1 className="text-lg">
                    <span className="text-[#444b88]">From:</span>{" "}
                    {`${message.sender.values.firstName} ${message.sender.values.lastName}`}
                  </h1>
                )}
                <h1 className="text-xl">
                  <span className="text-[#444b88]">Subject:</span>{" "}
                  {message.subject}
                </h1>
              </div>
            ))}
          </div>
          <div className="w-full justify-end flex">
            <div className="w-full py-4">
              <div className="flex justify-end">
                {totalPagesCount > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPagesCount}
                    handlePageChange={handlePageChange}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {modalOpen && (
        <Messagemodal
          closeModal={() => setModalOpen(false)}
          message={selectedMessage}
          userId={user.profileId}
          userType={user.profileType}
        />
      )}
    </>
  );
}

export default Inbox;
