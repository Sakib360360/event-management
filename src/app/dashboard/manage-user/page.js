"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { DiGhostSmall } from "react-icons/di";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import { MdGppGood } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import Swal from 'sweetalert2';
import "../all-events/events.css";

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
      `${url}/?pageSize=${selectedPageSize}&currentPage=${currentPage}&role=${selectedFilter}`
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
      `https://server-event-management-iota.vercel.app/users/?pageSize=${selectedPageSize}&currentPage=${currentPage}&role=${selectedFilter}`
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

  const handleAdmin = (id) => {
    console.log(id)
    fetch(`https://server-event-management-iota.vercel.app/users/${id}?role=admin`, {
      method: "PATCH"
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          router.refresh();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "This is now a admin",
            showConfirmButton: false,
            timer: 1500
          });

          // refetch the data
          refetch("https://server-event-management-iota.vercel.app/users");
        }
      })
      .catch(err => console.log(err));
  }

  const handleOrganizer = (id) => {
    console.log(id)
    fetch(`https://server-event-management-iota.vercel.app/users/${id}?role=organizer`, {
      method: "PATCH"
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          router.refresh();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "This is now a organizer",
            showConfirmButton: false,
            timer: 1500
          });

          // refetch the data
          refetch("https://server-event-management-iota.vercel.app/users")
        }
      })
      .catch(err => console.log(err));
  }

  const handleAttendee = (id) => {
    console.log(id)
    fetch(`https://server-event-management-iota.vercel.app/users/${id}?role=attendee`, {
      method: "PATCH"
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          router.refresh();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "This is now a attendee",
            showConfirmButton: false,
            timer: 1500
          });

          // refetch the data
          refetch("https://server-event-management-iota.vercel.app/users");
        }
      })
      .catch(err => console.log(err));
  }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  }

  // Filter data based on search query
  const filteredData = data.filter(item =>
    item.name?.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="min-h-screen px-3 md:px-12 py-6 dashboard-bg dashboard-color">
      <div className="flex flex-col items-center text-center md:flex-row md:justify-between md:items-center my-5">
        <div className="search-box px-4 py-2 rounded-xl">
          <input type="search" placeholder="Search" className="mr-3 h-10" onChange={handleSearch} />
          <HiOutlineSearch className="text-2xl"></HiOutlineSearch>
        </div>

        <div className="my-6 flex flex-col items-center lg:flex-row lg:my-0">
          <label className="mb-2">Filter: </label>
          <select
            className="drop-down rounded-xl px-4 py-2"
            name="filter"
            onChange={handleFilterChange}
          >
            <option>all</option>
            <option>admin</option>
            <option>organizer</option>
            <option>attendee</option>
          </select>
        </div>

        <div className="flex flex-col items-center lg:flex-row">
          <label className="mb-2">Item per page: </label>
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

      <div className="dashboard-tile rounded-2xl">
        <div className="overflow-x-auto">
          <table className="table w-[170%] lg:w-[100%]">
            {/* head */}
            <thead>
              <tr>
                <th className="id">
                  Id
                </th>
                <th>Name</th>
                <th>Role</th>
                <th>Actions</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {loading ?
                <tr>
                  <td><span className="loading loading-infinity loading-lg"></span></td>
                </tr> :
                (searchQuery ? filteredData : data).map(dt => <tr key={dt._id}>
                  <td className="id">
                    {dt._id}
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={dt.photoUrl} alt={dt.name} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{dt.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{dt.role === "admin" ? <div className="badge badge-accent">{dt.role ? dt.role : "N/A"}</div> : dt.role === "organizer" ? <div className="badge badge-primary">{dt.role ? dt.role : "N/A"}</div> : <div className="badge badge-secondary">{dt.role ? dt.role : "N/A"}</div>}</td>
                  <td>
                    <button
                      onClick={() => handleAttendee(dt._id)}
                      className="btn btn-active btn-secondary px-[0.3rem] min-h-[2.2rem] h-0"
                      title="Make Attendee"
                    >
                      <FaUserAlt className="text-2xl"></FaUserAlt>
                    </button>

                    <button
                      onClick={() => handleOrganizer(dt._id)}
                      className="btn btn-active btn-primary px-[0.3rem] min-h-[2.2rem] h-0 mx-2"
                      title="Make Organizer"
                    >
                      <DiGhostSmall className="text-2xl"></DiGhostSmall>
                    </button>

                    <button
                      onClick={() => handleAdmin(dt._id)}
                      className="btn btn-active btn-accent px-[0.3rem] min-h-[2.2rem] h-0 mr-2"
                      title="Make Admin"
                    >
                      <MdGppGood className="text-2xl"></MdGppGood>
                    </button>

                    <Link
                      href={`/dashboard/manage-user/${dt._id}`}
                      className="btn btn-active bg-yellow-300 px-[0.3rem] min-h-[2.2rem] h-0"
                      title="View details"
                    >
                      <TbListDetails className="text-2xl"></TbListDetails>
                    </Link>
                  </td>
                </tr>)}

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
