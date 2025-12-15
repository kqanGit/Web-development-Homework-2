import { useSearchParams } from "react-router-dom";
import { useFetch } from "@/hooks/useFetch";
import { searchMoviesByQuery } from "@/services/api";
import MovieGrid from "@/components/MovieGrid";

const SearchResult = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const page = parseInt(searchParams.get("page")) || 1; 

  const {
    data: movies,
    pagination,
    loading,
    error,
  } = useFetch(() => searchMoviesByQuery(query, page), [query, page]);

  const handlePageChange = (newPage) => {
    setSearchParams({ query, page: newPage }); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(movies);
  console.log(pagination);

  return (
    <div className="w-full mx-auto px-4 py-8">
      {error ? (
        <div>Error loading search results</div>
      ) : (
        <MovieGrid 
          movies={movies} 
          paginationData={pagination} 
          onPageChange={handlePageChange}   
        />
      )}
    </div>
  );
};

export default SearchResult;