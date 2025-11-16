// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { motion, AnimatePresence } from "framer-motion";
// import { CheckCircle2, X } from "lucide-react";

// const EditManageItems = () => {
//     const { id } = useParams();

//     const [item, setItem] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [updating, setUpdating] = useState(false);
//     const [showModal, setShowModal] = useState(false);
//     const [successMessage, setSuccessMessage] = useState("");

//     // Fetch the item by id
//     useEffect(() => {
//         const fetchItem = async () => {
//             try {
//                 const res = await axios.get(`${import.meta.env.VITE_api}/menuItems`);
//                 const found = res.data?.data?.find((x) => x._id === id);
//                 setItem(found || {});
//             } catch (error) {
//                 console.error("Failed to fetch item:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchItem();
//     }, [id]);

//     // Handle update
//     const handleUpdate = async (e) => {
//         e.preventDefault();
//         setUpdating(true);

//         const form = e.target;
//         const name = form.name.value;
//         const category = form.category.value;
//         const price = parseFloat(form.price.value);
//         const recipe = form.recipe.value;
//         const imageFile = form.image.files[0];

//         let image = item.image;
//         const imgbbKey = "0a09262de568e9918e006ba7b68b098f";

//         try {
//             if (imageFile) {
//                 const formData = new FormData();
//                 formData.append("image", imageFile);
//                 const imgRes = await axios.post(
//                     `https://api.imgbb.com/1/upload?key=${imgbbKey}`,
//                     formData
//                 );
//                 if (!imgRes.data.success) throw new Error("Image upload failed");
//                 image = imgRes.data.data.display_url;
//             }

//             const updatedItem = { name, category, price, recipe, image };
//             const res = await axios.put(
//                 `${import.meta.env.VITE_api}/menuItems/${id}`,
//                 updatedItem
//             );

//             if (res.data?.success) {
//                 setSuccessMessage("Menu item updated successfully!");
//                 setShowModal(true);
//             } else {
//                 throw new Error("Update failed!");
//             }
//         } catch (error) {
//             console.error("Update error:", error);
//             setSuccessMessage(error.message || "Something went wrong!");
//             setShowModal(true);
//         } finally {
//             setUpdating(false);
//         }
//     };

//     // Skeleton Loader UI
//     if (loading) {
//         return (
//             <div className="min-h-screen bg-slate-900 flex flex-col items-center py-12 px-4">
//                 <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-4xl animate-pulse space-y-5">
//                     <div className="h-6 bg-gray-300 rounded w-1/3"></div>
//                     <div className="h-10 bg-gray-300 rounded w-full"></div>
//                     <div className="grid grid-cols-2 gap-4">
//                         <div className="h-10 bg-gray-300 rounded w-full"></div>
//                         <div className="h-10 bg-gray-300 rounded w-full"></div>
//                     </div>
//                     <div className="h-24 bg-gray-300 rounded w-full"></div>
//                     <div className="h-10 bg-gray-300 rounded w-full"></div>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-slate-900 flex flex-col items-center py-12 px-4">
//             <p className="text-center text-amber-600 italic text-sm mb-2">--- Update Item ---</p>

//             <h2 className="text-2xl md:text-3xl font-semibold text-white border-y border-gray-500 py-2 mb-8">
//                 EDIT ITEM
//             </h2>

//             <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-4xl">
//                 <form onSubmit={handleUpdate} className="space-y-5">
//                     {/* Recipe Name */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Recipe name*
//                         </label>
//                         <input
//                             type="text"
//                             name="name"
//                             defaultValue={item?.name}
//                             className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-amber-700 transition"
//                             required
//                         />
//                     </div>

//                     {/* Category & Price */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-1">
//                                 Category*
//                             </label>
//                             <select
//                                 name="category"
//                                 value={item?.category || ""}
//                                 onChange={(e) => setItem({ ...item, category: e.target.value })}
//                                 className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-amber-700 transition"
//                                 required
//                             >
//                                 <option value="">Select Category</option>
//                                 <option value="Salad">Salad</option>
//                                 <option value="Drink">Drink</option>
//                                 <option value="Popular">Popular</option>
//                                 <option value="Dessert">Dessert</option>
//                                 <option value="Pizza">Pizza</option>
//                                 <option value="Soup">Soup</option>
//                                 <option value="Offered">Offered</option>
//                             </select>
//                         </div>

//                         <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-1">
//                                 Price*
//                             </label>
//                             <input
//                                 type="number"
//                                 name="price"
//                                 defaultValue={item?.price}
//                                 className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-amber-700 transition"
//                                 required
//                             />
//                         </div>
//                     </div>

//                     {/* Recipe Details */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Recipe Details*
//                         </label>
//                         <textarea
//                             name="recipe"
//                             rows="4"
//                             defaultValue={item?.recipe}
//                             className="w-full px-4 py-2 border-2 border-gray-300 rounded-md hover:border-amber-700 focus:outline-none focus:border-amber-700 transition"
//                             required
//                         ></textarea>
//                     </div>

//                     {/* File Upload */}
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">
//                             Change Image (optional)
//                         </label>
//                         <input
//                             type="file"
//                             name="image"
//                             accept="image/*"
//                             className="block w-full text-gray-700 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-600 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-amber-700 file:text-white hover:file:bg-amber-800"
//                         />
//                         {item?.image && (
//                             <img
//                                 src={item.image}
//                                 alt={item.name}
//                                 className="w-24 h-24 rounded-md mt-3 object-cover"
//                             />
//                         )}
//                     </div>


//                     {/* Submit */}
//                     <button
//                         type="submit"
//                         disabled={updating}
//                         className="w-full bg-amber-700 text-white py-2 rounded-md font-medium hover:bg-amber-800 transition disabled:opacity-50"
//                     >
//                         {updating ? "Updating..." : "Update Item"}
//                     </button>
//                 </form>
//             </div>

//             {/* Success Modal */}
//             <AnimatePresence>
//                 {showModal && (
//                     <motion.div
//                         className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                     >
                        <motion.div
                            className="bg-white rounded-2xl shadow-xl w-80 text-center p-6 relative"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                        >
                            {/* Close Icon Button */}
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                            >
                                <X size={20} />
                            </button>

                            {/* Success Icon */}
                            <div className="flex justify-center mb-3">
                                <CheckCircle2 className="text-green-500 w-14 h-14" />
                            </div>

                            {/* Success Text */}
                            <h3 className="text-xl font-semibold text-gray-800 mb-1">Success!</h3>
                            <p className="text-gray-600 mb-4">{successMessage}</p>

                            {/* Close Button */}
                            <button
                                onClick={() => setShowModal(false)}
                                className="bg-amber-700 hover:bg-amber-800 text-white py-2 px-6 rounded-md font-medium"
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default EditManageItems;
