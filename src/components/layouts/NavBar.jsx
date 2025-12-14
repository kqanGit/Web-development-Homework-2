import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import HomeIcon from "@/components/icons/HomeIcon";
const NavBar = () => {
  return (
    <nav className="flex justify-between bg-gray-200 text-white p-2 rounded-sm dark:bg-gray-800 dark:text-white">
      <div className="text-black flex items-center dark:text-white">
        <HomeIcon />
      </div>
      <div className='flex items-center'>
        <Input className="bg-white text-black rounded-sm dark:bg-gray-700 dark:text-white" placeholder="Search..." />
        <Button className="ml-2 rounded-sm dark:bg-gray-700 dark:text-white">Search</Button>
      </div>
    </nav>
  );
};

export default NavBar;
