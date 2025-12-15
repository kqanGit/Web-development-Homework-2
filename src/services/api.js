
const BASE_URL = "https://34.124.214.214:2423/api";
const APP_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjIzXzMxIiwicm9sZSI6InVzZXIiLCJhcGlfYWNjZXNzIjp0cnVlLCJpYXQiOjE3NjUzNjE3NjgsImV4cCI6MTc3MDU0NTc2OH0.O4I48nov3NLaKDSBhrPe9rKZtNs9q2Tkv4yK0uMthoo";

const fetchFromApi = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        "x-app-token": `${APP_TOKEN}`,
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Call Failed:", error);
    throw error;
  }
};

// Movie-related API functions

// Movies list with pagination
export const getMovies = async (page = 1, limit = 12) => {
  return await fetchFromApi(`/movies?page=${page}&limit=${limit}`, {
    method: "GET",
  });
};

// Search movies matching query
export const searchMoviesByQuery = async (q, page = 1, limit = 12) => {
  return await fetchFromApi(`/movies/search?q=${q}&page=${page}&limit=${limit}`, {
    method: "GET",
  });
};

// Search movies by title
export const searchMoviesByTitle = async (title, page = 1, limit = 12) => {
  return await fetchFromApi(`/movies/search?title=${title}&page=${page}&limit=${limit}`, {
    method: "GET",
  });
};

// Search movies by genre
export const getMoviesByGenre = async (genre, page = 1, limit = 12) => {
  return await fetchFromApi(`/movies/search?genre=${genre}&page=${page}&limit=${limit}`, {
    method: "GET",
  });
};

// Search movies by person (actor/director/etc.)
export const getMoviesByPerson = async (personId, page = 1, limit = 12) => {
  return await fetchFromApi(`/movies/search?person=${personId}&page=${page}&limit=${limit}`, {
    method: "GET",
  });
};

// Top rated
export const getTopRatedMovies = async (page = 1, limit = 12) => {
  return await fetchFromApi(`/movies/top-rated?category=IMDB_TOP_50&page=${page}&limit=${limit}`, {
    method: "GET",
  });
};

// Most popular
export const getMostPopularMovies = async (page = 1, limit = 12) => {
    // console.log(page, limit);
  return await fetchFromApi(`/movies/most-popular?page=${page}&limit=${limit}`, {
    method: "GET",
  });
};

// Movie detail by ID
export const getMovieDetail = async (id) => {
  return await fetchFromApi(`/movies/${id}`, {
    method: "GET",
  });
};

// Movie reviews
export const getMovieReviews = async (movieId, page = 1, limit = 12) => {
  return await fetchFromApi(`/movies/${movieId}/reviews?page=${page}&limit=${limit}`, {
    method: "GET",
  });
};

// Person-related API functions

// Actors/Directors list with pagination
export const getPersons = async ({id}) => {
  return await fetchFromApi(`/persons/${id}`, {
    method: "GET",
  });
};

// Person detail by ID
export const getPersonDetail = async (id) => {
  return await fetchFromApi(`/persons/${id}`, {
    method: "GET",
  });
};


// User-related API functions

export const registerUser = async (data) => {
  return await fetchFromApi(`/users/register`, {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const loginUser = async (data) => {
  return await fetchFromApi(`/users/login`, {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const logoutUser = async () => {
  return await fetchFromApi(`/users/logout`, {
    method: "POST",
  });
};

export const getUserProfile = async () => {
  return await fetchFromApi(`/users/profile`, {
    method: "GET",
  });
};

export const updateUserProfile = async (data) => {
  return await fetchFromApi(`/users/profile`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
};

export const getFavoriteMovies = async () => {
  return await fetchFromApi(`/users/favorites`, {
    method: "GET",
  });
};

export const addFavoriteMovie = async (movieId) => {
  return await fetchFromApi(`/users/favorites/${movieId}`, {
    method: "POST",
  });
};

export const removeFavoriteMovie = async (movieId) => {
  return await fetchFromApi(`/users/favorites/${movieId}`, {
    method: "DELETE",
  });
};
