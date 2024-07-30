import { useEffect, useState } from "react";

export const useMovies = (query) => {
  const controller = new AbortController();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const KEY = "932c62f1";
  const fetchMovies = async () => {
    try {
      if (!query) {
        setError("");
        setMovies([]);
        return;
      }

      setLoading(true);
      setError("");
      const request = await fetch(
        `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
        { signal: controller.signal }
      );

      if (!request.ok)
        throw new Error("Somethign went wrong with fetching movies");

      const data = await request.json();

      if (data.Response === "False") throw new Error("Movie not found");

      setMovies(data.Search);
      setError("");
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
    return () => controller.abort();
  }, [query]);

  return {
    movies,
    loading,
    error,
  };
};
