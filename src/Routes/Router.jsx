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
        element: <Contact />,
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
    element: <DashBoardLayouts />,
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
        element: <ManageItems/>
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
        path: "/setting",
        element: <Setting />
      },
      {
        path: "/header",
        element: <Header/>
      },
       {
        path: "/sidebar",
        element: <SideBar/>
      },
    ],
  },

]);

export default router;
