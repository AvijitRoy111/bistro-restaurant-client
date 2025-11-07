import { useState } from "react";
import Sidebar from "../../Pages/DeshBoard/SideBar/SideBar";
import Header from "../../Pages/DeshBoard/Header/Header";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex bg-[#1E1E2E] min-h-screen relative">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex flex-col flex-1">
        <Header setIsOpen={setIsOpen} />
        <main className="p-6 text-white"><Outlet/></main>
      </div>
    </div>
  );
};

export default DashboardLayout;
