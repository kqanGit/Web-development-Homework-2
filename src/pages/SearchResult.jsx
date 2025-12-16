import { useSearchParams } from "react-router-dom";
import { useFetch } from "@/hooks/useFetch";
import { 
  searchMoviesByQuery, 
  searchMoviesByTitle, 
  getMoviesByPerson, 
  getMoviesByGenre 
} from "@/services/api";
import MovieGrid from "@/components/MovieGrid";

const SearchResult = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Get all possible search params
  const query = searchParams.get("query") || "";
  const title = searchParams.get("title") || "";
  const person = searchParams.get("person") || "";
  const genre = searchParams.get("genre") || "";
  const page = parseInt(searchParams.get("page")) || 1;

  // Determine search type and keyword
  let searchType = "query";
  let keyword = query;
  
  if (title) {
    searchType = "title";
    keyword = title;
  } else if (person) {
    searchType = "person";
    keyword = person;
  } else if (genre) {
    searchType = "genre";
    keyword = genre;
  }

  // Select appropriate API function based on search type
  const getSearchFunction = () => {
    switch (searchType) {
      case "title":
        return () => searchMoviesByTitle(keyword, page);
      case "person":
        return () => getMoviesByPerson(keyword, page);
      case "genre":
        return () => getMoviesByGenre(keyword, page);
      default:
        return () => searchMoviesByQuery(keyword, page);
    }
  };

  const {
    data: movies,
    pagination,
    loading,
    error,
  } = useFetch(getSearchFunction(), [searchType, keyword, page]);

  const handlePageChange = (newPage) => {
    const params = { page: newPage };
    
    // Preserve the search type parameter
    if (title) params.title = title;
    else if (person) params.person = person;
    else if (genre) params.genre = genre;
    else params.query = query;
    
    setSearchParams(params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(movies);
  console.log(pagination);

  return (
    <div className="w-full mx-auto px-4 py-8">
      {/* Search Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Search Results
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {searchType === "query" && `Searching for: "${keyword}"`}
          {searchType === "title" && `Movies with title: "${keyword}"`}
          {searchType === "person" && `Movies with celebrity: "${keyword}"`}
          {searchType === "genre" && `Movies in genre: "${keyword}"`}
        </p>
      </div>

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