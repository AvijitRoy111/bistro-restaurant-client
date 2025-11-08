import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const ShopCart = () => {
  const [cart, setCart] = useState([]);
  const [timeNow, setTimeNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTimeNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_api}/carts`);
        setCart(res.data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };
    fetchCart();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-4 pt-6 bg-slate-900 pb-10">
      <h2 className="text-3xl font-bold mb-6 text-white">
        Your Cart Items{" "}
        <span className="bg-amber-700 text-white text-xl rounded-full py-2 px-3">
          {cart.length}
        </span>
      </h2>

      {/*  Scrollable Table Wrapper */}
      <div className="overflow-x-auto bg-white/90 rounded-2xl shadow-md border border-gray-200">
        <table className="min-w-[800px] w-full text-sm text-left whitespace-nowrap">
          {/*  whitespace-nowrap = prevent text from wrapping */}
          <thead className="bg-amber-600 text-white text-sm uppercase">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">User Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Menu Name</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3 text-center">Place</th>
              <th className="px-4 py-3 text-center">Added</th>
            </tr>
          </thead>

          <tbody>
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <tr
                  key={item._id}
                  className="border-b hover:bg-amber-50/80 transition"
                >
                  <td className="px-4 py-3 font-semibold text-gray-700">
                    {index + 1}
                  </td>
                  <td className="px-4 py-3">{item.userName}</td>
                  <td className="px-4 py-3">{item.userEmail}</td>
                  <td className="px-4 py-3 font-medium text-gray-800">
                    {item.name}
                  </td>
                  <td className="px-4 py-3">${item.price}</td>
                  <td className="px-4 py-3 text-center">
                    <button className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 text-xs">
                      Place Order
                    </button>
                  </td>
                  <td className="px-4 py-3 text-center text-gray-500">
                    {dayjs(item.addedAt).from(timeNow)}
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
    </div>
  );
};

export default ShopCart;
