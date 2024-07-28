import WatchedMovie from "./watched-movie";

const WatchedMovieList = ({ watchedMovies, setWatchedMovies }) => {
  return (
    <>
      <ul className="list">
        {watchedMovies?.map((movie) => (
          <WatchedMovie
            setWatchedMovies={setWatchedMovies}
            key={movie.imdbId}
            movie={movie}
          />
        ))}
      </ul>
    </>
  );
};
export default WatchedMovieList;
