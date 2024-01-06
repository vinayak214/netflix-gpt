import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMovieVideos();
  }, []);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS
    );
    const json = await data.json();
    const videoType =
      // If trailer is not there take the clip else take the first thing in the result.
      json.results.find((video) => video.type === "Trailer") ||
      json.results.find((video) => video.type === "Clip");

    const trailerOrClip = videoType ? videoType : json.results[0];

    dispatch(addTrailerVideo(trailerOrClip));
  };
};

export default useMovieTrailer;
