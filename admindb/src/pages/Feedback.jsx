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

const exampleFeedback = [
  {
    id: 1,
    sender: "John",
    subject: "Ceya",
    content: "Tententenene",
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
];

const pageSize = 10;

const Feedback = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  const totalPages = Math.ceil(exampleFeedback.length / pageSize);
  const indexOfLastFeedback = currentPage * pageSize;
  const indexOfFirstFeedback = indexOfLastFeedback - pageSize;
  const currentFeedback = exampleFeedback.slice(
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
    if (selectedFeedback) {
      const updatedFeedback = exampleFeedback.filter(
        (feedback) => feedback.id !== selectedFeedback.id
      );
    }
    setSelectedFeedback(null);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Feedback</h1>
      <div className="feedback">
        {currentFeedback.map((feedback) => (
          <Card key={feedback.id} className="mb-4">
            <div className="flex justify-end">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button className="text-red-500 hover:text-red-700">
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
                  <AlertDialogAction onClick={deleteFeedback}>
                    Delete
                  </AlertDialogAction>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
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
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index} isActive={index + 1 === currentPage}>
              <PaginationLink onClick={() => setCurrentPage(index + 1)}>
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
        <PaginationNext
          onClick={nextPage}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </div>
  );
};

export default Feedback;