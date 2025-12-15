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

  const { title, year, image, genres, ratings, plot_full, directors, actors } =
    data;

  return (
    <div className="h-full bg-blue-100 dark:bg-gray-900 text-white py-8 px-4 space-y-6">
      <div className="px-10 bg-blue-100 rounded dark:bg-gray-800 flex items-center pb-0 gap-8">
        <div className="hidden md:block w-64 h-96 flex-shrink-0 rounded-lg overflow-hidden shadow-2xl border-4 border-white/20">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        <div className="text-black max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            {title}
          </h1>
          <h2 className="text-2xl mb-4 dark:text-white">{year}</h2>
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
          <h3 className="text-xl font-semibold mb-2 dark:text-white">
            Description
          </h3>
          <div
            className="text-black leading-relaxed mb-6 line-clamp-4 dark:text-white [&>p]:mb-2"
            dangerouslySetInnerHTML={{
              __html: plot_full || "No description available.",
            }}
          />

          {directors && (
            <p className="mb-6">
              <span className="font-bold text-black dark:text-white">
                Director:{" "}
              </span>
              <span className="text-gray-400">
                {directors?.map((d) => d.name).join(", ")}
              </span>
            </p>
          )}
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold m-4 text-black dark:text-white">Actors</h1>
        {actors && (
            <div className="mb-6 grid grid-cols-6">
              {actors.map((actor) => {
                return (
                    <div key={actor.id} className="flex flex-col items-center mr-6 mb-4">
                        <img src={actor.image} alt={actor.name} className="w-32 h-48 object-cover rounded-lg mb-2"/>
                        <span className="font-bold text-black dark:text-white text-center">{actor.name}</span>
                    </div>
                );    
              })}
            </div>
          )}
      </div>
    </div>
  );
};

export default MovieDetail;
