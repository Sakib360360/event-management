"use client";

import SliceText from "@/utils/SliceText";
import "./Message.css";

const Message = ({ user, message }) => {
  return (
    <div className="message-container">
      <p className="mr-4 bold">{user}</p>
      <p className="bold">{SliceText(message, 120)}</p>
    </div>
  );
};

export default Message;
