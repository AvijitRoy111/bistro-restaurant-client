import { Menu, UserRoundCog } from "lucide-react";

const Header = ({ setIsOpen }) => {
  return (
    <div className="w-full bg-gray-800 text-white flex items-center justify-between px-6 py-4 border-b border-gray-700 shadow-md">
      {/* Mobile menu button */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden p-2 rounded-md hover:bg-gray-700 transition"
        >
          <Menu size={20} />
        </button>
      
      </div>

      {/* Right side (always visible) */}
      <div className="flex items-center gap-2 bg-[#393053] px-3 py-2 rounded-full">
        <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center font-bold">
          GH
        </div>
        <span className="font-medium text-sm">
          <UserRoundCog />
        </span>
      </div>
    </div>
  );
};

export default Header;
