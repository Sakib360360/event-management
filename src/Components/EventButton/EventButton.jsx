"use client";

import { useRouter } from "next/navigation";
import { MdDeleteSweep, MdGppGood } from "react-icons/md";

const EventButton = ({ data }) => {
  const router = useRouter();

  const handleApprove = (id) => {
    console.log(id);
    fetch(`https://server-event-management-iota.vercel.app/update-event/${id}?status=approved`, {
      method: "PATCH",
    })
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
    fetch(`https://server-event-management-iota.vercel.app/update-event/${id}?status=denied`, {
      method: "PATCH",
    })
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
    <div className="flex items-center py-5">
      <button
        onClick={() => handleApprove(data._id)}
        className="bg-green-500 text-lg flex items-center p-1 rounded-md mr-4"
        disabled={
          data.eventStatus === "approved" || data.eventStatus === "denied"
            ? true
            : false
        }
      >
        <MdGppGood></MdGppGood>Approve
      </button>

      <button
        onClick={() => handleDeny(data._id)}
        className="bg-red-500 text-lg flex items-center p-1 rounded-md"
        disabled={
          data.eventStatus === "approved" || data.eventStatus === "denied"
            ? true
            : false
        }
      >
        <MdDeleteSweep></MdDeleteSweep>Deny
      </button>
    </div>
  );
};

export default EventButton;
