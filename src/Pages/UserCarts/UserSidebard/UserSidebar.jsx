import {
    Home,
    Settings,
    LogOut,
    X,
    CalendarDays,
    ShoppingCart,
    MailCheck,
    BookCopy,
    PhoneCall,
    UtensilsCrossed,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const UserSidebar = ({ isOpen, setIsOpen }) => {
    const location = useLocation();

    const headerLinks = <>
        {/* User Home */}
        <li>
            <Link
                to="/user-home"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 py-2 px-3 rounded-md transition-all ${location.pathname === "/user-home"
                    ? "bg-gray-900/70 border-r-4 border-l-4 border-orange-500"
                    : "hover:bg-gray-700"
                    }`}
            >
                <Home size={14} />
                <span>User Home</span>
            </Link>
        </li>

        {/* Reservation*/}
        <li>
            <Link
                to="/user-reservation"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 py-2 px-3 rounded-md transition-all ${location.pathname === "/user-reservation"
                    ? "bg-gray-900/70 border-r-4 border-l-4 border-orange-500"
                    : "hover:bg-gray-700"
                    }`}
            >
                <CalendarDays size={14} />
                <span>Reservation</span>
            </Link>
        </li>

        {/* My Cart */}
        <li>
            <Link
                to="/cart"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 py-2 px-3 rounded-md transition-all ${location.pathname === "/cart"
                    ? "bg-gray-900/70 border-r-4 border-l-4 border-orange-500"
                    : "hover:bg-gray-700"
                    }`}
            >
                <ShoppingCart size={14} />
                <span>My Cart</span>
            </Link>
        </li>

        {/* Add Review */}
        <li>
            <Link
                to="/add-reveiw"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 py-2 px-3 rounded-md transition-all ${location.pathname === "/add-reveiw"
                    ? "bg-gray-900/70 border-r-4 border-l-4 border-orange-500"
                    : "hover:bg-gray-700"
                    }`}
            >
                <MailCheck size={14} />
                <span>Add Review</span>
            </Link>
        </li>

        {/* My Booking */}
        <li>
            <Link
                to="/booking"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 py-2 px-3 rounded-md transition-all ${location.pathname === "/booking"
                    ? "bg-gray-900/70 border-r-4 border-l-4 border-orange-500"
                    : "hover:bg-gray-700"
                    }`}
            >
                <BookCopy size={14} />
                <span>My Booking</span>
            </Link>
        </li>

        {/* Settings */}
        <li>
            <Link
                to="/settings"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 py-2 px-3 rounded-md transition-all ${location.pathname === "/settings"
                    ? "bg-gray-900/70 border-r-4 border-l-4 border-orange-500"
                    : "hover:bg-gray-700"
                    }`}
            >
                <Settings size={14} />
                <span>Settings</span>
            </Link>
        </li>
    </>

    const homeLinks = <>
        {/*  Home */}
        <li>
            <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 py-2 px-3 rounded-md transition-all ${location.pathname === "/"
                    ? "bg-gray-900/70 border-r-4 border-l-4 border-orange-500"
                    : "hover:bg-gray-700"
                    }`}
            >
                <Home size={14} />
                <span>Home</span>
            </Link>
        </li>

        {/* menu*/}
        <li>
            <Link
                to="/menu"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 py-2 px-3 rounded-md transition-all ${location.pathname === "/menu"
                    ? "bg-gray-900/70 border-r-4 border-l-4 border-orange-500"
                    : "hover:bg-gray-700"
                    }`}
            >
                <CalendarDays size={14} />
                <span>menu</span>
            </Link>
        </li>

        {/* Shop */}
        <li>
            <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 py-2 px-3 rounded-md transition-all ${location.pathname === "/shop"
                    ? "bg-gray-900/70 border-r-4 border-l-4 border-orange-500"
                    : "hover:bg-gray-700"
                    }`}
            >
                <UtensilsCrossed size={14} />
                <span>Shop</span>
            </Link>
        </li>

        {/* Contact*/}
        <li>
            <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 py-2 px-3 rounded-md transition-all ${location.pathname === "/contact"
                    ? "bg-gray-900/70 border-r-4 border-l-4 border-orange-500"
                    : "hover:bg-gray-700"
                    }`}
            >
                <PhoneCall size={14}/>
                <span>Contact</span>
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

                    <div className="border-t border-t-white/40 mt-6">
                        <ul className="px-4 space-y-1 text-xs mt-2">
                            {homeLinks}
                        </ul>
                    </div>
                </div>

                {/* Logout */}
                <div className="p-4 border-t border-gray-700 flex items-center gap-3 cursor-pointer hover:bg-gray-700 transition-all text-sm border-r border-r-white/15">
                    <LogOut size={16} />
                    <span>Log out</span>
                </div>
            </div>
        </>
    )
}

export default UserSidebar