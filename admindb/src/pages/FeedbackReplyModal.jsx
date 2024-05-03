import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel
} from "../components/ui/alert-dialog";

const FeedbackReplyModal = ({ isOpen, onClose, onSubmit }) => {
  const [reply, setReply] = useState("");

  const handleChange = (e) => {
    setReply(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(reply);
    setReply("");
    onClose();
  };

  return (
    <AlertDialog open={isOpen} onClose={onClose}>
      <AlertDialogTrigger>
        <button>Open Modal</button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Reply to Feedback</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          <textarea
            value={reply}
            onChange={handleChange}
            placeholder="Type your reply here..."
            rows={4}
            className="w-full p-2 border rounded"
          />
        </AlertDialogDescription>
        <div className="flex justify-end pt-4">
          <AlertDialogAction onClick={handleSubmit}>Submit</AlertDialogAction>
          <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default FeedbackReplyModal;
