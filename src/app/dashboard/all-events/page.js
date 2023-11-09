"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { MdDeleteSweep, MdGppGood } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import "./events.css";

const AllEvents = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedPageSize, setSelectedPageSize] = useState(10);
  const router = useRouter();

  const getPageRange = () => {
    const maxPagesToShow = 7; // Number of page numbers to show at once
    const halfMaxPages = Math.floor(maxPagesToShow / 2);

    let startPage = currentPage - halfMaxPages;
    let endPage = currentPage + halfMaxPages;

    if (startPage <= 0) {
      startPage = 1;
      endPage = maxPagesToShow;
    }

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  };


  useEffect(() => {
    fetch(
      `https://server-event-management-iota.vercel.app/all-events/?pageSize=${selectedPageSize}&currentPage=${currentPage}&status=${selectedFilter}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.items);
        setTotalPages(data.totalPages);
      })
      .catch((err) => console.log(err));
  }, [selectedFilter, selectedPageSize, currentPage]);

  
  // fetch new data based on filter
  const handleFilterChange = (selectedOption) => {
    if (selectedOption.target.value === "all") {
      setSelectedFilter(null);
    } else {
      setSelectedFilter(selectedOption.target.value);
    }
  };


  // fetch data based on number of items per page
  const handlePageSizeChange = (selectedOption) => {
    console.log(selectedOption.target.value);
    if (selectedOption.target.value === "Default") {
      setSelectedPageSize(null);
    } else {
      setSelectedPageSize(selectedOption.target.value);
    }
  };

  const handleApproved = (id)=>{
    console.log(id)
    fetch(`https://server-event-management-iota.vercel.app/update-event/${id}?status=approved`, {
      method: "PATCH"
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount > 0){
        router.refresh();
      }
    })
    .catch(err => console.log(err));
  }

  const handleDenied = (id)=>{
    console.log(id)
    fetch(`https://server-event-management-iota.vercel.app/update-event/${id}?status=denied`, {
      method: "PATCH"
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount > 0){
        router.refresh();
      }
      console.log(data);
    })
    .catch(err => console.log(err));
  }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  }

  // Filter data based on search query
  const filteredData = data.filter(item =>
    item.eventName?.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="min-h-screen px-4 md:px-12 py-6 event-container">
      <div className="filter-container flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="search-box sm:mb-4 px-4 py-2 rounded-xl">
          <input type="search" placeholder="Search" className="mr-3 h-10" onChange={handleSearch} />
          <HiOutlineSearch className="text-2xl"></HiOutlineSearch>
        </div>

        <div>
          <label>Filter: </label>
          <select
            className="drop-down rounded-xl px-4 py-2"
            name="filter"
            onChange={handleFilterChange}
          >
            <option>all</option>
            <option>pending</option>
            <option>approved</option>
            <option>denied</option>
          </select>
        </div>

        <div>
          <label>Item per page: </label>
          <select
            className="drop-down rounded-xl px-4 py-2"
            name="items"
            onChange={(e) => handlePageSizeChange(e)}
          >
            <option>Default</option>
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>50</option>
          </select>
        </div>
      </div>

      <div className="table min-w-full">
        <table className="min-w-full">
          <thead>
            <tr>
              <td className="id">#id</td>
              <td>Event Name</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>

          <tbody>
            {(searchQuery ? filteredData : data).map((dt) => (
              <tr key={dt._id}>
                <td className="id">{dt._id}</td>
                <td>{dt.eventName}</td>
                <td>{dt.eventStatus}</td>
                <td className="flex flex-wrap justify-center items-center">
                  <button
                    onClick={()=> handleApproved(dt._id)}
                    disabled={dt.eventStatus === "approved" || dt.eventStatus === "denied" ? true : false}
                    className="p-1 rounded-md text-xl bg-green-500 text-black"
                    title="Approve"
                  >
                    <MdGppGood></MdGppGood>
                  </button>

                  <button
                    onClick={()=> handleDenied(dt._id)}
                    disabled={dt.eventStatus === "approved" || dt.eventStatus === "denied" ? true : false}
                    className="p-1 rounded-md mx-2 text-xl bg-red-500 text-black"
                    title="Deny"
                  >
                    <MdDeleteSweep></MdDeleteSweep>
                  </button>

                  <Link
                    href={`/dashboard/all-events/${dt._id}`}
                    className="p-1 rounded-md text-xl bg-yellow-300 text-black"
                    title="View details"
                  >
                    <TbListDetails></TbListDetails>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination-container">
        {currentPage > 1 && (
          <button
            className="prev"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
        )}

        {getPageRange().map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`page ${currentPage === page ? "active" : ""}`}
          >
            {page}
          </button>
        ))}

        {currentPage < totalPages && (
          <button
            className="next"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default AllEvents;
