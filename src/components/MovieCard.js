import React from "react";
import { MOVIE_CARD_IMAGE } from "../utils/constants";

const MovieCard = ({ movieCardData }) => {
  return (
    <div className="shadow-md mx-1">
      <img
        className="max-w-52 hover:scale-105 ease-in-out duration-300"
        src={MOVIE_CARD_IMAGE + movieCardData.poster_path}
        alt="Card-Logo"
      ></img>
    </div>
  );
};

export default MovieCard;
