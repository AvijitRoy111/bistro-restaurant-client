import React from "react";

export const AddItems = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center py-12 px-4">
      {/* Top Text */}
      <p className="text-center text-amber-600 italic text-sm mb-2">
        ---What's new?---
      </p>

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-white border-y border-gray-500 py-2 mb-8">
        ADD AN ITEM
      </h2>

      {/* Form Container */}
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-4xl">
        <form className="space-y-5">
          {/* Recipe Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Recipe name*
            </label>
            <input
              type="text"
              placeholder="Recipe name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
              required
            />
          </div>

          {/* Category & Price */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category*
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
                required
              >
                <option value="">Category</option>
                <option value="Salad">Salad</option>
                <option value="Pizza">Pizza</option>
                <option value="Soup">Soup</option>
                <option value="Dessert">Dessert</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price*
              </label>
              <input
                type="number"
                placeholder="Price"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
                required
              />
            </div>
          </div>

          {/* Recipe Details */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Recipe Details*
            </label>
            <textarea
              placeholder="Recipe Details"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
              required
            ></textarea>
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Choose File
            </label>
            <input
              type="file"
              className="block w-full text-gray-700 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-600 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-amber-700 file:text-white hover:file:bg-amber-800"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-amber-700 text-white py-2 rounded-md font-medium hover:bg-amber-800 transition"
          >
            Add Item 🍽️
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
