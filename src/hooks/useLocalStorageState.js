import { useState, useEffect } from "react";
export const useLocalStorageState = (key) => {
  const [watchedMovies, setWatchedMovies] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return JSON.parse(storedValue) || [];
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(watchedMovies));
  }, [watchedMovies, key]);

  return [watchedMovies, setWatchedMovies];
};
