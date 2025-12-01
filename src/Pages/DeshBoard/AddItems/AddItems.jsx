// import { useState } from "react";
// import axios from "axios";
// import { motion, AnimatePresence } from "framer-motion";
// import { CheckCircle2, X } from "lucide-react";

// export const AddItems = () => {
//   const [loading, setLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleAddMenuItems = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const form = e.target;
//     const name = form.name.value;
//     const category = form.category.value;
//     const price = parseFloat(form.price.value);
//     const recipe = form.recipe.value;
//     const imageFile = form.image.files[0];

//     const imgbbKey = "0a09262de568e9918e006ba7b68b098f";
 

//     try {
//       // 1️⃣ Upload image to imgbb
//       const formData = new FormData();
//       formData.append("image", imageFile);

//       const imgRes = await axios.post(
//         `https://api.imgbb.com/1/upload?key=${imgbbKey}`,
//         formData
//       );

//       if (!imgRes.data.success) throw new Error("Image upload failed");

//       const image = imgRes.data.data.display_url;

//       // Send data to backend using Axios
//       const menuItem = { name, category, price, recipe, image };
//       const res = await axios.post(`${import.meta.env.VITE_api}/menuItems`, menuItem);

//       if (res.data.success) {
//         setSuccessMessage("Menu item added successfully!");
//         setShowModal(true);
//         form.reset();
//       } else {
//         throw new Error("Failed to save data to database");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setSuccessMessage(error.message || "Something went wrong!");
//       setShowModal(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-900 flex flex-col items-center py-12 px-4">
//       <p className="text-center text-amber-600 italic text-sm mb-2">
//         ---What's new?---
//       </p>

//       <h2 className="text-2xl md:text-3xl font-semibold text-white border-y border-gray-500 py-2 mb-8">
//         ADD AN ITEM
//       </h2>

//       <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-4xl">
//         <form onSubmit={handleAddMenuItems} className="space-y-5">
//           {/* Recipe Name */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Recipe name*
//             </label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Recipe name"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
//               required
//             />
//           </div>

//           {/* Category & Price */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Category*
//               </label>
//               <select
//                 name="category"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
//                 required
//               >
//                 <option value="">Select Category</option>
//                 <option value="Salad">Salad</option>
//                 <option value="Drink">Drink</option>
//                 <option value="Popular">Popular</option>
//                 <option value="Dessert">Dessert</option>
//                 <option value="Pizza">Pizza</option>
//                 <option value="Soup">Soup</option>
//                 <option value="Offered">Offered</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Price*
//               </label>
//               <input
//                 type="number"
//                 name="price"
//                 placeholder="Price"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
//                 required
//               />
//             </div>
//           </div>

//           {/* Recipe Details */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Recipe Details*
//             </label>
//             <textarea
//               placeholder="Recipe Details"
//               name="recipe"
//               rows="4"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
//               required
//             ></textarea>
//           </div>

//           {/* File Upload */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Choose File*
//             </label>
//             <input
//               type="file"
//               name="image"
//               accept="image/*"
              className="block w-full text-gray-700 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-600 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-amber-700 file:text-white hover:file:bg-amber-800"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-700 text-white py-2 rounded-md font-medium hover:bg-amber-800 transition disabled:opacity-50"
          >
            {loading ? <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-800"></div>
              <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-800"></div>
              <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-800"></div>
            </div> : "Add Item"}
          </button>
        </form>
      </div>

      {/* Custom Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl w-80 text-center p-6 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              {/* Close Button */}
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

              {/* Success Header */}
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                Success!
              </h3>

              {/* Message */}
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

      {/* Loading Spinner */}
      {loading && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="w-16 h-16 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default AddItems;
