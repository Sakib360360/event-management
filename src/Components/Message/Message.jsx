"use client";

import SliceText from "@/utils/SliceText";
import Link from "next/link";
import ThreeDot from "../ThreeDot/ThreeDot";
import "./Message.css";

const Message = ({ message }) => {
  return (
    <div className="message-container">
      <Link href={`/dashboard/messages/${message._id}`} className="flex">
        <p className={`mr-4 ${message.status === "seen" ? "regular" : "bold"}`}>
          {message.name}
        </p>
        <p className={message.status === "seen" ? "regular" : "bold"}>
          {SliceText(message.message, 120)}
        </p>
      </Link>

      <ThreeDot id={message._id}></ThreeDot>
    </div>
  );
};

export default Message;
