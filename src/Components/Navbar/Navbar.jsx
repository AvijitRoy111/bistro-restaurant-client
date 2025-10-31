import { Menu, X, User, LogOut, LogIn } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [theme, setTheme] = useState("dark");

 

  return (
    <>
      {/* Navbar */}
      <nav
        className={`
          fixed top-0 left-0 w-full z-50
          flex items-center justify-between
          px-6 py-3 border-b border-[#7c0a02]/50
          backdrop-blur-md
        `}
      >
        {/* Left Logo */}
        <div className="flex flex-col leading-tight">
          <span className="text-sm tracking-widest font-semibold">BISTRO BOSS</span>
          <span className="text-[10px] tracking-[2px] text-gray-400">
            R E S T A U R A N T
          </span>
        </div>

        {/* Center Menu (Hidden on Mobile) */}
        <ul className="hidden md:flex items-center gap-6 text-xs uppercase font-semibold">
          <li className="text-[#e5d410] cursor-pointer">Home</li>
          <li className="cursor-pointer hover:text-[#e5d410] transition">Contact Us</li>
          <li className="cursor-pointer hover:text-[#e5d410] transition">Dashboard</li>
          <li className="cursor-pointer hover:text-[#e5d410] transition">Our Menu</li>
          <li className="cursor-pointer hover:text-[#e5d410] transition">Our Shop</li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4 relative">
          {/* User Icon */}
          <button
            onClick={() => setIsUserMenuOpen((prev) => !prev)}
            className="bg-white text-black rounded-full p-1"
          >
            <User className="h-5 w-5" />
          </button>

          {/* Dropdown for User */}
          {isUserMenuOpen && (
            <div
              className={`absolute top-10 right-0 w-40 rounded-md shadow-lg p-3
                
              `}
            >
              {isLoggedIn ? (
                <>
                  <p className="text-sm mb-2 text-gray-400">Hi, {username}</p>
                  <button
                    onClick={() => setIsLoggedIn(false)}
                    className="flex items-center gap-2 text-sm text-red-500 hover:text-red-400"
                  >
                    <LogOut className="h-4 w-4" /> Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setIsLoggedIn(true)}
                  className="flex items-center justify-center text-center gap-2 text-sm text-blue-500 hover:text-blue-400"
                >
                  <LogIn className="h-4 w-4" /> Login
                </button>
              )}
            </div>
          )}

          {/* Menu Icon (Only Mobile) */}
          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-md transition"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0e1621] text-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <User className="h-5 w-5" />
            <span className="text-sm font-semibold">
              {isLoggedIn ? username : "Guest"}
            </span>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 hover:bg-white/10 rounded-md"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Menu Links */}
        <ul className="flex flex-col p-4 gap-4 text-sm uppercase font-semibold">
          <li className="text-[#e5d410] cursor-pointer">Home</li>
          <li className="cursor-pointer hover:text-[#e5d410] transition">Contact Us</li>
          <li className="cursor-pointer hover:text-[#e5d410] transition">Dashboard</li>
          <li className="cursor-pointer hover:text-[#e5d410] transition">Our Menu</li>
          <li className="cursor-pointer hover:text-[#e5d410] transition">Our Shop</li>
        </ul>

        {/* Bottom Logout/Login Button */}
        <div className="p-4 border-t border-gray-700">
          {isLoggedIn ? (
            <button
              onClick={() => {
                setIsLoggedIn(false);
                setIsMenuOpen(false);
              }}
              className="flex items-center gap-2 text-sm text-red-500 hover:text-red-400"
            >
              <LogOut className="h-4 w-4" /> Logout
            </button>
          ) : (
            <button
              onClick={() => {
                setIsLoggedIn(true);
                setIsMenuOpen(false);
              }}
              className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
            >
              <LogIn className="h-4 w-4" /> Login
            </button>
          )}
        </div>
      </div>

      {/* Overlay when mobile menu open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
