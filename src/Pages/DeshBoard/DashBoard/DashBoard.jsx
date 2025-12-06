// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   PieChart,
//   Pie,
//   Cell,
//   ResponsiveContainer,
// } from "recharts";


// const DashBoard = () => {
//   const barData = [
//     { name: "Dessert", sold: 30 },
//     { name: "Pizza", sold: 35 },
//     { name: "Salad", sold: 20 },
//     { name: "Soup", sold: 25 },
//     { name: "Populler", sold: 35 },
//     { name: "Offer", sold: 15 },
//   ];

//   const pieData = [
//     { name: "Dessert", value: 21 },
//     { name: "Pizza", value: 21 },
//     { name: "Salad", value: 28 },
//     { name: "Soup", value: 31 },
//   ];

//   const COLORS = ["#0088FE", "#FF7F0E", "#FFBB28", "#FF4D4D"];




//   return (
//     <div className="bg-[#1E1E2E] min-h-screen text-gray-900 p-6 ">
//       <h2 className="text-xl font-semibold mb-6 text-white">Hi, Welcome Back!</h2>

//       {/* Top Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
//         <div className="bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-xl p-5 text-center shadow-md">
//           <h3 className="text-3xl font-bold">100</h3>
//           <p className="text-sm mt-1">Revenue</p>
//         </div>
//         <div className="bg-gradient-to-r from-yellow-400 to-orange-300 text-white rounded-xl p-5 text-center shadow-md">
//           <h3 className="text-3xl font-bold">150</h3>
//           <p className="text-sm mt-1">Customers</p>
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

     
    </div>
  )
}

export default DashBoard