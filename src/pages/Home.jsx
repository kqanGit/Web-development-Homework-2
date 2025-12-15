import BannerSlider from "@/components/BannerSlider";

import { getMostPopularMovies, getMovies } from "@/services/api";

import { useFetch } from "@/hooks/useFetch";

const Home = () => {
  const {
    data: movies,
    loading,
    error,
  } = useFetch(() => getMostPopularMovies(1, 5));
  console.log(movies, loading, error);

  return (
    <div className="flex flex-col gap-4 justify-center h-full">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error loading movies</div>
      ) : (
        <BannerSlider movies={movies} type="hot" />
      )}
      <div className="font-bold text-xl">Most Popular</div>
      <div className="font-bold text-xl">Top Rating</div>
    </div>
  );
};

export default Home;
 