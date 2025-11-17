// import { useEffect, useState } from "react";
// import axios from "axios";
// import { FaEdit, FaTrashAlt } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";
// import { LaptopMinimalCheck, Trash } from "lucide-react";

// const ManageItems = () => {
//   const [items, setItems] = useState([]);
//   const [deleteId, setDeleteId] = useState(null);
//   const [showConfirm, setShowConfirm] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [page, setPage] = useState(1);
//   const [limit, setLimit] = useState(10);
//   const [totalPages, setTotalPages] = useState(1);

//   // ✅ Fetch Items
//   const fetchItems = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get(`${import.meta.env.VITE_api}/menuItems`);
//       const fetchedItems = res.data?.data;

//       if (Array.isArray(fetchedItems)) {
//         setItems(fetchedItems);
//         setTotalPages(Math.ceil(fetchedItems.length / limit));
//       } else {
//         setItems([]);
//       }
//     } catch (error) {
//       console.error("Failed to fetch menu items:", error);
//       setItems([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   // ✅ Delete Menu Item (Fixed)
//   const handleDelete = async () => {
//     try {
//       const res = await axios.delete(`${import.meta.env.VITE_api}/menuItems/${deleteId}`);
//       if (res.data?.success) {
//         setItems((prev) => prev.filter((item) => item._id !== deleteId));
//         setShowConfirm(false);
//         setShowSuccess(true);
//         const updatedTotalPages = Math.ceil((items.length - 1) / limit);
//         setTotalPages(updatedTotalPages || 1);
//         if (page > updatedTotalPages) setPage(updatedTotalPages || 1);
//       } else {
//         console.error("Delete failed:", res.data);
//       }
//     } catch (error) {
//       console.error("Delete failed:", error);
//     }
//   };

//   const paginatedItems = items.slice((page - 1) * limit, page * limit);

//   return (
//     <div className="min-h-screen bg-slate-900 py-10 px-4 flex flex-col items-center">
//       {/* Header */}
//       <div className="flex flex-col items-center justify-center mb-8 space-y-4">
//         <p className="text-center text-yellow-600 italic mb-2">--- Hurry Up! ---</p>
//         <hr className="border-2 border-gray-300 w-[350px]" />
//         <h2 className="text-center text-3xl font-bold tracking-wide text-white">
//           MANAGE ALL ITEMS
//         </h2>
//         <hr className="border-2 border-gray-300 w-[350px]" />
//       </div>

//       {/* Table */}
//       <div className="bg-white shadow-md rounded-md max-w-6xl w-full p-8">
//         <div className="flex justify-between items-center mb-6">
//           <h3 className="text-xl font-semibold">
//             TOTAL ITEMS: <span className="font-bold">{items?.length}</span>
//           </h3>

//           {/* Limit Selector */}
//           <div className="flex items-center gap-2">
//             <label htmlFor="limit" className="text-gray-700 font-medium">
//               Show:
//             </label>
//             <select
//               id="limit"
//               value={limit}
//               onChange={(e) => {
//                 const newLimit = parseInt(e.target.value);
//                 setLimit(newLimit);
//                 setTotalPages(Math.ceil(items.length / newLimit));
//                 setPage(1);
//               }}
//               className="border border-gray-300 rounded-md px-2 py-1"
//             >
//               {[5, 10, 20, 30].map((num) => (
//                 <option key={num} value={num}>
//                   {num}
//                 </option>
//               ))}
//             </select>
//             <span className="text-gray-700">items per page</span>
//           </div>
//         </div>

//         {/* Table Header */}
//         <div className="grid grid-cols-6 font-semibold text-white bg-yellow-700 py-3 px-4 rounded-t-md">
//           <div>#</div>
//           <div>IMAGE</div>
//           <div>CATEGORY</div>
//           <div>NAME</div>
//           <div>PRICE</div>
//           <div className="text-center">ACTION</div>
//         </div>

//         {/* Table Body */}
//         <div className="divide-y divide-gray-200">
//           {loading ? (
//             // 🦴 Skeleton Loading
//             Array.from({ length: limit }).map((_, index) => (
//               <div
//                 key={index}
//                 className="grid grid-cols-6 items-center py-4 px-4 animate-pulse"
//               >
//                 <div className="h-4 bg-gray-300 rounded w-6"></div>
//                 <div className="w-12 h-12 bg-gray-300 rounded-md mx-auto"></div>
//                 <div className="h-4 bg-gray-300 rounded w-24"></div>
//                 <div className="h-4 bg-gray-300 rounded w-32"></div>
//                 <div className="h-4 bg-gray-300 rounded w-16"></div>
//                 <div className="flex justify-center gap-2">
//                   <div className="w-8 h-8 bg-gray-300 rounded-md"></div>
//                   <div className="w-8 h-8 bg-gray-300 rounded-md"></div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             paginatedItems.map((item, index) => (
//               <div
//                 key={item._id}
//                 className="grid grid-cols-6 items-center py-4 px-4 hover:bg-gray-50 transition"
//               >
//                 <div>{(page - 1) * limit + index + 1}</div>
//                 <div>
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-12 h-12 rounded-md object-cover mx-auto"
//                   />
//                 </div>
//                 <div>{item.category}</div>
//                 <div>{item.name}</div>
//                 <div>${item.price}</div>
//                 <div className="flex justify-center gap-2">
//                   <Link to={`/Edite-ManageItems/${item._id}`}>
//                     <button className="bg-yellow-600 hover:bg-yellow-700 text-white p-2 rounded-md">
//                       <FaEdit />
//                     </button>
//                   </Link>
//                   <button
//                     onClick={() => {
//                       setDeleteId(item._id);
//                       setShowConfirm(true);
//                     }}
//                     className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-md"
//                   >
//                     <Trash />
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>

//         {/* Pagination */}
//         {!loading && (
//           <div className="flex justify-center items-center gap-3 mt-6">
//             <button
//               disabled={page === 1}
//               onClick={() => setPage(page - 1)}
//               className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-md disabled:opacity-50"
//             >
//               Previous
//             </button>
//             <span className="font-semibold">
//               Page {page} of {totalPages}
//             </span>
//             <button
//               disabled={page === totalPages}
//               onClick={() => setPage(page + 1)}
//               className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-md disabled:opacity-50"
//             >
//               Next
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Delete Confirmation Modal */}
//       <AnimatePresence>
//         {showConfirm && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.9 }}
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//           >
//             <div className="bg-white rounded-xl shadow-xl p-6 text-center w-80 flex flex-col items-center justify-center">
//               <div className="text-red-600 text-4xl mb-3 text-center"><Trash  size={80}/></div>
//               <h3 className="text-lg font-semibold mb-2">Are you sure?</h3>
//               <p className="text-gray-600 mb-4">
//                 Do you really want to delete this item? This action cannot be undone.
//               </p>
//               <div className="flex justify-center gap-3">
//                 <button
//                   onClick={() => setShowConfirm(false)}
//                   className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleDelete}
//                   className="bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-md"
//                 >
//                   Confirm
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/*  Success Modal */}
//       <AnimatePresence>
//         {showSuccess && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//           >
//             <div className="bg-white rounded-xl shadow-xl p-6 text-center w-80 flex flex-col justify-center items-center">
//               <div className="text-green-600 text-4xl mb-3"><LaptopMinimalCheck  size={60}/></div>
//               <h3 className="text-lg font-semibold mb-2">Deleted Successfully!</h3>
//               <p className="text-gray-600 mb-4">The menu item has been removed.</p>
//               <button
//                 onClick={() => setShowSuccess(false)}
//                 className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
//               >
//                 Close
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
    </div>
  );
};

export default ManageItems;
