import { useEffect, useState } from "react";
import { getFavoriteMovies, removeFavoriteMovie } from "@/services/api";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const FavoriteMovies = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [removingId, setRemovingId] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const fetchFavorites = async () => {
      try {
        setLoading(true);
        const data = await getFavoriteMovies();
        setMovies(data);
      } catch (err) {
        setError("Failed to load favorite movies");
        console.error("Favorites error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [user, navigate]);

  const handleRemove = async (movieId, e) => {
    e.preventDefault(); // Prevent navigation to movie detail
    
    try {
      setRemovingId(movieId);
      await removeFavoriteMovie(movieId);
      // Remove movie from local state
      setMovies(movies.filter(movie => movie.id !== movieId));
    } catch (err) {
      console.error("Remove favorite error:", err);
      alert("Failed to remove from favorites");
    } finally {
      setRemovingId(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="text-xl text-gray-600 dark:text-gray-400">
          Loading...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="text-xl text-red-600 dark:text-red-400">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Favorite Movies
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {movies.length} {movies.length === 1 ? 'movie' : 'movies'} in your favorites
          </p>
        </div>

        {/* Movies Grid */}
        {movies.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map((movie) => (
              <div key={movie.id} className="relative group">
                <Link
                  to={`/movie/${movie.id}`}
                  className="block"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-[2/3] overflow-hidden">
                      <img
                        src={movie.image_url}
                        alt={movie.full_title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white line-clamp-2">
                        {movie.full_title}
                      </h3>
                    </div>
                  </div>
                </Link>
                {/* Remove Button */}
                <button
                  onClick={(e) => handleRemove(movie.id, e)}
                  disabled={removingId === movie.id}
                  className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed z-10"
                  title="Remove from favorites"
                >
                  {removingId === movie.id ? (
                    <svg className="w-4 h-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No favorite movies yet. Start adding some!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoriteMovies;