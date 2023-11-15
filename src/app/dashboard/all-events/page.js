"use client";

import SliceText from "@/utils/SliceText";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { MdDeleteSweep, MdGppGood } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import Swal from "sweetalert2";
import "./events.css";

const AllEvents = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [selectedPageSize, setSelectedPageSize] = useState(10);
  const [loading, setLoading] = useState(true);
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

  const refetch = (url) => {
    fetch(
      `${url}/?pageSize=${selectedPageSize}&currentPage=${currentPage}&status=${selectedFilter}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.items);
        setTotalPages(data.totalPages);
        setLoading(false)
      })
      .catch((err) => console.log(err));
  }


  useEffect(() => {
    fetch(
      `https://server-event-management-iota.vercel.app/all-events/?pageSize=${selectedPageSize}&currentPage=${currentPage}&status=${selectedFilter}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.items);
        setTotalPages(data.totalPages);
        setLoading(false)
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

  const handleApproved = (id) => {
    console.log(id)
    fetch(`https://server-event-management-iota.vercel.app/update-event/${id}?status=approved`, {
      method: "PATCH"
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          router.refresh();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Event Approved",
            showConfirmButton: false,
            timer: 1500
          });

          // refetch the data
          refetch("https://server-event-management-iota.vercel.app/all-events")
        }
      })
      .catch(err => console.log(err));
  }

  const handleDenied = (id) => {
    console.log(id)
    fetch(`https://server-event-management-iota.vercel.app/update-event/${id}?status=denied`, {
      method: "PATCH"
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          router.refresh();
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Event Denied",
            showConfirmButton: false,
            timer: 1500
          });

          // refetch the data
          refetch("https://server-event-management-iota.vercel.app/all-events")
        }
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
    <div className="min-h-screen px-4 md:px-12 py-6 dashboard-bg">
      <div className="filter-container flex flex-col md:flex-row md:justify-between md:items-center my-5">
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

      <div className="table min-w-full dashboard-tile">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Event Name</th>
                <th>Status</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                loading ? <tr>
                  <td><span className="loading loading-infinity loading-lg"></span></td>
                </tr> :
                (searchQuery ? filteredData : data).map((dt) => <tr key={dt._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={dt.imageUrl} alt={dt.eventName} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{dt.eventCategory}</div>
                        <div className="text-sm opacity-50">{dt.eventLocation}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {SliceText(dt.eventName, 30)}
                    <br />
                    <span className="badge badge-ghost badge-sm">{dt.eventDate ? dt.eventDate : "N/A"}</span>
                  </td>
                  <td>
                    {
                      dt.eventStatus === "approved"
                        ? <div className="badge badge-accent">{dt.eventStatus}</div>
                        : dt.eventStatus === "pending"
                          ? <div className="badge badge-primary">{dt.eventStatus}</div>
                          : <div className="badge badge-secondary">{dt.eventStatus}</div>
                    }
                  </td>
                  <th>
                    <button
                      onClick={() => handleApproved(dt._id)}
                      disabled={dt.eventStatus === "approved" || dt.eventStatus === "denied" ? true : false}
                      className="btn btn-active btn-accent px-[0.3rem] min-h-[2.2rem] h-0"
                      title="Approve"
                    >
                      <MdGppGood className="text-2xl"></MdGppGood>
                    </button>

                    <button
                      onClick={() => handleDenied(dt._id)}
                      disabled={dt.eventStatus === "approved" || dt.eventStatus === "denied" ? true : false}
                      className="btn btn-active btn-secondary px-[0.3rem] min-h-[2.2rem] h-0 mx-2"
                      title="Deny"
                    >
                      <MdDeleteSweep className="text-2xl"></MdDeleteSweep>
                    </button>

                    <Link
                      href={`/dashboard/all-events/${dt._id}`}
                      className="btn btn-active btn-primary px-[0.3rem] min-h-[2.2rem] h-0"
                      title="View details"
                    >
                      <TbListDetails className="text-2xl"></TbListDetails>
                    </Link>
                  </th>
                </tr>)
              }
            </tbody>

          </table>
        </div>
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
