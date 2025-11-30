// import { FaUtensils, FaShopify, FaPhoneAlt, FaCartArrowDown, FaStar, FaBookmark, FaMoneyCheckAlt } from "react-icons/fa";

// const UserHome = () => {
//   return (
//     <div className="min-h-screen bg-slate-900 px-4 md:px-10 py-10">
//       {/* Welcome Text */}
//       <h2 className="text-lg md:text-xl text-white font-semibold mb-6">Hi, WELCOME BACK!</h2>

//       {/* Top Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
//         {/* Menu */}
//         <div className="flex items-center justify-between bg-gradient-to-r from-pink-300 to-purple-300 rounded-xl p-6 shadow-md">
//           <div>
//             <h3 className="text-3xl font-bold text-white">205</h3>
//             <p className="text-white font-medium">Menu</p>
//           </div>
//           <FaUtensils className="text-white text-4xl" />
//         </div>

//         {/* Shop */}
//         <div className="flex items-center justify-between bg-gradient-to-r from-yellow-300 to-amber-400 rounded-xl p-6 shadow-md">
//           <div>
//             <h3 className="text-3xl font-bold text-white">103</h3>
//             <p className="text-white font-medium">Shop</p>
//           </div>
//           <FaShopify className="text-white text-4xl" />
//         </div>

//         {/* Contact */}
//         <div className="flex items-center justify-between bg-gradient-to-r from-pink-400 to-rose-400 rounded-xl p-6 shadow-md">
//           <div>
//             <h3 className="text-3xl font-bold text-white">03</h3>
//             <p className="text-white font-medium">Contact</p>
//           </div>
//           <FaPhoneAlt className="text-white text-4xl" />
//         </div>
//       </div>

      {/* Profile & Activities Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-xl shadow-md overflow-hidden">
        {/* Left - User Info */}
        <div className="flex flex-col items-center justify-center bg-[#ffedd5] py-10">
          <div className="w-32 h-32 border-4 border-[#f2b97f] bg-white rounded-full mb-4"></div>
          <h3 className="text-lg font-semibold text-gray-800">Avijit Roy</h3>
        </div>

        {/* Right - Activities */}
        <div className="bg-[#fff9c4] flex flex-col justify-center p-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-5">Your Activities</h2>
          <ul className="space-y-2 text-lg">
            <li className="flex items-center text-sky-600 font-semibold">
              <FaCartArrowDown className="mr-2" /> ORDERS: <span className="ml-1 text-gray-700">6</span>
            </li>
            <li className="flex items-center text-teal-500 font-semibold">
              <FaStar className="mr-2" /> REVIEWS: <span className="ml-1 text-gray-700">2</span>
            </li>
            <li className="flex items-center text-orange-500 font-semibold">
              <FaBookmark className="mr-2" /> BOOKMARKS: <span className="ml-1 text-gray-700">3</span>
            </li>
            <li className="flex items-center text-red-500 font-semibold">
              <FaMoneyCheckAlt className="mr-2" /> PAYMENTS: <span className="ml-1 text-gray-700">1</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
