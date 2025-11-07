import { useState } from "react";
import {
    Home,
    Users,
    Settings,
    LogOut,
    X,
    BookText,
    TableOfContents,
    Utensils,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
    const location = useLocation();

    const headerLinks = <>
        {/* Admin Home */}
        <li>
            <Link
                to="/Adminhome"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 py-2 px-3 rounded-md transition-all ${location.pathname === "/Adminhome"
                        ? "bg-gray-900/70 border-r-4 border-l-4 border-orange-500"
                        : "hover:bg-gray-700"
                    }`}
            >
                <Home size={14} />
                <span>Admin Home</span>
            </Link>
        </li>

        {/* Add Items */}
        <li>
            <Link
                to="/addItems"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 py-2 px-3 rounded-md transition-all ${location.pathname === "/addItems"
                        ? "bg-gray-900/70 border-r-4 border-l-4 border-orange-500"
                        : "hover:bg-gray-700"
                    }`}
            >
                <Utensils size={14} />
                <span>Add Items</span>
            </Link>
        </li>

        {/* Manage Items */}
        <li>
            <Link
                to="/manageItems"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 py-2 px-3 rounded-md transition-all ${location.pathname === "/manageItems"
                        ? "bg-gray-900/70 border-r-4 border-l-4 border-orange-500"
                        : "hover:bg-gray-700"
                    }`}
            >
                <TableOfContents size={14} />
                <span>Manage Items</span>
            </Link>
        </li>

        {/* Manage Bookings */}
        <li>
            <Link
                to="/manageBooking"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 py-2 px-3 rounded-md transition-all ${location.pathname === "/manageBooking"
                        ? "bg-gray-900/70 border-r-4 border-l-4 border-orange-500"
                        : "hover:bg-gray-700"
                    }`}
            >
                <BookText size={14} />
                <span>Manage Bookings</span>
            </Link>
        </li>

        {/* All Users */}
        <li>
            <Link
                to="/allusers"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 py-2 px-3 rounded-md transition-all ${location.pathname === "/allusers"
                        ? "bg-gray-900/70 border-r-4 border-l-4 border-orange-500"
                        : "hover:bg-gray-700"
                    }`}
            >
                <Users size={14} />
                <span>All Users</span>
            </Link>
        </li>

        {/* Settings */}
        <li>
            <Link
                to="/setting"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 py-2 px-3 rounded-md transition-all ${location.pathname === "/setting"
                        ? "bg-gray-900/70 border-r-4 border-l-4 border-orange-500"
                        : "hover:bg-gray-700"
                    }`}
            >
                <Settings size={14} />
                <span>Settings</span>
            </Link>
        </li>
    </>

    return (
        <>
            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 lg:hidden z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            <div
                className={`fixed lg:static top-0 left-0 h-screen bg-gray-800 text-white flex flex-col justify-between w-64 lg:w-56  transform transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0 fixed"
                    }`}
            >
                {/* Header (mobile only) */}
                <div className="lg:hidden flex items-center justify-between px-4 py-4 border-b border-gray-600 fixed top-0 left-0 w-64 bg-gray-800 z-50 border-r border-r-white/15">
                    <h2 className="text-xl font-bold">BISTRO-E</h2>
                    <X
                        size={20}
                        onClick={() => setIsOpen(false)}
                        className="cursor-pointer hover:text-orange-500 transition"
                    />
                </div>

                {/* Scrollable menu section */}
                <div className="flex-1 overflow-y-auto mt-16 lg:mt-0 border-r border-r-white/15">
                    {/* Title for desktop */}
                    <h2 className="text-2xl font-bold py-[13px] px-6 hidden lg:block border-b border-b-white/15">
                        BISTRO-E
                    </h2>

                    <ul className="px-4 space-y-1 text-xs mt-2">
                        {headerLinks}
                    </ul>
                </div>

                {/* Logout */}
                <div className="p-4 border-t border-gray-700 flex items-center gap-3 cursor-pointer hover:bg-gray-700 transition-all text-sm border-r border-r-white/15">
                    <LogOut size={16} />
                    <span>Log out</span>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
