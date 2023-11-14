"use client";

import { DiGhostSmall } from "react-icons/di";
import { FaUserAlt } from "react-icons/fa";
import { MdGppGood } from "react-icons/md";
import Swal from "sweetalert2";

const UserButton = ({ data }) => {
  const handleAdmin = (id) => {
    console.log(id);
    fetch(
      `https://server-event-management-iota.vercel.app/users/${id}?role=admin`,
      {
        method: "PATCH",
      }
    )
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
    fetch(
      `https://server-event-management-iota.vercel.app/users/${id}?role=organizer`,
      {
        method: "PATCH",
      }
    )
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
    fetch(
      `https://server-event-management-iota.vercel.app/users/${id}?role=attendee`,
      {
        method: "PATCH",
      }
    )
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
        className="btn btn-active btn-secondary px-[0.3rem] min-h-[2.2rem] h-0 text-[12px]"
        title="Make Attendee"
      >
        <FaUserAlt className="text-lg"></FaUserAlt>Make Attendee
      </button>

      <button
        onClick={() => handleOrganizer(data._id)}
        className="btn btn-active btn-primary px-[0.3rem] min-h-[2.2rem] h-0 mx-2 text-[12px]"
        title="Make Organizer"
      >
        <DiGhostSmall className="text-lg"></DiGhostSmall>Make Organizer
      </button>

      <button
        onClick={() => handleAdmin(data._id)}
        className="btn btn-active btn-accent px-[0.3rem] min-h-[2.2rem] h-0 mr-2 text-[12px]"
        title="Make Admin"
      >
        <MdGppGood className="text-lg"></MdGppGood>Make Admin
      </button>
    </div>
  );
};

export default UserButton;
