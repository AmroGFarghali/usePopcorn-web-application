import Summary from "../summary";
import WatchedMovie from "./watched-movie";

const WatchedMovieList = ({ movies }) => {
  return (
    <>
      <Summary watchedMovies={movies} />
      <ul className="list">
        {movies?.map((movie) => (
          <WatchedMovie movie={movie} />
        ))}
      </ul>
    </>
  );
};
export default WatchedMovieList;
