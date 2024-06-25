import WatchedMovie from "./watched-movie";

const WatchedMovieList = ({ watchedMovies }) => {
  return (
    <>
      <ul className="list">
        {watchedMovies?.map((movie) => (
          <WatchedMovie movie={movie} />
        ))}
      </ul>
    </>
  );
};
export default WatchedMovieList;
