import { useContext, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import logo from "../../assets/icon/logo.png";
import {
  Contact,
  House,
  LayoutDashboard,
  Menu,
  ShoppingBag,
} from "lucide-react";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // handle logout
  const handleLogout = async () => {
    await logOut();
    toast.success("User LogOut successful!");
    navigate("/");
  };

  // Redirect user back to last page after login
  const handleLoginNavigate = () => {
    navigate("/signIn", { state: { from: location.pathname } });
  };

  // Active & Normal styles
  const activeLinkStyle =
    "flex items-center gap-2 bg-orange-500 text-white rounded-xl px-5 py-2   shadow-sm transition-all duration-300 border-l-4  border-l-amber-900 rounded-xl border-r-4 border-r-amber-900 rounded-xl";
  const normalLinkStyle =
    "flex items-center gap-2 text-white hover:text-orange-300 px-5 py-2 rounded-xl transition-all duration-300";

  // Nav Links (update icon size)
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? activeLinkStyle : normalLinkStyle
          }
        >
          <House className="w-4 h-4 block md:hidden" />
          <span className="text-sm font-medium">Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive ? activeLinkStyle : normalLinkStyle
          }
        >
          <Menu className="w-4 h-4 block md:hidden" />
          <span className="text-sm font-medium">Our Menu</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            isActive ? activeLinkStyle : normalLinkStyle
          }
        >
          <Contact className="w-4 h-4 block md:hidden" />
          <span className="text-sm font-medium">Contact Us</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashBoard"
          className={({ isActive }) =>
            isActive ? activeLinkStyle : normalLinkStyle
          }
        >
          <LayoutDashboard className="w-4 h-4 block md:hidden" />
          <span className="text-sm font-medium">Dashboard</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Shop"
          className={({ isActive }) =>
            isActive ? activeLinkStyle : normalLinkStyle
          }
        >
          <ShoppingBag className="w-4 h-4 block md:hidden" />
          <span className="text-sm font-medium">Our Shop</span>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-black/60 backdrop-blur-3xl shadow-md fixed top-0 left-0 right-0 z-50 px-4 md:px-20">
      {/* Navbar Start */}
      <div className="navbar-start flex items-center gap-2 space-x-2">
        <button
          className="btn btn-ghost btn-circle  border-2 border-orange-500 lg:hidden"
          onClick={() => setMobileMenuOpen(true)}
        >
          <FaBars className="text-2xl text-white" />
        </button>

        <a
          to="/"
          className="text-xl font-bold text-white flex gap-4 items-center justify-center"
        >
          <img className="w-10 h-10 hidden md:block" src={logo} alt="" />
          <p className="flex flex-col items-center justify-center gap-0">
            <span className="text-2xl ">BISTRO-E</span>{" "}
            <span className="text-white/70">Restaurant</span>
          </p>
        </a>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal space-x-2">{navLinks}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center space-x-3">
        {loading ? (
          <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
        ) : (
          <>
            {user ? (
              <>
                <Link to="/signIn">
                  <button
                    onClick={handleLogout}
                    className="px-3 py-1 text-white hover:bg-white/10 bg-orange-500  rounded-xl shadow-sm transition-all duration-300 border-l-4  border-l-amber-900  border-r-4 border-r-amber-900 border-b-4 border-b-amber-900"
                  >
                    Logout
                  </button>
                </Link>

                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                  <img
                    src={
                      user?.photoURL ||
                      "https://i.ibb.co.com/G3CNyWmc/image.jpg"
                    }
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
              </>
            ) : (
              <>
                <Link to="/signIn">
                  <button
                    onClick={handleLoginNavigate}
                    className="px-3 py-1 text-white hover:bg-white/10 bg-orange-500  rounded-xl shadow-sm transition-all duration-300 border-l-4  border-l-amber-900  border-r-4 border-r-amber-900 border-b-4 border-b-amber-900"
                  >
                    Login
                  </button>
                </Link>

                <span
                  onClick={handleLoginNavigate}
                  className="border-2 border-orange-500 rounded-full p-3 bg-black/40 cursor-pointer"
                >
                  <Link to="/signIn">
                    <FaUser className="text-xl text-white " />
                  </Link>
                </span>
              </>
            )}
          </>
        )}
      </div>

      {/* Mobile Drawer Menu */}

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Drawer */}
          <div className="absolute left-0 top-0 h-screen w-64 bg-gray-900 text-white shadow-2xl p-4 animate-slideInLeft z-50">
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                {loading ? (
                  <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
                ) : user ? (
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                    <img
                      src={
                        user?.photoURL ||
                        "https://i.ibb.co.com/G3CNyWmc/image.jpg"
                      }
                      alt="User"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <span
                    onClick={handleLoginNavigate}
                    className="border-2 border-orange-500 rounded-full p-3 cursor-pointer"
                  >
                    <FaUser className="text-xl text-white" />
                  </span>
                )}
              </div>

              <button onClick={() => setMobileMenuOpen(false)}>
                <FaTimes className="text-2xl text-white" />
              </button>
            </div>

            <hr className="border-gray-600" />

            {/* Menu Items */}
            <div className="mt-4">
              <ul className="menu text-white space-y-2">{navLinks}</ul>
              <hr className="my-2 border-gray-600" />

              {user ? (
                <button
                  onClick={handleLogout}
                  className="w-full px-3 py-2 border border-amber-900 rounded-xl text-white hover:bg-white/10 transition border-l-8 border-l-amber-900 border-r-8 border-r-amber-900 border-b-8 border-b-amber-900"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={handleLoginNavigate}
                  className="w-full px-3 py-2 border border-amber-900 rounded-xl text-white hover:bg-white/10 transition border-l-8 border-l-amber-900 border-r-8 border-r-amber-900 border-b-8 border-b-amber-900"
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
