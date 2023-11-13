"use client";

import deleteMessage from "@/utils/deleteMessage";
import markAsSeen from "@/utils/markAsSeen";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./ThreeDot.css";

const ThreeDot = ({ id }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();

  const handleSeen = async (id) => {
    const seen = await markAsSeen(id);
    console.log(seen);
    if (seen.modifiedCount > 0) {
      router.refresh();
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("are you sure?");
    if (confirm) {
      const dlt = await deleteMessage(id);

      if (dlt.deletedCount > 0) {
        router.refresh();
      }
    }
  };

  return (
    <div className="three-dot">
      <BsThreeDotsVertical
        className="dots"
        onClick={() => setShowDropdown(!showDropdown)}
      ></BsThreeDotsVertical>

      <div
        className={`flex flex-col btn-group ${showDropdown ? "" : "d-none"}`}
      >
        <button className="msg-btn" onClick={() => handleSeen(id)}>
          Mark as seen
        </button>
        <button className="msg-btn" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ThreeDot;
