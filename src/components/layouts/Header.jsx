

const Header = () => {

  return (
    <header className="bg-red-200 text-black shadow-md">
      <div className="max-w-[1200px] mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-sm font-semibold">
          MSSV: <span className="text-yellow-300">23120337</span>
        </div>

        <h1 className="text-2xl font-bold uppercase tracking-wide">Movies Info</h1>
        <div className="flex items-center gap-4">
          <button>
            mode
          </button>
          <div className="text-sm">
             Guest
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;