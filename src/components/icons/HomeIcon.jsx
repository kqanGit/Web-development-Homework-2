import { Home } from "lucide-react";

const HomeIcon = ({ className, ...props }) => {
  console.log("check");
  return <Home className={className} {...props} />;
};

export default HomeIcon;
