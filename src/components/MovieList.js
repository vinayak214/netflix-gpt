import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movie }) => {
  return (
    <div className="px-6">
      <h1 className="font-bold md:text-3xl text-2xl text-white py-4">
        {title}
      </h1>
      <div className="flex overflow-x-scroll">
        {movie?.map((movies) => (
          <MovieCard movieCardData={movies} key={movies.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
