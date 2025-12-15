
import { useSearchParams } from 'react-router-dom';
import MovieCard from "@/components/MovieCard";
import { useFetch } from "@/hooks/useFetch";
import { searchMovies } from "@/services/api";

const SearchResult = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('query') || '';
    
    console.log('Search query:', query);

    return (
        <>
        </>
    )
};

export default SearchResult;