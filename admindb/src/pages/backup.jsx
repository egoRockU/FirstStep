import React, { useState } from "react";
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

const Employers = () => {
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
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Filter data base on search
  const filteredData = data.filter((employer) =>
    employer.name.toLowerCase().includes(searchTerm.toLowerCase())
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

  // Function to handle deleting an employer
  const handleDelete = (id) => {
    // Set the id to delete
    setDeleteId(id);
  };

  // Function to confirm delete
  const confirmDelete = () => {
    console.log("Deleting employer with id:", deleteId);
    //Simulation only of deletion
    setDeleteId(null);
  };

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
    if (selectedRows.includes(index)) {
      setSelectedRows([]);
    } else {
      setSelectedRows([index]);
    }
    setMenuOpen(true);
  };

  const handleView = () => {
    console.log("Viewing selected rows:", selectedRows);
    setMenuOpen(false);
  };

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      {/* Search bar and title */}
      <h1 className="text-xl font-semibold">Employers</h1>
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
              Are you sure you want to delete this employer?
            </AlertDialogDescription>
            <AlertDialogAction as="button" onClick={confirmDelete}>
              Delete
            </AlertDialogAction>
            <AlertDialogCancel as="button">Cancel</AlertDialogCancel>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      {/* DataTable */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>
              <Checkbox
                checked={selectAllChecked}
                onCheckedChange={(isChecked) => handleSelectAll(isChecked)}
              />
            </TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Company</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>
                <Checkbox
                  checked={selectedRows.includes(index)}
                  onCheckedChange={() => handleRowSelect(index)}
                />
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.company}</TableCell>
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
                    {selectedRows.includes(index) && menuOpen && (
                      <DropdownMenuContent>
                        <DropdownMenuItem onSelect={handleView}>
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={handleView}>
                          Visit Profile
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
        {selectedRows.length} of {data.length} row(s) selected.
      </TableCaption>
      <Pagination>
        <PaginationContent>
          <PaginationPrevious
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1} // Disable if on first page
          />
          <PaginationItem key={currentPage}>
            <PaginationLink isActive={true}>{currentPage}</PaginationLink>
          </PaginationItem>
          <PaginationNext
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages} // Disable if on last page
          />
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Employers;
