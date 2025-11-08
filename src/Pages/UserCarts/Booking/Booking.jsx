import React from "react";
import { Trash2 } from "lucide-react";

const Booking = () => {
  const bookings = [
    { id: 1, image: "https://i.ibb.co.com/QJZWrp9/food1.png", guest: "4 guest", category: "$14.5", price: "$89.00" },
    { id: 2, image: "https://i.ibb.co.com/QJZWrp9/food1.png", guest: "4 guest", category: "$14.5", price: "$89.00" },
    { id: 3, image: "https://i.ibb.co.com/QJZWrp9/food1.png", guest: "4 guest", category: "$14.5", price: "$89.00" },
  ];

  const totalPrice = bookings.reduce((sum, item) => sum + 89, 0);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center py-10 px-4">
      {/* Top Text */}
       <div className="flex flex-col items-center justify-center mb-8 space-y-4">
        <p className="text-center text-yellow-600 italic mb-2"> ---Excellent Ambience---</p>
        <hr className="border-2 border-gray-300 w-[350px] text-center" />
        <h2 className="text-center text-3xl font-bold tracking-wide text-white"> MY BOOKINGS</h2>
        <hr className="border-2 border-gray-300 w-[350px] text-center" />
      </div>

      {/* Booking Summary */}
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-4xl">
        <div className="flex flex-wrap justify-between items-center mb-4">
          <p className="text-gray-700 font-medium text-lg">
            Total bookings: <span className="font-semibold">{bookings.length}</span>
          </p>
          <p className="text-gray-700 font-medium text-lg">
            Total price: <span className="font-semibold">${totalPrice}</span>
          </p>
          <button className="bg-[#B91C1C] text-white px-5 py-2 rounded-md hover:bg-red-700 transition">
            Pay
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-[#F8EBDD] text-gray-800">
              <tr>
                <th className="px-4 py-3 font-semibold">#</th>
                <th className="px-4 py-3 font-semibold">Item Image</th>
                <th className="px-4 py-3 font-semibold">Guest Number</th>
                <th className="px-4 py-3 font-semibold">Category</th>
                <th className="px-4 py-3 font-semibold">Price</th>
                <th className="px-4 py-3 font-semibold text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((item, index) => (
                <tr key={item.id} className="border-b hover:bg-gray-100 transition">
                  <td className="px-4 py-3 font-medium">{index + 1}</td>
                  <td className="px-4 py-3">
                    <img
                      src={item.image}
                      alt="food"
                      className="w-10 h-10 rounded-md object-cover"
                    />
                  </td>
                  <td className="px-4 py-3">{item.guest}</td>
                  <td className="px-4 py-3">{item.category}</td>
                  <td className="px-4 py-3">{item.price}</td>
                  <td className="px-4 py-3 text-center">
                    <button className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Booking;
