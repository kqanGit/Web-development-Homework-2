import { Link } from "react-router-dom";

const MovieCard = ({ movie, type = "home" }) => {
  const { id, title, year, image, genres, rate } = movie;

  if (type === "hot") {
    return (
      <Link
        to={`/movie/${movie.id}`}
        className="block relative group rounded-lg overflow-hidden shadow-lg cursor-pointer"
      >
        <div className="aspect-[2/3] max-w-xs relative">
          <img src={image} alt={title} className="w-full h-full object-cover transition-opacity duration-500" />
          <div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4">
              <h3 className="text-white font-bold text-lg leading-tight mb-1">
                {title}
              </h3>
              <div className="flex justify-between items-center text-gray-300 text-sm">
                <span>{`${year} - (${rate})`}</span>
              </div>
              <div>
                <span className="text-gray-300 text-sm">{genres.join(", ")}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
  if (type === "list-view") {
    return (
      <Link
        to={`/movie/${movie.id}`}
        className="block relative group rounded-lg overflow-hidden shadow-lg cursor-pointer"
      >
        <div className="aspect-[2/3] overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <h3 className="text-white font-bold text-lg leading-tight mb-1">
              {movie.title}
            </h3>
            <div className="flex justify-between items-center text-gray-300 text-sm">
              <span>{releaseYear}</span>
              <span className="flex items-center text-yellow-400">
                ★ {movie.vote_average?.toFixed(1)}
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/movie/${movie.id}`}
      className="block bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
    >
      <div className="relative aspect-[2/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
          {movie.vote_average?.toFixed(1)}
        </div>
      </div>

      <div className="p-3">
        <h3
          className="font-bold text-sm text-gray-900 dark:text-white line-clamp-2 min-h-[40px]"
          title={movie.title}
        >
          {movie.title}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
          Năm: {releaseYear}
        </p>
      </div>
    </Link>
  );
};

export default MovieCard;
