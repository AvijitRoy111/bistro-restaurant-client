import { useEffect, useState, useContext } from "react";
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { CheckCircle, Trash2, XCircle } from "lucide-react";
import { CartContext } from "../../Components/Carts/CartContext";
import { AuthContext } from "../../AuthProvider/AuthProvider";

dayjs.extend(relativeTime);

const ShopCart = () => {
  const {user}=useContext(AuthContext)
  const [cart, setCart] = useState([]);
  const [timeNow, setTimeNow] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);

  const { fetchCartCount } = useContext(CartContext);

  useEffect(() => {
    const timer = setInterval(() => setTimeNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const fetchCart = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_api}/carts?email=${user.email}`);
      setCart(res.data);
    } catch (err) {
      console.error("Error fetching cart:", err);
    }
  };

  useEffect(() => {
    fetchCart();

    //  ManageOrder status update
    const handleStatusUpdate = (e) => {
      const { name, status } = e.detail;
      setCart((prev) =>
        prev.map((item) =>
          item.name === name ? { ...item, status } : item
        )
      );
    };

    window.addEventListener("orderStatusUpdated", handleStatusUpdate);
    return () =>
      window.removeEventListener("orderStatusUpdated", handleStatusUpdate);
  }, []);

  // Place order DB to pending order 
  const handlePlaceOrder = async (item) => {
    try {
      const orderData = {
        userName: item.userName,
        userEmail: item.userEmail,
        name: item.name,
        price: item.price,
        recipe: item.recipe,
        status: "pending",
        addedAt: new Date(),
      };

      await axios.post(`${import.meta.env.VITE_api}/orders`, orderData);

      setCart((prev) =>
        prev.map((i) =>
          i._id === item._id ? { ...i, status: "ordered" } : i
        )
      );

      setSelectedOrder(item);
      setShowModal(true);
    } catch (err) {
      console.error("Error placing order:", err);
    }
  };

  // Delete button click → confirm modal open
  const handleDeleteClick = (id) => {
    setDeleteItemId(id);
    setShowConfirmModal(true);
  };

  // Confirm delete → actually delete from DB
  const confirmDelete = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_api}/carts/${deleteItemId}`);
      setCart((prev) => prev.filter((item) => item._id !== deleteItemId));
      setShowConfirmModal(false);
      setShowDeleteSuccess(true);
      await fetchCartCount();

      // Success alert auto close
      setTimeout(() => setShowDeleteSuccess(false), 2000);
    } catch (err) {
      console.error("Error deleting item:", err);
    }
  };

  return (
    <div className="max-w-6xl mx-auto h-screen p-4 pt-6 bg-slate-900 pb-10">
      <h2 className="text-3xl font-bold mb-6 text-white">
        Your Cart Items{" "}
        <span className="bg-amber-700 text-white text-xl rounded-full py-2 px-3">
          {cart.length}
        </span>
      </h2>

      <div className="overflow-x-auto bg-white/90 rounded-2xl shadow-md border border-gray-200">
        <table className="min-w-[900px] w-full text-sm text-left whitespace-nowrap">
          <thead className="bg-amber-600 text-white text-sm uppercase">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">Menu</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3 text-center">Status</th>
              <th className="px-4 py-3 text-center">Added</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.length ? (
              cart.map((item, i) => (
                <tr key={item._id} className="border-b hover:bg-amber-50/80">
                  <td className="px-4 py-3">{i + 1}</td>
                  <td className="px-4 py-3">
                    <p>{item.userName}</p>
                    <p className="text-xs text-gray-500">{item.userEmail}</p>
                  </td>
                  <td className="px-4 py-3">{item.name}</td>
                  <td className="px-4 py-3">${item.price}</td>
                  <td className="px-4 py-3 text-center">
                    {item.status === "ordered" ? (
                      <span className="px-3 py-1 bg-blue-500 text-white rounded-lg text-xs">
                        Ordered
                      </span>
                    ) : item.status === "confirmed" ? (
                      <span className="px-3 py-1 bg-green-600 text-white rounded-lg text-xs">
                        Confirmed
                      </span>
                    ) : item.status === "canceled" ? (
                      <span className="px-3 py-1 bg-red-500 text-white rounded-lg text-xs">
                        Canceled
                      </span>
                    ) : (
                      <button
                        onClick={() => handlePlaceOrder(item)}
                        className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 text-xs"
                      >
                        Place Order
                      </button>
                    )}
                  </td>
                  <td className="px-4 py-3 text-center text-gray-500">
                    {dayjs(item.addedAt).from(timeNow)}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => handleDeleteClick(item._id)}
                      className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 text-xs flex items-center gap-1 mx-auto"
                    >
                      <Trash2 size={14} /> Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-6 text-gray-500 font-medium"
                >
                  No items in your cart 🥲
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Order Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div
            className="bg-white rounded-2xl shadow-xl p-6 text-center w-[90%] max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <CheckCircle size={60} className="text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Order Placed Successfully!
            </h3>
            <p className="text-gray-500 mb-4">
              {selectedOrder?.name
                ? `${selectedOrder.name} has been ordered successfully.`
                : ""}
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Confirm Delete Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 text-center w-[90%] max-w-sm">
            <XCircle size={60} className="text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Are you sure you want to delete this item?
            </h3>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmDelete}
                className="px-5 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-5 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/*  Delete Success Toast */}
      {showDeleteSuccess && (
        <div className="fixed bottom-6 right-6 bg-white text-black border-black/40 border-2 px-6 py-3 rounded-lg shadow-lg animate-fade-in">
          Item deleted successfully 
        </div>
      )}
    </div>
  );
};

export default ShopCart;
