import React, { useState } from "react";
import DataTable from "./DataTable";

export default function Applicants() {
  //data
  const data = [
    { id: 1, name: "John Doe", email: "john@example.com", account: "Local" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", account: "Google" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", account: "Local" },
    { id: 4, name: "John Doe", email: "john@example.com", account: "Google" },
    { id: 5, name: "Jane Smith", email: "jane@example.com", account: "Local" },
    { id: 6, name: "Bob Johnson", email: "bob@example.com", account: "Google" },
    { id: 7, name: "John Doe", email: "john@example.com", account: "Local" },
    { id: 8, name: "Jane Smith", email: "jane@example.com", account: "Google" },
    { id: 9, name: "Bob Johnson", email: "bob@example.com", account: "Local" },
    {
      id: 10,
      name: "Bob Johnson",
      email: "bob@example.com",
      account: "Google",
    },
    {
      id: 11,
      name: "Bob Johnson",
      email: "bob@example.com",
      account: "Google",
    },
  ];

  //state pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; //page number
  const totalPages = Math.ceil(data.length / itemsPerPage);

  //page change
  const onPageChange = (page) => {
    //exceed number
    const newPage = Math.min(totalPages, Math.max(1, page));
    setCurrentPage(newPage);
  };

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between space-y-2"></div>
      <DataTable
        data={data}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}
