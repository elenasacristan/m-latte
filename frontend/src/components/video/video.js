import React from "react";
import "./video.css";

const Video = ({ videoId, title }) => {
  return (
    <div className="video-container mx-auto">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?&color=white&rel=0&mute=0`}
        title={title}
        allowFullScreen={true}
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default Video;
