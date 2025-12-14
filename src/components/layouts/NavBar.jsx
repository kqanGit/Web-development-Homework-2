import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import HomeIcon from "@/components/icons/HomeIcon";
const NavBar = () => {
  return (
    <nav className="flex justify-between bg-gray-200 text-white p-2 rounded-sm">
      <div className="text-black flex items-center">
        <HomeIcon />
      </div>
      <div className='flex items-center'>
        <Input className="bg-white text-black rounded-sm" placeholder="Search..." />
        <Button className="ml-2 rounded-sm">Search</Button>
      </div>
    </nav>
  );
};

export default NavBar;
