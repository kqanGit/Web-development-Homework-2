import MovieCard from "@/components/MovieCard";
const MovieGrid = ({ movies }) => {
  return (
    <div className="grid grid-cols-3 gap-4"> 
        {movies.map((movie) => (
            <MovieCard key={`${movie.id}grid-view`} movie={movie} type="grid-view" />
        ))}
    </div>
  );
}

export default MovieGrid;