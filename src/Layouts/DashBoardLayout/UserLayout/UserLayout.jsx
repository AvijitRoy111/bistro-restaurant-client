import { useState } from "react";
import { Outlet } from "react-router-dom";
import UserSidebar from "../../../Pages/UserCarts/UserSidebard/UserSidebar";
import UserHeader from "../../../Pages/UserCarts/UserHeader/UserHeader";

const UserLayout = () => {
     const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar (Fixed height & fixed position) */}
      <UserSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Section */}
      <div className="flex-1 flex flex-col overflow-hidden ">
        
        {/* Fixed Header */}
        <div className="fixed top-0 left-0 lg:left-56 w-full lg:w-[calc(100%-14rem)]  shadow-sm z-40">
          <UserHeader setIsOpen={setIsOpen} />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto mt-[60px] ">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default UserLayout