import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import Footer from "../Components/Footer";
import Messagemodal from "../Modals/Messagemodal";
import { useState } from "react";
import Pagination from "../Components/Pagination";

function Inbox() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const openMessageModal = (messageId, senderName) => {
    setSelectedMessage({ id: messageId, senderName });
    setModalOpen(true);
  };
  

  // Pagination
  const messages = [
    { id: "message1", from: "Sender 1", subject: "Lorem ipsum dolor 1" },
    { id: "message2", from: "Sender 2", subject: "Lorem ipsum dolor 2" },
    { id: "message3", from: "Sender 3", subject: "Lorem ipsum dolor 3" },
    { id: "message4", from: "Sender 4", subject: "Lorem ipsum dolor 4" },
  ];
  const messagesPerPage = 2;
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
                key={message.id}
                className="flex flex-col border border-[#444b88] p-4 hover:bg-[#bad2ff]"
                onClick={() => openMessageModal(message.id, message.from)}
              >
                <h1 className="text-lg">
                  <span className="text-[#444b88]">From:</span> {message.from}
                </h1>
                <h1 className="text-xl">
                  <span className="text-[#444b88]">Subject: </span>{" "}
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
          messageId={selectedMessage}
        />
      )}
    </>
  );
}

export default Inbox;
