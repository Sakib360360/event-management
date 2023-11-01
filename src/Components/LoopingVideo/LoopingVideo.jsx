"use client";
import "./LoopingVideo.css";

const LoopingVideo = ({ path }) => {
  return (
    <div className="video-container my-5">
      <video className="video" autoPlay muted loop>
        <source src={path} type="video/mp4" />
        {/* Add additional source elements for different video formats if needed */}
      </video>
    </div>
  );
};

export default LoopingVideo;
