import React from "react";
import { Check } from "lucide-react";

const ManageBooking = () => {
  const bookings = [
    {
      email: "user010@gmail.com",
      phone: "01822299900",
      date: "07/11/06",
      time: "00 : 00",
      status: "Pending",
    },
    {
      email: "user010@gmail.com",
      phone: "01822299900",
      date: "07/11/06",
      time: "00 : 00",
      status: "Done",
    },
    {
      email: "user010@gmail.com",
      phone: "01822299900",
      date: "07/11/06",
      time: "00 : 00",
      status: "Pending",
    },
    {
      email: "user010@gmail.com",
      phone: "01822299900",
      date: "07/11/06",
      time: "00 : 00",
      status: "Done",
    },
    {
      email: "user010@gmail.com",
      phone: "01822299900",
      date: "07/11/06",
      time: "00 : 00",
      status: "Pending",
    },
    {
      email: "user010@gmail.com",
      phone: "01822299900",
      date: "07/11/06",
      time: "00 : 00",
      status: "Done",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center py-12 px-4">
      {/* Top Tagline */}
      <p className="text-center text-amber-600 italic text-sm mb-2">
        ---At a Glance!---
      </p>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-white border-y border-gray-500 py-2 mb-8">
        MANAGE ALL BOOKINGS
      </h2>

      {/* Table Card */}
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-5xl">
        {/* Summary */}
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          TOTAL ITEMS: <span className="text-amber-700">{bookings.length}</span>
        </h3>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-amber-700 text-white">
                <th className="py-3 px-4 rounded-tl-lg">SN</th>
                <th className="py-3 px-4">USER EMAIL</th>
                <th className="py-3 px-4">PHONE NUMBER</th>
                <th className="py-3 px-4">BOOKING DATE</th>
                <th className="py-3 px-4">BOOKING TIME</th>
                <th className="py-3 px-4">ACTIVITY</th>
                <th className="py-3 px-4 rounded-tr-lg">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50 transition"
                >
                  {/* ✅ Fixed Serial Number */}
                  <td className="py-3 px-4 text-gray-800 font-medium">
                    {index + 1}
                  </td>
                  <td className="py-3 px-4 text-gray-800">{booking.email}</td>
                  <td className="py-3 px-4 text-gray-800">{booking.phone}</td>
                  <td className="py-3 px-4 text-gray-800">{booking.date}</td>
                  <td className="py-3 px-4 text-gray-800">{booking.time}</td>
                  <td
                    className={`py-3 px-4 font-semibold ${
                      booking.status === "Pending"
                        ? "text-amber-700"
                        : "text-green-700"
                    }`}
                  >
                    {booking.status}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button className="bg-green-700 hover:bg-green-800 text-white rounded-full p-2 transition">
                      <Check size={18} />
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

export default ManageBooking;
