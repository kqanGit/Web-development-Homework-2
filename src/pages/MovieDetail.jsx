import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetail } from "../services/api";
import { useFetch } from "../hooks/useFetch";
import MovieSlider from "../components/MovieSlider";

const MovieDetail = () => {
  const { id } = useParams();

  const { data, loading, error } = useFetch(() => getMovieDetail(id), [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (loading || !data) {
    return <div className="text-center py-20 text-white">Loading...</div>;
  }

  console.log(data);

  return (
    <>
    </>
  )
};

export default MovieDetail;
