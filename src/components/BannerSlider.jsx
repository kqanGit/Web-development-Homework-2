import { useState } from "react";
import MovieCard from "./MovieCard";

const BannerSlider = ({ movies, type = "home" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex items-center justify-between gap-4 overflow-hidden">
      <button className="text-4xl font-bold dark:text-white">{"<"}</button>
      <MovieCard movie={movies[currentIndex]} type={type} />
      <button className="text-4xl font-bold dark:text-white">{">"}</button>
    </div>
  );
};

export default BannerSlider;
