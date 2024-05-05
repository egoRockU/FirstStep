import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";

const ReplyFeedback = ({ onClose }) => {
  const [replyText] = useState("");

  const handleReplySubmit = () => {
    const contentEditableDiv = document.getElementById("replyContentEditable");
    const text = contentEditableDiv.innerText;

    console.log("Reply submitted:", text);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <div
        className="absolute inset-0 bg-gray-500 opacity-75"
        onClick={onClose}
      ></div>
      <div className="relative bg-secondary rounded-lg w-screen max-w-2xl p-6">
        {/* Title */}
        <div className="mb-6">
          <CardHeader>
            <CardTitle>Reply Feedback</CardTitle>
          </CardHeader>
        </div>

        {/* Card Content */}
        <Card>
          <CardContent
            id="replyContentEditable"
            className="min-h-[200px] w-full h-full overflow-auto flex flex-col"
            contentEditable={true}
            suppressContentEditableWarning={true}
          >
            {replyText}
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={handleReplySubmit}
            className="px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700"
          >
            Submit Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReplyFeedback;
