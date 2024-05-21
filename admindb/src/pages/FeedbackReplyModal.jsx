import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/ui/card";

const FeedbackReplyModal = ({
  isOpen,
  onClose,
  title,
  subject,
  body,
  buttonText,
  disableOnDelete,
}) => {
  const [replyModalOpen, setReplyModalOpen] = useState(false);

  if (!isOpen || disableOnDelete) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div
        className="absolute inset-0 bg-gray-500 opacity-75"
        onClick={onClose}
      ></div>
      <div className="relative bg-secondary rounded-lg w-screen max-w-2xl p-6">
        {/* Title */}
        <div className="mb-10">
          <CardHeader>
            <CardTitle>From: {title}</CardTitle>
          </CardHeader>
          {/* Subject */}
          <CardDescription className="text-primary">
            Subject: {subject}
          </CardDescription>
        </div>

        {/* Card Content */}
        <Card>
          <CardContent className="w-2xl h-70 overflow-hidden">
            <div className="overflow-y-auto h-full">
              {/* Description */}
              <CardDescription className="text-primary">{body}</CardDescription>
            </div>
          </CardContent>
        </Card>

        {/* Buttons */}
        <div className="flex justify-center mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 mr-2 text-white bg-indigo-600 rounded hover:bg-indigo-700"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackReplyModal;
