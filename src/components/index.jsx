import Navbar from "./navbar";
import PopcornMain from "./popcorn-lists";
import { tempMovieData, tempWatchedData } from "../data/mockMovieData";
import { useState } from "react";
import Logo from "./navbar/logo";
import SearchBar from "./navbar/search-bar";
import Results from "./navbar/results";

const PopcornPage = () => {
  const [movies, setMovies] = useState(tempMovieData);
  const [watchedMovies, setWatchedMovies] = useState(tempWatchedData);
  return (
    <>
      <Navbar>
        <Logo />
        <SearchBar />
        <Results movies={movies} />
      </Navbar>
      <PopcornMain movies={movies} watchedMovies={watchedMovies} />;
    </>
  );
};
export default PopcornPage;
