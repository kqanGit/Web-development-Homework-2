import BannerSlider from "@/components/BannerSlider";
import MostPopularMovies from "@/components/layouts/MostPopularMovies";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 justify-center h-full">
      <BannerSlider/>
      <div className="font-bold text-xl">
        <MostPopularMovies />
      </div>
      <div className="font-bold text-xl">Top Rating</div>
    </div>
  );
};

export default Home;
 