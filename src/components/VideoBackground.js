import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  useEffect(() => {
    getMovieVideos();
  }, []);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/1029575/videos",
      API_OPTIONS
    );
    const json = await data.json();
    const videoType =
      // If trailer is not there take the clip else take the first thing in the result.
      json.results.find((video) => video.type === "Trailer") ||
      json.results.find((video) => video.type === "Clip");

    const trailerOrClip = videoType ? videoType : json.results[0];
  };
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ns8weNznn1Y?si=JT7VOvNGWNlywo-f"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
