import { useState } from "react";
import MovieCard from "./MovieCard";

const MovieSlider = ({ title, movies, type = "list-view" }) => {
    const ITEMS_PER_PAGE = 3;

  const limitedMovies = movies.slice(0, 15);

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + ITEMS_PER_PAGE < limitedMovies.length) {
      setStartIndex(startIndex + ITEMS_PER_PAGE);
    } else {
      setStartIndex(0);
    }
  };

  const handlePrev = () => {
    if (startIndex - ITEMS_PER_PAGE >= 0) {
      setStartIndex(startIndex - ITEMS_PER_PAGE);
    } else {
      const remainder = limitedMovies.length % ITEMS_PER_PAGE;
      const newIndex =
        remainder === 0
          ? limitedMovies.length - ITEMS_PER_PAGE
          : limitedMovies.length - remainder;
      setStartIndex(newIndex);
    }
  };

  const visibleMovies = limitedMovies.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const currentPage = Math.floor(startIndex / ITEMS_PER_PAGE) + 1;
  const totalPages = Math.ceil(limitedMovies.length / ITEMS_PER_PAGE);

  return (
    <div className="my-10 relative">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>

        {/* Indicator */}
        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={`${title}-indicator-${index}`}
              onClick={() => setStartIndex(index * ITEMS_PER_PAGE)}
              className={`
                h-1 rounded-full transition-all duration-300
                ${index === currentPage - 1 ? "w-6 bg-gray-400" : "w-3 bg-gray-200"}
              `}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button onClick={handlePrev} className="text-3xl font-bold">
          {"<"}
        </button>
        <div className="grid grid-cols-3 gap-2 overflow-visible">
          {limitedMovies.map((movie, index) => {
            const isVisible =
              index >= startIndex && index < startIndex + ITEMS_PER_PAGE;

            return (
              <div
                key={`${title} - ${index}`}
                className={`transform transition-all duration-300 ${
                  isVisible
                    ? "opacity-100 scale-100 hover:z-50"
                    : "opacity-0 scale-95 absolute pointer-events-none"
                }`}
              >
                <MovieCard movie={movie} type={type} />
              </div>
            );
          })}
        </div>
        <button onClick={handleNext} className="text-3xl font-bold">
          {">"}
        </button>
      </div>
    </div>
  );
};

export default MovieSlider;
