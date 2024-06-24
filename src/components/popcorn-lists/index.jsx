import MovieBox from "./movie-box";
import WatchedMovieBox from "./watched-movie-box";

const PopcornMain = ({ movies, watchedMovies }) => {
  return (
    <main className="main">
      <MovieBox movies={movies} />
      <WatchedMovieBox movies={watchedMovies} />
    </main>
  );
};

export default PopcornMain;
