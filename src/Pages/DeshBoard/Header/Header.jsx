import { Menu, UserRoundCog } from "lucide-react";

const Header = ({ setIsOpen }) => {
  return (
    <header className="fixed top-0 left-0 w-full h-[60px] bg-gray-800 text-white flex items-center justify-between px-6 border-b border-gray-700 shadow-md z-40">
      {/* Mobile menu button */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden p-2 rounded-md hover:bg-gray-700 transition"
        >
          <Menu size={20} />
        </button>
        <h1 className="font-semibold text-lg hidden lg:block ml-60">Admin</h1>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2 bg-[#393053] px-3 py-2 rounded-full">
        <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center font-bold">
          GH
        </div>
        <UserRoundCog size={18} />
      </div>
    </header>
  );
};

export default Header;
