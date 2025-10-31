import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();

  const user = {
    displayName: "Bidhan Bormon",
    photoURL: "",
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const handleUserClick = () => {
    if (user) {
      setUserMenuOpen(!userMenuOpen);
    } else {
      navigate("/login");
    }
  };

  const handleLogout = () => {
    console.log("Logged out");
    setUserMenuOpen(false);
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="text-white hover:text-gray-300">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/menu" className="text-white hover:text-gray-300">
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink to="/Contact" className="text-white hover:text-gray-300">
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/Dashboard" className="text-white hover:text-gray-300">
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/Shop" className="text-white hover:text-gray-300">
          Our Shop
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-black/40 shadow-md fixed top-0 left-0 right-0 z-50 px-4 md:px-20">
      {/* Navbar Start */}
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl font-bold text-white">
          Bistro Restaurant
        </a>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end space-x-2">
        {/* User Icon */}
        <div className="relative">
          <button
            onClick={handleUserClick}
            className="btn btn-ghost btn-circle avatar"
          >
            {user && user.photoURL ? (
              <div className="w-10 rounded-full">
                <img src={user.photoURL} alt="User" />
              </div>
            ) : (
              <FaUser className="text-xl text-white" />
            )}
          </button>

          {/* User Dropdown */}
          {user && userMenuOpen && (
            <div className="absolute right-0 mt-3 w-48 bg-black/40 rounded-lg shadow-lg p-4 border border-gray-600 z-50 text-white backdrop-blur-md">
              <p className="font-semibold">{user.displayName}</p>
              <hr className="my-2 border-gray-500" />
              <button
                onClick={handleLogout}
                className="btn btn-sm btn-error text-white w-full"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="btn btn-ghost btn-circle lg:hidden"
          onClick={() => setMobileMenuOpen(true)}
        >
          <FaBars className="text-xl text-white" />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
          <div className="w-64 bg-gray-900 h-full shadow-lg p-4 relative animate-slideIn text-white">
            <div className="flex justify-between items-center mb-3">
              {/* User Section */}
              <div
                onClick={handleUserClick}
                className="btn btn-ghost btn-circle avatar"
              >
                {user && user.photoURL ? (
                  <div className="w-10 rounded-full">
                    <img src={user.photoURL} alt="User" />
                  </div>
                ) : (
                  <FaUser className="text-xl text-white" />
                )}
              </div>

              {/* Close Icon */}
              <button onClick={() => setMobileMenuOpen(false)}>
                <FaTimes className="text-2xl text-white" />
              </button>
            </div>
            <hr className="border-gray-600" />
            <div className="mt-4">
              <ul className="menu text-white">{navLinks}</ul>
              <hr className="my-2 border-gray-600" />
              {user ? (
                <button
                  onClick={handleLogout}
                  className="btn btn-error text-white w-full"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="btn btn-primary text-white w-full"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
