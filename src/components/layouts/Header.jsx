import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/contexts/ThemeContext";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import SunIcon from "@/components/icons/SunIcon";
import MoonIcon from "@/components/icons/MoonIcon";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  
  const handleOnLogin = () => {
    navigate("/login");
  };
  
  const handleOnRegister = () => {
    navigate("/register");
  };
  
  const handleProfileClick = () => {
    if (user) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };
  
  const handleFavoriteClick = () => {
    if (user) {
      navigate("/favorites");
    } else {
      navigate("/login");
    }
  };
  
  return (
    <header className="bg-red-200 text-black shadow-md rounded-sm dark:bg-gray-800 dark:text-white">
      <div className="max-w-[1200px] mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-sm font-semibold">23120337</div>
        <h1 className="text-2xl font-bold uppercase tracking-wide">
          Movies Info
        </h1>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Switch onClick={toggleTheme} id="theme-switch" />
            <Label
              htmlFor="theme-switch"
              className="flex items-center gap-1 cursor-pointer"
            >
              {theme === "dark" ? <MoonIcon /> : <SunIcon />}
            </Label>
          </div>
          <DropdownMenu>
            {user ? (
              <DropdownMenuTrigger className="px-4 py-2 bg-red-400 dark:bg-gray-700 rounded-md hover:bg-red-500 dark:hover:bg-gray-600 transition">
                {user.username}
              </DropdownMenuTrigger>
            ) : (
              <DropdownMenuTrigger className="px-4 py-2 bg-red-400 dark:bg-gray-700 rounded-md hover:bg-red-500 dark:hover:bg-gray-600 transition">
                Account
              </DropdownMenuTrigger>
            )}
            <DropdownMenuContent align="end" className="w-48">
              {user ? (
                <>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleProfileClick}>
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleFavoriteClick}>
                    Favorite
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => {
                      logout();
                      navigate("/");
                    }}
                  >
                    Logout
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuItem onClick={handleProfileClick}>
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleFavoriteClick}>
                    Favorite
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleOnLogin}>
                    Login
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleOnRegister}>
                    Register
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
