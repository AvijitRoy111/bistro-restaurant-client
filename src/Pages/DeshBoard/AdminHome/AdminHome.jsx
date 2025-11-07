import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { Edit2, Trash2 } from "lucide-react"; // ✨ Action icons

export const AdminHome = () => {
  const barData = [
    { name: "Dessert", sold: 30 },
    { name: "Pizza", sold: 35 },
    { name: "Salad", sold: 20 },
    { name: "Soup", sold: 25 },
    { name: "Populler", sold: 35 },
    { name: "Offer", sold: 15 },
  ];

  const pieData = [
    { name: "Dessert", value: 21 },
    { name: "Pizza", value: 21 },
    { name: "Salad", value: 28 },
    { name: "Soup", value: 31 },
  ];

  const COLORS = ["#0088FE", "#FF7F0E", "#FFBB28", "#FF4D4D"];

  const pendingOrders = [
    {
      id: 1,
      img: "https://i.pravatar.cc/40?img=1",
      name: "Avijit Roy",
      email: "avijit@example.com",
      orderName: "Pizza",
      quantity: 2,
      total: 500,
      status: "Processing",
    },
    {
      id: 2,
      img: "https://i.pravatar.cc/40?img=2",
      name: "Mim Akter",
      email: "mim@example.com",
      orderName: "Salad",
      quantity: 1,
      total: 220,
      status: "Processing",
    },
    {
      id: 3,
      img: "https://i.pravatar.cc/40?img=3",
      name: "Rafiul Hasan",
      email: "rafi@example.com",
      orderName: "Dessert",
      quantity: 3,
      total: 600,
      status: "Processing",
    },
  ];

  return (
    <div className="bg-[#1E1E2E] min-h-screen text-gray-900 p-6 ">
      <h2 className="text-xl font-semibold mb-6 text-white">Hi, Welcome Back!</h2>

      {/* Top Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
        <div className="bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-xl p-5 text-center shadow-md">
          <h3 className="text-3xl font-bold">100</h3>
          <p className="text-sm mt-1">Revenue</p>
        </div>
        <div className="bg-gradient-to-r from-yellow-400 to-orange-300 text-white rounded-xl p-5 text-center shadow-md">
          <h3 className="text-3xl font-bold">150</h3>
          <p className="text-sm mt-1">Customers</p>
        </div>
        <div className="bg-gradient-to-r from-pink-400 to-red-400 text-white rounded-xl p-5 text-center shadow-md">
          <h3 className="text-3xl font-bold">10</h3>
          <p className="text-sm mt-1">Products</p>
        </div>
        <div className="bg-gradient-to-r from-blue-400 to-sky-400 text-white rounded-xl p-5 text-center shadow-md">
          <h3 className="text-3xl font-bold">50</h3>
          <p className="text-sm mt-1">Orders</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white p-5 rounded-xl shadow-sm">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sold" fill="#8884d8" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-5 rounded-xl shadow-sm flex justify-center items-center">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pending Orders Table */}
      <div className="mt-10 bg-white rounded-xl shadow-sm p-5">
        <h1 className="text-xl font-bold mb-4 text-gray-800">
          Pending Orders
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-600">
                <th className="p-3 border-b">#</th>
                <th className="p-3 border-b">User</th>
                <th className="p-3 border-b">Email</th>
                <th className="p-3 border-b">Order Name</th>
                <th className="p-3 border-b">Qty</th>
                <th className="p-3 border-b">Total</th>
                <th className="p-3 border-b">Status</th>
                <th className="p-3 border-b text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingOrders.map((order, index) => (
                <tr
                  key={order.id}
                  className="hover:bg-gray-50 text-sm transition-all"
                >
                  <td className="p-3 border-b">{index + 1}</td>
                  <td className="p-3 border-b flex items-center gap-2">
                    <img
                      src={order.img}
                      alt={order.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="font-medium">{order.name}</span>
                  </td>
                  <td className="p-3 border-b">{order.email}</td>
                  <td className="p-3 border-b">{order.orderName}</td>
                  <td className="p-3 border-b">{order.quantity}</td>
                  <td className="p-3 border-b">৳{order.total}</td>
                  <td className="p-3 border-b">
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs">
                      {order.status}
                    </span>
                  </td>
                  <td className="p-3 border-b flex justify-center gap-3">
                    <button className="text-blue-500 hover:text-blue-700">
                      <Edit2 size={18} />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <Trash2 size={18} />
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
