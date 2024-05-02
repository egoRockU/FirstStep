// Dashboard.js
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import DashboardPage from "./DashboardPage";
import Applicants from "./Applicants"; 
import Employers from "./Employers";
import Feedback from "./Feedback";

export default function Dashboard() {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (text) => {
    setActiveItem(text);
  };

  
  const renderComponent = () => {
    switch (activeItem) {
      case "Applicants":
        return <Applicants />;
      case "Employers":
        return <Employers />;
      case "Feedback":
        return <Feedback />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="flex h-screen relative">
      <Sidebar activeItem={activeItem} onItemClick={handleItemClick} />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex-1 overflow-y-auto ">
          {renderComponent()} 
        </div>
      </div>
    </div>
  );
}
