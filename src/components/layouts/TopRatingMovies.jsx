import { useFetch } from "@/hooks/useFetch";
import { getTopRatedMovies } from "@/services/api";
import MovieSlider from "../MovieSlider";

const TopRatingMovies = () => {
  const {
    data: movies,
    loading,
    error,
  } = useFetch(async () => {
    const [p1, p2] = await Promise.all([
      getTopRatedMovies(1, 12),
      getTopRatedMovies(2, 3),
    ]);

    console.log(p1.data, p2.data);
    return [...p1.data, ...p2.data];
  });

  console.log(movies);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error loading movies</div>
      ) : (
        <MovieSlider title="Top Rating" movies={movies} />
      )}
    </>
  );
};

export default TopRatingMovies;
