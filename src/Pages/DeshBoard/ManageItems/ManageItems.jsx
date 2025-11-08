import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ManageItems = () => {
  const items = [
    { id: 1, name: "Roast Duck Breast", price: "$14.5" },
    { id: 2, name: "Tuna Niçoise", price: "$14.5" },
    { id: 3, name: "Escalope de Veau", price: "$14.5" },
    { id: 4, name: "Chicken and Walnut Salad", price: "$14.5" },
    { id: 5, name: "Fish Parmentier", price: "$14.5" },
    { id: 6, name: "Roasted Pork Belly", price: "$14.5" },
  ];

  return (
    <div className="min-h-screen bg-slate-900 py-10 px-4 text-gray-900 flex flex-col items-center">
      {/* Header Text */}
       <div className="flex flex-col items-center justify-center mb-8 space-y-4">
        <p className="text-center text-yellow-600 italic mb-2">---Hurry Up!---</p>
        <hr className="border-2 border-gray-300 w-[350px] text-center" />
        <h2 className="text-center text-3xl font-bold tracking-wide text-white">MANAGE ALL ITEMS</h2>
        <hr className="border-2 border-gray-300 w-[350px] text-center" />
      </div>

      {/* Table Container */}
      <div className="bg-white shadow-md rounded-md max-w-5xl w-full p-8">
        <h3 className="text-xl font-semibold mb-6">
          TOTAL ITEMS: <span className="font-bold">{items.length}</span>
        </h3>



        {/* Table Header */}
        <div className="grid grid-cols-6 font-semibold text-white bg-yellow-700 py-3 px-4 rounded-t-md">
          <div>#</div>
          <div>ITEM IMAGE</div>
          <div className="col-span-2">ITEM NAME</div>
          <div>PRICE</div>
          <div className="text-center">ACTION</div>
        </div>

        {/* Table Rows */}
        <div className="divide-y divide-gray-200">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="grid grid-cols-6 items-center py-4 px-4 hover:bg-gray-50 transition"
            >
              <div>{index + 1}</div>

              {/* Item Image Placeholder */}
              <div>
                <div className="w-10 h-10 bg-gray-300 rounded-md mx-auto"></div>
              </div>

              <div className="col-span-2">{item.name}</div>
              <div>{item.price}</div>

              {/* Action Buttons */}
              <div className="flex justify-center gap-2">
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white p-2 rounded-md">
                  <FaEdit />
                </button>
                <button className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-md">
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
