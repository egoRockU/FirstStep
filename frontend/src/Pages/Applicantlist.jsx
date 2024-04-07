import React, { useState } from "react";
import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import Footer from "../Components/Footer";
import { CiSearch } from "react-icons/ci";
import { MdOutlineSort } from "react-icons/md";
import img from "../images/applicants.png";
import { useNavigate } from "react-router-dom";

function Applicantlist() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [filter, setFilter] = useState("name");
  const [sortBy, setSortBy] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const handleFilterChange = (value) => {
    setFilter(value);
    setSortBy(value);
    setSearchTerm("");
  };

  const handleSort = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const clickapplicant = () => {
    navigate("/profile");
  };

  const applicants = [
    {
      id: 1,
      name: "Mikolo buenafe",
      email: "mikolo@gmail.com",
      address: "123 Main St",
      contact: "09xxxxxxxxx",
      image: img,
    },
    {
      id: 2,
      name: "Wakin buenafe",
      email: "mikolo@gmail.com",
      address: "456 Elm St",
      contact: "09xxxxxxxxx",
      image: img,
    },
    {
      id: 3,
      name: "Buenafe buenafe",
      email: "mikolo@gmail.com",
      address: "789 Oak St",
      contact: "09xxxxxxxxx",
      image: img,
    },
    // Add more applicants below
    {
      id: 4,
      name: "John Doe",
      email: "john.doe@example.com",
      address: "456 Pine St",
      contact: "09xxxxxxxxx",
      image: img,
    },
    {
      id: 5,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      address: "789 Maple St",
      contact: "09xxxxxxxxx",
      image: img,
    },
    {
      id: 6,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      address: "101 Oak St",
      contact: "09xxxxxxxxx",
      image: img,
    },
    {
      id: 7,
      name: "Bob Williams",
      email: "bob.williams@example.com",
      address: "222 Elm St",
      contact: "09xxxxxxxxx",
      image: img,
    },
    {
      id: 8,
      name: "Emma Davis",
      email: "emma.davis@example.com",
      address: "333 Birch St",
      contact: "09xxxxxxxxx",
      image: img,
    },
    {
      id: 9,
      name: "Michael Wilson",
      email: "michael.wilson@example.com",
      address: "444 Cedar St",
      contact: "09xxxxxxxxx",
      image: img,
    },
    {
      id: 10,
      name: "Sophia Brown",
      email: "sophia.brown@example.com",
      address: "555 Walnut St",
      contact: "09xxxxxxxxx",
      image: img,
    },
  ];
  const filteredApplicants = applicants.filter((applicant) =>
    filter === "name"
      ? applicant.name.toLowerCase().includes(searchTerm.toLowerCase())
      : filter === "address"
      ? applicant.address.toLowerCase().includes(searchTerm.toLowerCase())
      : Object.values(applicant).some((value) =>
          typeof value === "string"
            ? value.toLowerCase().includes(searchTerm.toLowerCase())
            : false
        )
  );
  const sortedApplicants = filteredApplicants.sort((a, b) => {
    let comparison = 0;
    if (sortBy === "name") {
      comparison = a.name.localeCompare(b.name);
    } else if (sortBy === "address") {
      comparison = a.address.localeCompare(b.address);
    }
    return sortDirection === "asc" ? comparison : comparison * -1;
  });

  return (
    <>
      <NavbarLoggedIn />
      <div className="flex pt-28">
        <div className="w-full lg:w-[60%] mx-auto">
          <div className="flex flex-col">
            <h1 className="text-lg text-[#444b88]">List of Applicants</h1>
            <hr className="w-full border-[#444b88]" />
            <div className="w-full flex gap-6 px-4 pt-5">
              <div className="relative">
                <select
                  onChange={(e) => handleFilterChange(e.target.value)}
                  className="border border-[#444b88] py-1 px-5 bg-white appearance-none text-[#444b88]"
                >
                  <option value="name">Name</option>
                  <option value="address">Address</option>
                  <option value="skills">Skills</option>
                  <option value="industry">Industry</option>
                </select>
                <span className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#444b88]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 6.707a1 1 0 011.414 0L10 10.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex items-center w-full">
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={(e) => handleSearch(e.target.value)}
                  className="border border-gray-300 px-5 py-1  w-full"
                />
                <div className="bg-[#444b88] h-full flex justify-center items-center px-2">
                  <CiSearch size={25} color="white" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-12">
            <div>
              <button
                onClick={handleSort}
                className="bg-[#444b88] text-white border border-[#444b88] flex items-center gap-2 px-3"
              >
                <MdOutlineSort size={25} />
                Sort
              </button>
            </div>
            <div className="flex flex-col gap-7">
              {sortedApplicants.map((applicant) => (
                <div
                  key={applicant.id}
                  className="border border-[#444b88] p-4 flex gap-10 items-center cursor-pointer"
                  onClick={clickapplicant}
                >
                  <img
                    src={applicant.image}
                    alt={applicant.name}
                    className="w-20 h-20 rounded-full mr-4"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-[#444b88]">
                      {applicant.name}
                    </h2>
                    <p className="text-sm text-black">{applicant.email}</p>
                    <p className="text-sm text-gray-600">{applicant.address}</p>
                    <p className="text-sm text-black">{applicant.contact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full py-4">
            <div className="flex justify-end">
              <button className="px-3 py-1 mx-1 border border-[#444b88] bg-white text-[#444b88]">
                1
              </button>
              <button className="px-3 py-1 mx-1 border border-[#444b88] bg-white text-[#444b88]">
                2
              </button>
              <button className="px-3 py-1 mx-1 border border-[#444b88] bg-white text-[#444b88]">
                3
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Applicantlist;
