import { useEffect, useState } from "react";
import axios from "axios";

const ManageOrder = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const res = await axios.get(`${import.meta.env.VITE_api}/orders`);
    setOrders(res.data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // status
  const handleStatus = async (id, status, name) => {
    await axios.patch(`${import.meta.env.VITE_api}/orders/${id}`, { status });

    setOrders((prev) =>
      prev.map((order) =>
        order._id === id ? { ...order, status } : order
      )
    );

    // ShopCart  status  update
    window.dispatchEvent(
      new CustomEvent("orderStatusUpdated", { detail: { name, status } })
    );
  };

  

  

  return (
    <div className="max-w-6xl mx-auto h-screen p-4 pt-6 bg-slate-900 pb-10 text-white">
      <h2 className="text-3xl font-bold mb-6">
        Manage Orders{" "}
        <span className="bg-amber-700 text-white text-xl rounded-full py-2 px-3">
          {orders.length}
        </span>
      </h2>

      <div className="overflow-x-auto bg-white/95 text-black rounded-2xl shadow-md border border-gray-200">
        <table className="min-w-[700px] w-full text-sm text-left whitespace-nowrap">
          <thead className="bg-amber-600 text-white text-sm uppercase">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">Menu</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.length ? (
              orders.map((order, i) => (
                <tr key={order._id} className="border-b hover:bg-amber-50/80">
                  <td className="px-4 py-3">{i + 1}</td>
                  <td className="px-4 py-3">
                    <p>{order.userName}</p>
                    <p className="text-xs text-gray-500">{order.userEmail}</p>
                  </td>
                  <td className="px-4 py-3">{order.name}</td>
                  <td className="px-4 py-3">${order.price}</td>
                  <td>
                    <span  className=" px-4 py-2  bg-green-600 text-white rounded-lg text-base text-center">{order.status}</span>
                  </td>
                  <td className="px-4 py-3 text-center space-x-2">
                    <button
                      onClick={() =>
                        handleStatus(order._id, "confirmed", order.name)
                      }
                      className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 text-xs"
                    >
                      ✓
                    </button>
                    <button
                      onClick={() =>
                        handleStatus(order._id, "canceled", order.name)
                      }
                      className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-xs"
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="text-center py-6 text-gray-500 font-medium"
                >
                  No pending orders 💤
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrder;
