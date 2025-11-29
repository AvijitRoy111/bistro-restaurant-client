// import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { Trash2, XCircle } from "lucide-react";
// import { AuthContext } from "../../../AuthProvider/AuthProvider";

// const Booking = () => {
//   const {user} = useContext(AuthContext)
//   const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [deleteId, setDeleteId] = useState(null);
//   const [showConfirm, setShowConfirm] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);

  //  Fetch bookings
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_api}/bookings?email=${user.email}`);
        setBookings(data.data || []);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch bookings:", error);
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  //  Delete Booking
  const handleDelete = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_api}/bookings/${deleteId}`);
      setBookings(bookings.filter((b) => b._id !== deleteId));
      setShowConfirm(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 1500);
    } catch (error) {
      console.error("Failed to delete booking:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex justify-center items-center text-white text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center py-10 px-4">
      {/* Header */}
      <div className="flex flex-col items-center mb-8">
        <p className="text-yellow-500 italic mb-1">--- My Reservations ---</p>
        <h2 className="text-3xl font-bold text-white border-y border-gray-400 py-2">
          MY BOOKINGS
        </h2>
      </div>

      {/* Booking Summary */}
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-4xl">
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-700 font-medium text-lg">
            Total Bookings:{" "}
            <span className="font-semibold">{bookings.length}</span>
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-yellow-700 text-white">
              <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">User Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Guest</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr
                  key={booking._id}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="px-4 py-3 font-medium">{index + 1}</td>
                  <td className="px-4 py-3">{booking.name}</td>
                  <td className="px-4 py-3">{booking.email}</td>
                  <td className="px-4 py-3">{booking.guest}</td>
                  <td className="px-4 py-3">{booking.date}</td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => {
                        setDeleteId(booking._id);
                        setShowConfirm(true);
                      }}
                      className="bg-red-700 hover:bg-red-800 text-white p-2 rounded-md transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {bookings.length === 0 && (
            <p className="text-center text-gray-500 py-6">
              No bookings found.
            </p>
          )}
        </div>
      </div>

      {/*  Confirm Delete Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl text-center">
            <XCircle size={60} className="text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              Are you sure 
            </h3>
            <p className="text-lg font-normal mb-4 text-gray-500">you want to delete this booking?</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleDelete}
                className="bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-md"
              >
                Confirm
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/*  Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg">
            Booking deleted successfully 
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
