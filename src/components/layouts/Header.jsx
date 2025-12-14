import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/contexts/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="bg-red-200 text-black shadow-md rounded-sm">
      <div className="max-w-[1200px] mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-sm font-semibold">23120337</div>

        <h1 className="text-2xl font-bold uppercase tracking-wide">
          Movies Info
        </h1>
        <div className="flex items-center gap-4">
          <Switch />

          <div className="text-sm">Guest</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
