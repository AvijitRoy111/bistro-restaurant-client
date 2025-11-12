import { createBrowserRouter } from "react-router-dom";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home/Home";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Error from "../Components/Error/Error";
import Menu from "../Pages/Menu/Menu";
import Contact from "../Pages/Contact Us/Contact";
import Shop from "../Pages/Our-Shop/Shop";
import AuthLayouts from "../Layouts/AuthLayouts";
import SignIn from "../Pages/Sign-in/SignIn";
import SignUp from "../Pages/Sign-Up/SignUp";
import DashBoardLayouts from "../Layouts/DashBoardLayout/DashBoardLayouts";
import { AdminHome } from "../Pages/DeshBoard/AdminHome/AdminHome";
import Header from "../Pages/DeshBoard/Header/Header";
import SideBar from "../Pages/DeshBoard/SideBar/SideBar";
import { AddItems } from "../Pages/DeshBoard/AddItems/AddItems";
import DashBoard from "../Pages/DeshBoard/DashBoard/DashBoard";
import ManageItems from "../Pages/DeshBoard/ManageItems/ManageItems";
import ManageBooking from "../Pages/DeshBoard/ManageBooking/ManageBooking";
import AllUser from "../Pages/DeshBoard/AllUser/AllUser";
import Setting from "../Pages/DeshBoard/Setting/Setting";
import ShopCart from "../Pages/ShopCarts/ShopCart";
import UserCarts from "../Pages/UserCarts/UserCarts/UserCarts";
import UserLayout from "../Layouts/DashBoardLayout/UserLayout/UserLayout";
import UserHome from "../Pages/UserCarts/UserHome/UserHome";
import UserReservation from "../Pages/UserCarts/UserReservation/UserReservation";
import AddReveiw from "../Pages/UserCarts/AddReveiw/AddReveiw";
import Booking from "../Pages/UserCarts/Booking/Booking";
import Settings from "../Pages/UserCarts/Setting/Settings";
import ManageOrder from "../Pages/DeshBoard/ManageOrder/ManageOrder";
import EditManageItems from "../Pages/DeshBoard/ManageItems/EditManageItems";
import AllContact from "../Pages/DeshBoard/AllContact/AllContact";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import AdminPrivateRoutes from "../AdminPrivateRoutes/AdminPrivateRoutes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/:category",
        element: <Shop />,
      },
      {
        path: "/contact",
        element: <PrivateRoutes><Contact /></PrivateRoutes>,
      },
      {
        path: "/navbar",
        element: <Navbar />,
      },
      {
        path: "/footer",
        element: <Footer />,
      },
      {
        path: "/error",
        element: <Error />,
      },
    ],
  },

  {
    path: "/",
    element: <AuthLayouts />,
    errorElement: <Error />,
    children: [
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },

  {
    path: "/",
    element:<AdminPrivateRoutes>
      <DashBoardLayouts />
    </AdminPrivateRoutes> ,
    errorElement: <Error />,
    children: [
      {
        path: "/Dashboard",
        element: <DashBoard />
      },
      {
        path: "/Adminhome",
        element: <AdminHome />
      },
      {
        path: "/addItems",
        element: <AddItems />
      },
      {
        path: "/manageItems",
        element: <ManageItems />
      },
      {
        path: "/Edite-ManageItems/:id",
        element: <EditManageItems />
      },
      {
        path: "/manage-order",
        element: <ManageOrder />
      },
      {
        path: "/manageBooking",
        element: <ManageBooking />
      },
      {
        path: "/allusers",
        element: <AllUser />
      },
      {
        path: "/allcontacts",
        element: <AllContact />
      },
      {
        path: "/setting",
        element: <Setting />
      },
      {
        path: "/header",
        element: <Header />
      },
      {
        path: "/sidebar",
        element: <SideBar />
      },
    ],
  },
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "/user-home",
        element: <UserHome />
      },
      {
        path: "/user-reservation",
        element: <UserReservation />
      },
      {
        path: "/cart",
        element: <PrivateRoutes><ShopCart /></PrivateRoutes>
      },
      {
        path: "/add-reveiw",
        element: <AddReveiw />
      },
      {
        path: "/booking",
        element: <Booking />
      },
      {
        path: "/settings",
        element: <Settings />
      },
      {
        path: "/userCarts",
        element: <UserCarts />
      }
    ]
  },

]);

export default router;
