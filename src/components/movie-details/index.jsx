import { useEffect, useRef, useState } from "react";
import StarRating from "../popcorn-lists/star-rating";
import Loader from "../../generics/loader";

const MovieDetails = ({
  selectedMovie,
  setSelectedMovie,
  setWatchedMovies,
  watchedMovies,
}) => {
  const KEY = "932c62f1";

  const [currentMovie, setCurrentMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const countRef = useRef(0);

  useEffect(() => {
    if (userRating) countRef.current++;
  }, [userRating]);

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = currentMovie;

  const fetchMovie = async () => {
    setIsLoading(true);
    const request = await fetch(
      `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedMovie}`
    );

    const data = await request.json();
    console.log(data);
    setCurrentMovie(data);
    setIsLoading(false);
  };
  const isWatched = watchedMovies.some(
    (movie) => movie.imdbId === currentMovie.imdbID
  );

  const currUserRating = watchedMovies.find(
    (movie) => movie.imdbId === currentMovie.imdbID
  )?.userRating;
  useEffect(() => {
    fetchMovie();
  }, [selectedMovie]);

  const handleAddToWatched = () => {
    const newWatchedMovie = {
      imdbId: selectedMovie,
      title,
      year,
      poster,
      runtime,
      imdbRating,
      plot,
      released,
      actors,
      director,
      genre,
      userRating,
      countRatingDecisions: countRef.current,
    };

    // setWatchedMovies((watchedMovies) => {
    //   const movieExists = watchedMovies.some(
    //     (movie) => movie.imdbId === newWatchedMovie.imdbId
    //   );
    //   if (movieExists) {
    //     alert("This movie is already in your watched list.");
    //     return watchedMovies;
    //   } else {
    //     alert("Movie added to your watched list.");
    //     return [...watchedMovies, newWatchedMovie];
    //   }
    // });

    setWatchedMovies((movies) => [...movies, newWatchedMovie]);

    //CLOSES THE MOVIE DETAILS TAB
    setSelectedMovie(null);
    setCurrentMovie(null);
  };

  useEffect(() => {
    document.title = title;
    //Clears the title whjen the component dismounts
    return () => (document.title = "usePopcorn");
  }, [title]);

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button
              className="btn-back"
              onClick={() => setSelectedMovie(null)}
            />

            <img src={poster} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} 🫥 {runtime}
              </p>
              <p>{genre}</p>
              <p>⭐ {imdbRating} IMDB rating</p>
            </div>
          </header>

          <section>
            <div className="rating">
              {isWatched ? (
                <p>
                  You already watched this movie and you rated it{" "}
                  {currUserRating ? currUserRating : "0"} ⭐
                </p>
              ) : (
                <>
                  <StarRating
                    onSetRating={setUserRating}
                    color={"yellow"}
                    size={28}
                    maxRating={10}
                  />

                  <button onClick={handleAddToWatched} className="btn-add">
                    + Add to list
                  </button>
                </>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>

            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
