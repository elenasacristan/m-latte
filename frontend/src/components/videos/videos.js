import React, {useState, useEffect} from "react";
import "./videos.css";
import Video from "../video/video";

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/galeria/Video/")
      .then((res) => res.json())
      .then((data) => {
        setVideos(data);
      });
  }, []);

  return (
      <div className="videos container px-2">
        <h2 className="text-center text-lg-left mt-4 mb-5">
          Videos
        </h2>

        <div className="videos-container text-center">
          {videos.map((video) => (
            <Video key={video.id} video={video} />
          ))}
        </div>
      </div>
  );
};

export default Videos;
