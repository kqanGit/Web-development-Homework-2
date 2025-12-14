import { Outlet } from "react-router-dom";
import Header from "@/components/layouts/Header";
import NavBar from "@/components/layouts/NavBar";
import Footer from "@/components/layouts/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 transition-colors duration-300">
      <div className="w-full max-w-[1200px] flex flex-col gap-2 mx-auto min-h-screen flex flex-col">
        <Header />
        <NavBar />
        <main className="flex-grow p-4">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
