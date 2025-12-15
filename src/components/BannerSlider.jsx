import { useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import { getMostPopularMovies } from "@/services/api";
import MovieCard from "./MovieCard";

const BannerSlider = ({ movies, type = "hot" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {
    data,
    loading,
    error,
  } = useFetch(() => getMostPopularMovies(1, 5));

  movies = data;

  const handleOnPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    );
  };

  const handleOnNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === movies.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error loading movies</div>
      ) : (
        <div className="flex items-center justify-between">
          {/* Prev */}
          <button
            onClick={handleOnPrev}
            className="text-4xl font-bold dark:text-white"
          >
            {"<"}
          </button>

      {/* Slider */}
      <div className="relative mx-auto w-[300px] h-[450px]">
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className={`
              absolute inset-0
              transition-opacity duration-500 ease-in-out
              ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}
            `}
          >
            <MovieCard movie={movie} type={type} />
          </div>
        ))}

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {movies.map((_, index) => (
            <button
              key={`banner-slider-indicator-${index}`}
              onClick={() => setCurrentIndex(index)}
              className={`
                h-1 rounded-full transition-all
                ${index === currentIndex ? "w-6 bg-white" : "w-3 bg-white/40"}
              `}
            />
          ))}
        </div>
      </div>

          {/* Next */}
          <button
            onClick={handleOnNext}
            className="text-4xl font-bold dark:text-white"
          >
            {">"}
          </button>
        </div>
      )}
    </>
  );
};

export default BannerSlider;
