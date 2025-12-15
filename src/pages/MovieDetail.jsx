import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "../services/api";
import { useFetch } from "../hooks/useFetch";
import MovieSlider from "../components/MovieSlider";

const MovieDetail = () => {
  const { id } = useParams();

  const { data, loading, error } = useFetch(() => getMovieDetail(id), [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (loading || !data) {
    return <div className="text-center py-20 text-white">Loading...</div>;
  }

  console.log(data);

  const { title, year, image, genres, ratings, short_description, directors } =
    data;

  return (
    <div className="h-screen">
      <div className="px-10 h-full bg-blue-100 rounded dark:bg-gray-800 flex items-center pb-0 gap-8">
        <div className="hidden md:block w-64 h-96 flex-shrink-0 rounded-lg overflow-hidden shadow-2xl border-4 border-white/20">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        {/* Thông tin phim */}
        <div className="text-black max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">{title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-gray-300 mb-4">
            <span className="bg-yellow-500 text-black px-2 py-1 rounded font-bold dark:text-white">
              IMDB {`${ratings.imDb || "N/A"} ★`}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {genres.map((genre) => (
              <span
                key={genre}
                className="flex justify-center items-center border border-gray-700 text-black px-3 py-1 rounded-full text-sm dark:text-white dark:border-gray-400"
              >
                {genre}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-semibold mb-2 dark:text-white">Description</h3>
          <p className="text-black leading-relaxed mb-6 line-clamp-4 md:line-clamp-none dark:text-white">
            {short_description || "No description available."}
          </p>

          {directors && (
            <p className="mb-6">
              <span className="font-bold text-black dark:text-white">Director: </span>
              <span className="text-gray-400">
                {directors?.map((d) => d.name).join(", ")}
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
