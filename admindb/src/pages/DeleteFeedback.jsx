// DeleteFeedbackDialog.js
import React from "react";
import {
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from "../components/ui/alert-dialog";

const deleteFeedback = ({ onDelete, onCancel }) => {
  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Delete Feedback</AlertDialogTitle>
      </AlertDialogHeader>
      <AlertDialogDescription>
        Are you sure you want to delete this feedback?
      </AlertDialogDescription>
      <AlertDialogAction onClick={onDelete}>Delete</AlertDialogAction>
      <AlertDialogCancel onClick={onCancel}>Cancel</AlertDialogCancel>
    </AlertDialogContent>
  );
};

export default deleteFeedback;
