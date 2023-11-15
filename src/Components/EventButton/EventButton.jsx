"use client";

import { useRouter } from "next/navigation";
import { MdDeleteSweep, MdGppGood } from "react-icons/md";
import "./EventButton.css";

const EventButton = ({ data }) => {
  const router = useRouter();

  const handleApprove = (id) => {
    console.log(id);
    fetch(
      `https://server-event-management-iota.vercel.app/update-event/${id}?status=approved`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          router.refresh();
        }
      })
      .catch((err) => console.log(err));
  };

  const handleDeny = (id) => {
    console.log(id);
    fetch(
      `https://server-event-management-iota.vercel.app/update-event/${id}?status=denied`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          router.refresh();
        }
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex items-center py-5 button-group">
      <button
        onClick={() => handleApprove(data._id)}
        disabled={
          data.eventStatus === "approved" || data.eventStatus === "denied"
            ? true
            : false
        }
        className="btn btn-active btn-accent px-[0.3rem] min-h-[2.2rem] h-0"
        title="Approve"
      >
        <MdGppGood className="text-2xl"></MdGppGood> Approve
      </button>

      <button
        onClick={() => handleDeny(data._id)}
        disabled={
          data.eventStatus === "approved" || data.eventStatus === "denied"
            ? true
            : false
        }
        className="btn btn-active btn-secondary px-[0.3rem] min-h-[2.2rem] h-0 mx-2"
        title="Deny"
      >
        <MdDeleteSweep className="text-2xl"></MdDeleteSweep> Deny
      </button>
    </div>
  );
};

export default EventButton;
