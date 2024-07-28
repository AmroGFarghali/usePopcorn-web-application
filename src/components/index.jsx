import Navbar from "./navbar";
import PopcornMain from "./popcorn-lists";
import { useState } from "react";
import Logo from "./navbar/logo";
import SearchBar from "./navbar/search-bar";
import Results from "./navbar/results";

import MovieList from "./popcorn-lists/movie-box/movie-list";
import Summary from "./popcorn-lists/watched-movie-box/summary";
import WatchedMovieList from "./popcorn-lists/watched-movie-box/watched-movie-list";
import GeneralMovieBox from "./popcorn-lists/general-movie-box";

import Loader from "../generics/loader";
import ErrorMessage from "../generics/errorMessage";
import MovieDetails from "./movie-details";
import { useMovies } from "../hooks/useMovies";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { useKey } from "../hooks/useKey";
const PopcornPage = () => {
  const [watchedMovies, setWatchedMovies] = useLocalStorageState("watched");
  const [query, setQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { movies, loading, error } = useMovies(query);
  //handeling escape click when movie is selected
  useKey(() => setSelectedMovie(), "escape");
  return (
    <>
      <Navbar>
        <Logo />
        <SearchBar query={query} setQuery={setQuery} />
        <Results movies={movies} />
      </Navbar>
      <PopcornMain>
        <GeneralMovieBox>
          {loading && <Loader />}

          {!query && <p className="loader">Search for a movie</p>}
          {query && error && <ErrorMessage message={error} />}
          {!loading && !error && (
            <MovieList setSelectedMovie={setSelectedMovie} movies={movies} />
          )}
        </GeneralMovieBox>

        {selectedMovie ? (
          <MovieDetails
            setSelectedMovie={setSelectedMovie}
            selectedMovie={selectedMovie}
            setWatchedMovies={setWatchedMovies}
            watchedMovies={watchedMovies}
          />
        ) : (
          <>
            <GeneralMovieBox>
              <Summary watchedMovies={watchedMovies} />
              <WatchedMovieList
                setWatchedMovies={setWatchedMovies}
                watchedMovies={watchedMovies}
              />
              {/* <StarRating maxRating={5} size={48} /> */}
            </GeneralMovieBox>
          </>
        )}
      </PopcornMain>
    </>
  );
};
export default PopcornPage;
