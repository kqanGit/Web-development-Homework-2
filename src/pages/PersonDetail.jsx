import { useFetch } from "@/hooks/useFetch";
import { getPersonDetail } from "@/services/api";
import { useParams } from "react-router-dom";
import MovieSlider from "@/components/MovieSlider";

const PersonDetail = () => {
  const { id } = useParams();
  const {
    data: person,
    loading,
    error,
  } = useFetch(() => getPersonDetail(id), [id]);

  if (loading || !person) {
    return <div className="text-center py-20">Loading...</div>;
  }

  console.log(person);

  if (error) {
    return (
      <div className="text-center py-20 text-red-500">
        Error loading person details
      </div>
    );
  }

  const { name, image, role, summary, awards, birth_date, death_date, height, known_for } =
    person;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-shrink-0">
            <div className="w-full md:w-80 aspect-[2/3] rounded-lg overflow-hidden shadow-2xl">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
              {name || "Unknown"}
            </h1>

            <div className="mb-4">
              <span className="text-lg font-semibold dark:text-white">
                Role:{" "}
              </span>
              <span className="text-gray-700 dark:text-gray-300">
                {role || "-"}
              </span>
            </div>

            <div className="mb-4">
              <span className="text-lg font-semibold dark:text-white">
                Birth Date:{" "}
              </span>
              <span className="text-gray-700 dark:text-gray-300">
                {birth_date || "-"}
              </span>
            </div>

            <div className="mb-4">
              <span className="text-lg font-semibold dark:text-white">
                Death Date:{" "}
              </span>
              <span className="text-gray-700 dark:text-gray-300">
                {death_date || "-"}
              </span>
            </div>

            <div className="mb-4">
              <span className="text-lg font-semibold dark:text-white">
                Height:{" "}
              </span>
              <span className="text-gray-700 dark:text-gray-300">
                {height || "-"}
              </span>
            </div>

            <div className="mb-4">
              <span className="text-lg font-semibold dark:text-white">
                Awards:{" "}
              </span>
              <span className="text-gray-700 dark:text-gray-300">
                {awards || "-"}
              </span>
            </div>

            <div className="mt-6">
              <h3 className="text-2xl font-semibold mb-3 dark:text-white">
                Biography
              </h3>
              {summary ? (
                <div
                  className="text-gray-700 dark:text-gray-300 leading-relaxed [&>p]:mb-3"
                  dangerouslySetInnerHTML={{ __html: summary }}
                />
              ) : (
                <p className="text-gray-700 dark:text-gray-300">-</p>
              )}
            </div>
          </div>
        </div>

        {/* Known For */}
        {known_for && known_for.length > 0 && (
          <div className="mt-12">
            <MovieSlider 
              title="Known For" 
              movies={known_for} 
              type="list-view"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonDetail;
