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

const DataTable = ({ data, currentPage, totalPages, onPageChange }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const itemsPerPage = 10; //max number per page

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, data.length);
  const currentPageData = data.slice(startIndex, endIndex);

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

  const handleEdit = () => {
    setMenuOpen(false);
  };

  const handleDelete = () => {
    setMenuOpen(false);
  };

  return (
    <div>
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
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.account}</TableCell>
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
                        <DropdownMenuItem onSelect={handleEdit}>
                          View
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={handleDelete}>
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

export default DataTable;
