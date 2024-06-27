import Navbar from "./navbar";
import PopcornMain from "./popcorn-lists";
import { tempMovieData, tempWatchedData } from "../data/mockMovieData";
import { useState } from "react";
import Logo from "./navbar/logo";
import SearchBar from "./navbar/search-bar";
import Results from "./navbar/results";

import MovieList from "./popcorn-lists/movie-box/movie-list";
import Summary from "./popcorn-lists/watched-movie-box/summary";
import WatchedMovieList from "./popcorn-lists/watched-movie-box/watched-movie-list";
import GeneralMovieBox from "./popcorn-lists/general-movie-box";
import StarRating from "./popcorn-lists/star-rating";

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
      <PopcornMain>
        <GeneralMovieBox>
          <MovieList movies={movies} />
        </GeneralMovieBox>
        <GeneralMovieBox>
          <Summary watchedMovies={watchedMovies} />
          <WatchedMovieList watchedMovies={watchedMovies} />
          <StarRating maxRating={5} size={48} />
        </GeneralMovieBox>
      </PopcornMain>
    </>
  );
};
export default PopcornPage;
