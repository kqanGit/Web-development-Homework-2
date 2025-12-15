import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "@/components/layouts/MainLayout";
import Home from "@/pages/Home";
import SearchResult from "@/pages/SearchResult";
import MovieDetail from "@/pages/MovieDetail";
import PersonDetail from "@/pages/PersonDetail";

const Login = () => <div>Login</div>;
const Profile = () => <div>Profile</div>;
const Favorites = () => <div>Favorites</div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="movie/:id" element={<MovieDetail />} />
          <Route path="person/:id" element={<PersonDetail />} />
          <Route path="search" element={<SearchResult />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<div>404 - Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
