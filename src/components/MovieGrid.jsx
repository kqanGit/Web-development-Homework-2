import MovieCard from "@/components/MovieCard";
import AppPagination from "@/components/AppPagination";

const MovieGrid = ({ movies, paginationData, onPageChange }) => {
  const currentPage = paginationData?.current_page || 1;
  const totalPages = paginationData?.total_pages || 1;

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {movies.map((movie) => (
          <MovieCard
            key={`${movie.id}grid-view`}
            movie={movie}
            type="grid-view"
          />
        ))}
      </div>
      <AppPagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    </div>
  );
};

export default MovieGrid;
