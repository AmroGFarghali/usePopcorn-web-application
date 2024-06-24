import { useState } from "react";
import WatchedMovieList from "./watched-movie-list";

const WatchedMovieBox = ({ movies }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && <WatchedMovieList movies={movies} />}
    </div>
  );
};
export default WatchedMovieBox;
