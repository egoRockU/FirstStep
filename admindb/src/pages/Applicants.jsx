import React, { useEffect, useState } from "react";
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
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableCaption,
} from "../components/ui/table";
import { Checkbox } from "../components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";
import Viewuser from "./Viewuser";
import { Button } from "../components/ui/button";
import axios from "axios";
import { Link } from "react-router-dom";
import { ImSpinner } from "react-icons/im";
export default function Applicants() {
  const mainAppDomain = import.meta.env.VITE_MAIN_CLIENT_DOMAIN;
  const [data, setData] = useState([]);
  //loading state
  const [loading, setLoading] = useState(true);
  // State pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Search state
  const [searchTerm, setSearchTerm] = useState("");
  const [searchInput, setSearchInput] = useState("");

  // Filter data base on search
  const filteredData = data.filter((applicant) =>
    applicant.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    getApplicants();
  }, [data]);

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

  // Selected rows state
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleRowSelect = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((rowIndex) => rowIndex !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

  const handleSelectAll = (checked) => {
    setSelectAllChecked(checked);
    setSelectedRows(checked ? Array.from(Array(itemsPerPage).keys()) : []);
  };

  const handleMenuClick = (index) => {
    setMenuOpen(true);
  };
  const handleDelete = () => {
    const deletedRows = data.filter((_, index) => selectedRows.includes(index));
    deleteApplicants(deletedRows);
    console.log("Deleted Data:", deletedRows);
    const updatedData = data.filter(
      (_, index) => !selectedRows.includes(index)
    );
    setData(updatedData);
    setSelectedRows([]);
  };
  const [activeDropdownItem, setActiveDropdownItem] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleView = (rowData) => {
    console.log("Row Data:", rowData);
    setIsDropdownOpen(false);
    setActiveItem("View");
    setActiveDropdownItem(
      <Viewuser data={rowData} name={rowData.fullName} email={rowData.email} />
    );
  };

  const handleBackToList = () => {
    setActiveItem(null);
    setActiveDropdownItem(null);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, filteredData.length);
  const currentPageData = filteredData.slice(startIndex, endIndex);

  const getApplicants = () => {
    axios
      .get("/api/admin/getapplicants")
      .then((res) => {
        setData(res.data);
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false); 
      });
  };

  const deleteApplicants = (selectedRows) => {
    const input = { deletedRows: selectedRows };

    axios
      .post("/api/admin/deleteapplicants", input, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        alert("Applicant(s) has been Successfully Deleted!");
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-full">
         <ImSpinner className="animate-spin text-blue-500 h-8 w-8" />
        </div>
      ) : activeItem === "View" ? (
        <div className="my-100">
          {activeDropdownItem}
          <div className="mt-5 ml-5">
            {" "}
            <Button onClick={handleBackToList}>Back to List</Button>
          </div>
        </div>
      ) : (
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
                <AlertDialogAction as="button" onClick={handleDelete}>
                  Delete
                </AlertDialogAction>
                <AlertDialogCancel as="button">Cancel</AlertDialogCancel>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          {/* DataTable */}
          <div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableCell>
                    <Checkbox
                      checked={selectAllChecked}
                      onCheckedChange={(isChecked) =>
                        handleSelectAll(isChecked)
                      }
                    />
                  </TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Account</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentPageData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Checkbox
                        checked={selectedRows.includes(index)}
                        onCheckedChange={() => handleRowSelect(index)}
                      />
                    </TableCell>
                    <TableCell>{row.fullName}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.accountType}</TableCell>
                    <TableCell>
                      <div style={{ position: "relative" }}>
                        <DropdownMenu>
                          <DropdownMenuTrigger>
                            <span
                              onClick={() => handleMenuClick(index)}
                              style={{
                                cursor: "pointer",
                                fontSize: "20px",
                                transform: "rotate(90deg)",
                                display: "inline-block",
                                lineHeight: "1",
                              }}
                            >
                              &#8942;
                            </span>
                          </DropdownMenuTrigger>
                          {menuOpen && (
                            <DropdownMenuContent>
                              <DropdownMenuItem
                                onSelect={() => handleView(row)}
                              >
                                View
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <a
                                  href={`${mainAppDomain}/profile/${row._id}`}
                                  target="_blank"
                                >
                                  Visit Profile{" "}
                                </a>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          )}
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <TableCaption style={{ whiteSpace: "nowrap" }}>
              {selectedRows.length} of {filteredData.length} row(s) selected.
            </TableCaption>
            <Pagination>
              <PaginationContent>
                <PaginationPrevious
                  onClick={() => onPageChange(currentPage - 1)}
                  disabled={currentPage === 1} // Disable if on first page
                />
                <PaginationItem key={currentPage}>
                  <PaginationLink isActive={true}>{currentPage}</PaginationLink>{" "}
                </PaginationItem>
                <PaginationNext
                  onClick={() => onPageChange(currentPage + 1)}
                  disabled={currentPage === totalPages} // Disable if on last page
                />
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      )}
    </>
  );
}
