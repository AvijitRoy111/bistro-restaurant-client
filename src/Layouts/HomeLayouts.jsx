import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const HomeLayouts = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Fixed Navbar */}
      <header className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </header>

      {/* Main Content*/}
      <main className="flex-1 pt-[70px]">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default HomeLayouts;
