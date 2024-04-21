import React, { useEffect, useState } from "react";
import NavbarLoggedIn from "../Components/NavbarLoggedIn";
import Footer from "../Components/Footer";
import { CiSearch } from "react-icons/ci";
import { MdOutlineSort } from "react-icons/md";
import img from "../images/applicants.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../Components/Loader";
import Pagination from "../Components/Pagination";
function Applicantlist() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("fullName");
  const [sortBy, setSortBy] = useState("fullName");
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    getApplicants();
  }, []);

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

  const clickapplicant = (id) => {
    navigate(`/profile/${id}`);
  };

  const applicantsPerPage = 10;

  const totalApplicants = applicants.length;

  let sortedApplicants;
  if (applicants.length > 1) {
    sortedApplicants = applicants.sort((a, b) => {
      let comparison = 0;
      if (sortBy === "fullName") {
        comparison = a.firstName.localeCompare(b.firstName);
      } else if (sortBy === "address") {
        comparison = a.address.localeCompare(b.address);
      }
      return sortDirection === "asc" ? comparison : comparison * -1;
    });
  } else {
    sortedApplicants = applicants;
  }

  const totalPages = Math.ceil(totalApplicants / applicantsPerPage);
  const indexOfLastApplicant = currentPage * applicantsPerPage;
  const indexOfFirstApplicant = indexOfLastApplicant - applicantsPerPage;
  const currentApplicants = sortedApplicants.slice(
    indexOfFirstApplicant,
    indexOfLastApplicant
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getApplicants = () => {
    setLoading(true);
    let input = {};
    //get all
    if (searchTerm === "") {
      input = { type: "all", query: {} };
    }

    //search name/address
    if ((filter === "fullName" || filter === "address") && searchTerm != "") {
      input = {
        type: "string",
        query: {
          field: filter,
          regex: searchTerm,
        },
      };
    }

    //search industry/skills
    if (
      (filter === "preferredCareer" || filter === "skills") &&
      searchTerm != ""
    ) {
      input = {
        type: "array",
        query: {
          field: filter,
          regex: searchTerm,
        },
      };
    }

    axios
      .post("/api/applicantprofile/search", input, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setLoading(false);
        setApplicants(res.data);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        console.log(err.response.data.errorMessage);
      });
  };

  return (
    <>
      <NavbarLoggedIn />
      {/* TODO make loader only appear below sort or use skeleton */}
      {/* TODO make footer snap on bottom of the screen */}
      {loading ? <Loader /> : <></>}
      <div className="flex pt-28">
        <div className="w-full lg:w-[60%] mx-auto">
          <div className="flex flex-col">
            <h1 className="text-lg text-[#444b88]">List of Applicants</h1>
            <hr className="w-full border-[#444b88]" />
            <div className="w-full flex gap-6 px-4 pt-5">
              <div className="relative">
                <select
                  onChange={(e) => setFilter(e.target.value)}
                  className="border border-[#444b88] py-1 px-5 bg-white appearance-none text-[#444b88]"
                >
                  <option value="fullName">Name</option>
                  <option value="address">Address</option>
                  <option value="skills">Skills</option>
                  <option value="preferredCareer">Industry</option>
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
                {/* TODO make it form or anything that would call getApplicants() when you press ENTER */}
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border border-gray-300 px-5 py-1  w-full"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      getApplicants();
                    }
                  }}
                />
                <div
                  className="bg-[#444b88] h-full flex justify-center items-center px-2"
                  onClick={getApplicants}
                >
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
              {applicants.length > 0 ? (
                currentApplicants.map((applicant) => (
                  //TODO add hover background change to this card
                  <div
                    key={applicant._id}
                    className="border border-[#444b88] p-4 flex gap-10 items-center cursor-pointer hover:bg-indigo-100"
                    onClick={() => clickapplicant(applicant._id)}
                  >
                    <img
                      src={applicant.profileImg}
                      alt={applicant.name}
                      className="w-20 h-20 rounded-full mr-4"
                    />
                    <div>
                      <h2 className="text-lg font-semibold text-[#444b88]">
                        {`${applicant.firstName} ${applicant.lastName}`}
                      </h2>
                      <p className="text-sm text-black">{applicant.email}</p>
                      <p className="text-sm text-gray-600">
                        {applicant.address}
                      </p>
                      <p className="text-sm text-black">
                        {applicant.contactNum}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                // TODO add styling
                <p className="text-2xl text-[#444b88] p-2 text-center">{`Unable to find "${searchTerm}"`}</p>
              )}
            </div>
          </div>
          {totalPages > 1 && (
  <Pagination
    currentPage={currentPage}
    totalPages={totalPages}
    handlePageChange={handlePageChange}
  />
)}

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Applicantlist;
