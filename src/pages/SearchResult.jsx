
import { useSearchParams } from 'react-router-dom';
import { useFetch } from "@/hooks/useFetch";
import { searchMoviesByQuery } from "@/services/api";
import MovieGrid from '@/components/MovieGrid';
import MovieCard from "@/components/MovieCard";

const SearchResult = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query') || '';
    const {
        data: movies,
        loading,
        error,
    } = useFetch(() => searchMoviesByQuery(query), [query]);


    if (loading) {
        return <div>Loading...</div>;   
    }
      console.log(movies);
    return (
        <>
            {error ? (
                <div>Error loading search results</div>
            ) : (
                <MovieGrid movies={movies} />
            )}
        </>
    )
};

export default SearchResult;