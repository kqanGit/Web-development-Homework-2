import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import HomeIcon from "@/components/icons/HomeIcon";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search?query=${keyword}`);
    }
  };

  return (
    <nav className="bg-gray-200 p-2 rounded-sm dark:bg-gray-800">
      <div className="flex justify-between items-center gap-2 text-black dark:text-white">
        <HomeIcon />

        <form className="flex items-center" onSubmit={handleSearch}>
          <Input
            className="bg-white text-black rounded-sm dark:bg-gray-700 dark:text-white"
            placeholder="Search..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <Button
            className="ml-2 rounded-sm dark:bg-gray-700 dark:text-white"
            type="submit"
          >
            Search
          </Button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
