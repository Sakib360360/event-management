"use client";

import { DiGhostSmall } from "react-icons/di";
import { FaUserAlt } from "react-icons/fa";
import { MdGppGood } from "react-icons/md";
import Swal from "sweetalert2";

const UserButton = ({ data }) => {
  const handleAdmin = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/users/${id}?role=admin`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "This is now a admin",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const handleOrganizer = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/users/${id}?role=organizer`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "This is now a organizer",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const handleAttendee = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/users/${id}?role=attendee`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "This is now a attendee",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex flex-col items-center py-5 md:flex-row">
      <button
        onClick={() => handleAttendee(data._id)}
        className="bg-red-500 text-lg flex items-center p-1 rounded-md"
      >
        <FaUserAlt className="mr-1"></FaUserAlt> Make Attendee
      </button>

      <button
        onClick={() => handleOrganizer(data._id)}
        className="bg-blue-500 text-lg flex my-4 md:mx-4 items-center p-1 rounded-md"
      >
        <DiGhostSmall className="mr-1"></DiGhostSmall> Make Organizer
      </button>

      <button
        onClick={() => handleAdmin(data._id)}
        className="bg-green-500 text-lg flex items-center p-1 rounded-md"
      >
        <MdGppGood className="mr-1"></MdGppGood> Make Admin
      </button>
    </div>
  );
};

export default UserButton;
