import React, { useState, useEffect } from "react";
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
import axios from "axios";

const pageSize = 10;

const Feedback = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [feedbackData, setFeedbackData] = useState([]);

  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    getFeedbacks();
  }, []);

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
      (feedback) => feedback._id !== selectedFeedback._id
    );
    removeFeedback(selectedFeedback._id);
    setFeedbackData(updatedFeedbackData);
    setSelectedFeedback(null);
    closeDeleteModal();
  };

  const getFeedbacks = () => {
    axios.get("/api/feedback/getAll").then((res) => {
      setFeedbackData(res.data);
    });
  };

  const removeFeedback = (id) => {
    axios
      .post(
        "/api/feedback/deletefeedback",
        { _id: id },
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      )
      .then((res) => {
        console.log("Feedback has been successfully deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Feedback</h1>
      <div className="feedback">
        {currentFeedback.map((feedback) => (
          <Card
            key={feedback._id}
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
              <CardTitle>{`${feedback.sender.values.firstName} ${feedback.sender.values.lastName}`}</CardTitle>
              <CardDescription>{feedback.subject}</CardDescription>
            </CardHeader>
            <CardContent>{feedback.body}</CardContent>
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
        title={
          selectedFeedback
            ? `${selectedFeedback.sender.values.firstName} ${selectedFeedback.sender.values.lastName}`
            : ""
        }
        subject={selectedFeedback ? selectedFeedback.subject : ""}
        body={selectedFeedback ? selectedFeedback.body : ""}
        buttonText="Close"
        buttonr="Reply"
      />
    </div>
  );
};

export default Feedback;
