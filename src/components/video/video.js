import React from "react";
import "./video.css";

const Video = ({ video }) => {

  return (
    <div className="video-container mx-auto">
      <iframe
        src={`https://www.youtube.com/embed/${video.videoId}?&color=white&rel=0&mute=0`}
        title={video.titulo}
        allowFullScreen={true}
        frameBorder="0"
        className="p-1 p-sm-2"
      ></iframe>
    </div>
  );
};

export default Video;
