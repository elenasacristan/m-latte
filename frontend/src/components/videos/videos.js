import React, { useState, useEffect } from "react";
import "./videos.css";
import Video from "../video/video";
import Spinner from "../Spinner/Spinner";

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("/api/galeria/Video/")
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
      });
  }, []);

  if (videos.length < 1) {
    return <Spinner />;
  } else {
    return (
      <div className="videos container px-2 pb-5">
        <h2 className="main-title title text-center text-lg-left mt-4 mb-5">
          Videos
        </h2>

        <div className="videos-container text-center">
          {videos.map((video) => (
            <Video key={video.id} video={video} />
          ))}
        </div>
      </div>
    );
  }
};

export default Videos;
