import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../components/ui/card";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "../components/ui/alert-dialog";
import { IoMdClose } from "react-icons/io";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";
import FeedbackReplyModal from "./FeedbackReplyModal";

const pageSize = 10;

const Feedback = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [feedbackData, setFeedbackData] = useState([
    {
      id: 1,
      sender: "Sender",
      subject: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content:
        "Quisque vitae nibh id nisl viverra pharetra. In non magna ipsum. Nunc vitae scelerisque sapien. Nulla sed augue a nisl interdum interdum et venenatis magna. Ut eget sapien sed neque mattis dignissim. Morbi consectetur dolor ante, sit amet pretium justo dignissim eget. Mauris maximus consectetur purus, non aliquam sapien semper quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vehicula porttitor efficitur. ",
    },
    {
      id: 2,
      sender: "Michael",
      subject: "Rorjan",
      content: "Trojan",
    },
    {
      id: 3,
      sender: "Bob",
      subject: "The builder",
      content: "Akkkn",
    },
    {
      id: 4,
      sender: "John",
      subject: "Ceya",
      content: "Tententenene",
    },
    {
      id: 5,
      sender: "Michael",
      subject: "Rorjan",
      content: "Trojan",
    },
    {
      id: 6,
      sender: "Bob",
      subject: "The builder",
      content: "Akkkn",
    },
    {
      id: 7,
      sender: "John",
      subject: "Ceya",
      content: "Tententenene",
    },
    {
      id: 8,
      sender: "Michael",
      subject: "Rorjan",
      content: "Trojan",
    },
    {
      id: 9,
      sender: "Bob",
      subject: "The builder",
      content: "Akkkn",
    },
    {
      id: 10,
      sender: "Bob",
      subject: "The builder",
      content: "Akkkn",
    },
    {
      id: 11,
      sender: "Bob",
      subject: "The builder",
      content: "Akkkn",
    },
  ]);

  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openModal = () => {
    if (!isDeleteModalOpen) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => setIsModalOpen(false);
  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  const totalPages = Math.ceil(feedbackData.length / pageSize);
  const indexOfLastFeedback = currentPage * pageSize;
  const indexOfFirstFeedback = indexOfLastFeedback - pageSize;
  const currentFeedback = feedbackData.slice(
    indexOfFirstFeedback,
    indexOfLastFeedback
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const deleteFeedback = () => {
    const updatedFeedbackData = feedbackData.filter(
      (feedback) => feedback.id !== selectedFeedback.id
    );
    setFeedbackData(updatedFeedbackData);
    setSelectedFeedback(null);
    closeDeleteModal();
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Feedback</h1>
      <div className="feedback">
        {currentFeedback.map((feedback) => (
          <Card
            key={feedback.id}
            className="mb-4"
            onClick={() => {
              setSelectedFeedback(feedback); // Set selected feedback
              openModal(); // Open reply modal
            }}
          >
            <div className="flex justify-end">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedFeedback(feedback);
                      openDeleteModal();
                    }}
                  >
                    <IoMdClose style={{ fontSize: "2.5rem" }} />{" "}
                  </button>
                </AlertDialogTrigger>

                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Delete Feedback</AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogDescription>
                    Are you sure you want to delete this feedback?
                  </AlertDialogDescription>
                  <AlertDialogAction
                    onClick={(e) => {
                      deleteFeedback();
                      e.stopPropagation();
                    }}
                  >
                    Delete
                  </AlertDialogAction>
                  <AlertDialogCancel
                    onClick={(e) => {
                      e.stopPropagation();
                      closeDeleteModal();
                    }}
                  >
                    Cancel
                  </AlertDialogCancel>
                </AlertDialogContent>
              </AlertDialog>
            </div>
            <CardHeader>
              <CardTitle>{feedback.sender}</CardTitle>
              <CardDescription>{feedback.subject}</CardDescription>
            </CardHeader>
            <CardContent>{feedback.content}</CardContent>
          </Card>
        ))}
      </div>
      <Pagination>
        <PaginationPrevious onClick={prevPage} disabled={currentPage === 1} />
        <PaginationContent>
          <PaginationItem isActive={true}>
            <PaginationLink onClick={() => setCurrentPage(currentPage)}>
              {currentPage}
            </PaginationLink>
          </PaginationItem>
        </PaginationContent>
        <PaginationNext
          onClick={nextPage}
          disabled={currentPage === totalPages}
        />
      </Pagination>
      <FeedbackReplyModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedFeedback ? selectedFeedback.sender : ""}
        subject={selectedFeedback ? selectedFeedback.subject : ""}
        description={selectedFeedback ? selectedFeedback.content : ""}
        buttonText="Close"
        buttonr="Reply"
      />
    </div>
  );
};

export default Feedback;
