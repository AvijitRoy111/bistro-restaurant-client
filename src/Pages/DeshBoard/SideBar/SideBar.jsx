import { useState } from "react";
import { Home, Users, Book, ShoppingCart, Settings, LogOut } from "lucide-react";

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <Home size={18} /> },
    { name: "User", icon: <Users size={18} /> },
    { name: "Books", icon: <Book size={18} /> },
    { name: "Orders", icon: <ShoppingCart size={18} /> },
    { name: "Settings", icon: <Settings size={18} /> },
  ];

  return (
    <div className="w-64 bg-[#18122B] text-white h-screen flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold p-6">POPY LIBRARY</h2>
        <ul className="px-4 space-y-2">
          {menuItems.map((item) => (
            <li
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                active === item.name
                  ? "bg-[#635985] text-white"
                  : "hover:bg-[#2a2440]"
              }`}
            >               {item.icon}
              <span>{item.name}</span>
         </li>
          ))}
        </ul>
      </div>
      <div className="p-4 border-t border-gray-700 flex items-center gap-3 cursor-pointer hover:bg-[#2a2440] transition-all">
        <LogOut size={18} />
        <span>Log out</span>
      </div>
    </div>
  );
};

export default Sidebar;
