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
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          <div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4">
              <h3 className="text-white font-bold text-lg leading-tight mb-1">
                {title}
              </h3>
              <div className="flex justify-between items-center text-gray-300 text-sm">
                <span>{`${year} - (${rate})`}</span>
              </div>
              <div>
                <span className="text-gray-300 text-sm">
                  {genres.join(", ")}
                </span>
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
        className="block relative group rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:z-50"
      >
        <div className="w-[350px] h-[200px] relative rounded-lg group-hover:scale-125 duration-300">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover relative transition-transform duration-300"
          />
          <div className='opacity-0 group-hover:opacity-100 group-hover:bg-black/60 px-2 py-1 text-white'>
            {title} ({year || (rate ? `${rate}★` : '')})
          </div>
        </div>
      </Link>
    );
  }
};

export default MovieCard;
