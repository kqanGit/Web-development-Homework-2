import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "@/components/layouts/MainLayout";
import Home from "@/pages/Home";
import SearchResult from "@/pages/SearchResult";
import MovieDetail from "@/pages/MovieDetail";
import PersonDetail from "@/pages/PersonDetail";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Profile from "@/pages/Profile";
import EditProfile from "@/pages/EditProfile";
import FavoriteMovies from "@/pages/FavoriteMovies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="movie/:id" element={<MovieDetail />} />
          <Route path="person/:id" element={<PersonDetail />} />
          <Route path="search" element={<SearchResult />} />
          <Route path="profile" element={<Profile />} />
          <Route path="edit-profile" element={<EditProfile />} />
          <Route path="favorites" element={<FavoriteMovies />} />
          <Route path="*" element={<div>404 - Page not found</div>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
