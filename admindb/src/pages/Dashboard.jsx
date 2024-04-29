import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import DashboardPage from "./DashboardPage";

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar /> 
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex-1 overflow-y-auto bg-gray-100">
          <DashboardPage />
        </div>
      </div>
    </div>
  );
}
