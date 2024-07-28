import { useState } from "react";
import Movie from "./movie";

const MovieList = ({ movies, setSelectedMovie }) => {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie setSelectedMovie={setSelectedMovie} movie={movie} />
      ))}
    </ul>
  );
};
export default MovieList;
