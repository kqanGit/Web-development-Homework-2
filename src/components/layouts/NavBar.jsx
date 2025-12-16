import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import HomeIcon from "@/components/icons/HomeIcon";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [keyword, setKeyword] = useState("");
  const [searchType, setSearchType] = useState("omni"); // omni, title, person, genre

  const shouldShowSearch = !location.pathname.startsWith('/profile');

  const searchTypeLabels = {
    omni: "All",
    title: "Title",
    person: "Celebrity",  
    genre: "Genre"
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      let searchUrl = "/search?";
      
      switch (searchType) {
        case "omni":
          searchUrl += `query=${encodeURIComponent(keyword)}`;
          break;
        case "title":
          searchUrl += `title=${encodeURIComponent(keyword)}`;
          break;
        case "person":
          searchUrl += `person=${encodeURIComponent(keyword)}`;
          break;
        case "genre":
          searchUrl += `genre=${encodeURIComponent(keyword)}`;
          break;
        default:
          searchUrl += `query=${encodeURIComponent(keyword)}`;
      }
      
      navigate(searchUrl);
      setKeyword(""); // Clear search after submit
    }
  };

  return (
    <nav className="bg-gray-200 p-2 rounded-sm dark:bg-gray-800">
      <div className="flex justify-between items-center gap-2 text-black dark:text-white">
        <Link to="/">
          <HomeIcon className="w-8 h-8" />
        </Link>

        {shouldShowSearch && (
          <form className="flex gap-2 items-center w-full max-w-md" onSubmit={handleSearch}>
            {/* Search Type Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  type="button"
                  variant="outline" 
                  className="rounded-sm dark:bg-gray-700 dark:text-white dark:border-gray-600 whitespace-nowrap"
                >
                  {searchTypeLabels[searchType]}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuLabel>Search by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setSearchType("omni")}>
                  All
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSearchType("title")}>
                  Title
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSearchType("person")}>
                  Celebrity
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSearchType("genre")}>
                  Genre
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Search Input */}
            <Input
              className="bg-white text-black rounded-sm dark:bg-gray-700 dark:text-white w-full"
              placeholder={`Search by ${searchTypeLabels[searchType].toLowerCase()}...`}
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            
            {/* Search Button */}
            <Button
              className="rounded-sm dark:bg-gray-700 dark:text-white"
              type="submit"
            >
              Search
            </Button>
          </form>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
