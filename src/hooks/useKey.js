import { useEffect } from "react";
export const useKey = (setSelectedMovie, key) => {
  useEffect(() => {
    document.addEventListener("keydown", function (e) {
      if (e.code.toLowerCase() === key) setSelectedMovie(null);
    });

    return () =>
      document.removeEventListener("keydown", function (e) {
        if (e.code.toLowerCase() === key) setSelectedMovie(null);
      });
  });
};
