import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie.nowPlayingMovies);
  const popularMovies = useSelector((store) => store.movie.popularMovies);
  const upcomingmovies = useSelector((store) => store.movie.upcomingMovies);

  console.log("UPCOMING!!!::", upcomingmovies);
  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-20 ">
        <MovieList title={"Now Playing Movies"} movie={movies}></MovieList>
      </div>
      <MovieList title={"Upcoming Movies"} movie={upcomingmovies}></MovieList>
      <MovieList title={"Popular"} movie={popularMovies}></MovieList>
      <MovieList title={"Trending"} movie={movies}></MovieList>
    </div>
  );

  {
    /*
      Moview List - popular
        -- Horizontal MovieCard
      Moview List - Now Playing
      Moview List - Top Rated
      Moview List - Upcoming

    */
  }
};

export default SecondaryContainer;
