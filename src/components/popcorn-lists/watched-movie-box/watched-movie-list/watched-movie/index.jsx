const WatchedMovie = ({ movie, setWatchedMovies }) => {
  const handleDeleteWatchedMovie = (id) => {
    setWatchedMovies((currWatchedMovies) =>
      currWatchedMovies.filter((currMovie) => currMovie.imdbId !== id)
    );
  };
  return (
    <li key={movie.imdbId}>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime}</span>
        </p>
        <button
          onClick={() => handleDeleteWatchedMovie(movie.imdbId)}
          className="btn-delete"
        ></button>
      </div>
    </li>
  );
};
export default WatchedMovie;
