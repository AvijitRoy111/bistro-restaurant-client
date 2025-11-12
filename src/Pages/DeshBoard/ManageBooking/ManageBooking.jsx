import React, { useEffect, useState } from "react";
import axios from "axios";
import { Trash2, Check, X, XCircle } from "lucide-react";

const ManageBooking = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteId, setDeleteId] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  //  Fetch Bookings
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_api}/bookings`);
        setBookings(data.data || []);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch bookings:", error);
        setLoading(false);
      }
    };
    fetchBookings();
  }, []);

  //  Handle Delete
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

  //  Handle Status Change
  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.patch(`${import.meta.env.VITE_api}/bookings/${id}`, {
        status: newStatus,
      });
      setBookings((prev) =>
        prev.map((b) => (b._id === id ? { ...b, status: newStatus } : b))
      );
    } catch (error) {
      console.error("Failed to update status:", error);
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
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center py-12 px-4">
      <h2 className="text-3xl font-bold border-b-2 border-yellow-600 pb-2 mb-6">
        MANAGE ALL BOOKINGS
      </h2>

      <div className="bg-white text-gray-800 shadow-lg rounded-2xl p-6 w-full max-w-5xl">
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-medium">
            Total Bookings:{" "}
            <span className="text-yellow-700 font-semibold">{bookings.length}</span>
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-yellow-700 text-white">
              <tr>
                <th className="py-3 px-4">SN</th>
                <th className="py-3 px-4">USER NAME</th>
                <th className="py-3 px-4">EMAIL</th>
                <th className="py-3 px-4">GUEST</th>
                <th className="py-3 px-4">DATE</th>
                <th className="py-3 px-4">STATUS</th>
                <th className="py-3 px-4 text-center">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr
                  key={booking._id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-4">{index + 1}</td>
                  <td className="py-3 px-4">{booking.name}</td>
                  <td className="py-3 px-4">{booking.email}</td>
                  <td className="py-3 px-4">{booking.guest}</td>
                  <td className="py-3 px-4">{booking.date}</td>
                  <td
                    className={`py-3 px-4 font-semibold ${
                      booking.status === "Pending"
                        ? "text-yellow-700"
                        : booking.status === "Done"
                        ? "text-green-700"
                        : "text-red-700"
                    }`}
                  >
                    {booking.status}
                  </td>
                  <td className="py-3 px-4 text-center space-x-2">
                    <button
                      onClick={() => handleStatusChange(booking._id, "Done")}
                      className="bg-green-700 hover:bg-green-800 text-white p-2 rounded-full"
                    >
                      <Check size={16} />
                    </button>
                    <button
                      onClick={() => handleStatusChange(booking._id, "Cancel")}
                      className="bg-yellow-700 hover:bg-yellow-800 text-white p-2 rounded-full"
                    >
                      <X size={16} />
                    </button>
                    <button
                      onClick={() => {
                        setDeleteId(booking._id);
                        setShowConfirm(true);
                      }}
                      className="bg-red-700 hover:bg-red-800 text-white p-2 rounded-full"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {bookings.length === 0 && (
            <p className="text-center py-4 text-gray-500">No bookings found.</p>
          )}
        </div>
      </div>

      {/* Confirm Delete Modal */}
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

export default ManageBooking;
