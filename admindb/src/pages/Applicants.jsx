import React, { useState } from "react";
import DataTable from "./DataTable";
import { Input } from "../components/ui/input";
import { CiSearch } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
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

export default function Applicants() {
  // Data
  const data = [
    { id: 1, name: "John Dog", email: "john@example.com", account: "Local" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", account: "Google" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", account: "Local" },
    { id: 4, name: "John loyd", email: "john@example.com", account: "Google" },
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

  // State pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Search state
  const [searchTerm, setSearchTerm] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [deleteId, setDeleteId] = useState(null); // Track the id to delete

  // Filter data base on search
  const filteredData = data.filter((applicant) =>
    applicant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Changing Pages
  const onPageChange = (page) => {
    const newPage = Math.min(totalPages, Math.max(1, page));
    setCurrentPage(newPage);
  };

  //Search input
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  // Handle search
  const handleSearch = () => {
    setSearchTerm(searchInput);
  };

  // Handle search on Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Function to handle deleting an applicant
  const handleDelete = (id) => {
    // Set the id to delete
    setDeleteId(id);
  };

  // Function to confirm delete
  const confirmDelete = () => {
    console.log("Deleting applicant with id:", deleteId);
    //Simulation only of deletion
    setDeleteId(null);
  };

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      {/* Search bar and title */}
      <h1 className="text-xl font-semibold">Applicants</h1>
      <div className="relative flex items-center">
        <Input
          type="text"
          placeholder="Search by name"
          value={searchInput}
          onChange={handleSearchInputChange}
          onKeyPress={handleKeyPress}
          className="w-1/2 py-2 pl-10 pr-12"
        />
        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <AlertDialog id="deleteConfirmation">
          <AlertDialogTrigger>
            <FaRegTrashCan className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 cursor-pointer w-8 h-8" />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Confirm Delete</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogDescription>
              Are you sure you want to delete this applicant?
            </AlertDialogDescription>
            <AlertDialogAction as="button" onClick={confirmDelete}>
              Delete
            </AlertDialogAction>
            <AlertDialogCancel as="button">Cancel</AlertDialogCancel>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      {/* DataTable */}
      <DataTable
        data={filteredData}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        handleDelete={handleDelete}
      />
    </div>
  );
}
