import { useFetch } from "@/hooks/useFetch";
import { getMostPopularMovies } from "@/services/api";
import MovieSlider from "../MovieSlider";

const MostPopularMovies = () => {
  const {
    data: movies,
    loading,
    error,
  } = useFetch(async () => {
    const [p1, p2] = await Promise.all([
      getMostPopularMovies(1, 12),
      getMostPopularMovies(2, 3),
    ]);

    console.log(p1.data, p2.data);
    return [...p1.data, ...p2.data];
  });



  return <>Most Popular</>;
};

export default MostPopularMovies;
