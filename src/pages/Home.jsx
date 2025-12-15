import BannerSlider from "@/components/BannerSlider";
import MostPopularMovies from "@/components/layouts/MostPopularMovies";
import TopRatingMovies from "@/components/layouts/TopRatingMovies";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 justify-center h-full">
      <BannerSlider />
      <MostPopularMovies />
      <TopRatingMovies />
    </div>
  );
};

export default Home;
