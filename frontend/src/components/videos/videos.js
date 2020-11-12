import React from "react";
import "./videos.css";
import Video from "../video/video";

const Videos = () => {
  return (
      <div className="videos container px-2">
        <h2 className="font-weight-light text-center text-lg-left mt-4 mb-5">
          Videos
        </h2>

        <div className="videos-container text-center">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
            <Video videoId={"rP01vTovcZk"} title={"test_title"} />
          ))}
        </div>
      </div>
  );
};

export default Videos;
