// import { useState } from "react";
// import { FaStar,  FaCheckCircle } from "react-icons/fa";
// import axios from "axios";

// const AddReview = () => {
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);
//   const [success, setSuccess] = useState(false);

//   const handleSubmitReview = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const recipe = form.recipe.value;
//     const name = form.name.value;
//     const image = form.image.value;
//     const details = form.description.value;

//     const review = { name, image, details, rating, recipe };

//     try {
//       const { data } = await axios.post(
//         `${import.meta.env.VITE_api}/reviews`,
//         review
//       );
//       console.log(data)
     
//       if (data?.success) {
//         setSuccess(true);
//         form.reset();
//         setRating(0);
//       }
//     } catch (error) {
//       console.error("Review post failed:", error);
//       alert("Failed to submit review. Try again!");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-slate-900 text-gray-800 py-10 px-6 flex flex-col items-center">
//       {/* Header */}
//       <div className="flex flex-col items-center justify-center mb-8 space-y-4">
//         <p className="text-center text-yellow-600 italic mb-2">
//           ---Sharing is Caring!!---
//         </p>
//         <hr className="border-2 border-gray-300 w-[350px]" />
//         <h2 className="text-center text-3xl font-bold tracking-wide text-white">
//           GIVE A REVIEW...
//         </h2>
//         <hr className="border-2 border-gray-300 w-[350px]" />
//       </div>

//       {/* Review Card */}
//       <div className="bg-white/70 w-full max-w-2xl rounded-md shadow-md p-10">
//         <h3 className="text-center text-xl font-semibold mb-4">RATE US!</h3>

        {/* Rating Stars */}
        <div className="flex justify-center mb-8 text-gray-400 space-x-2">
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            return (
              <FaStar
                key={index}
                className={`text-3xl cursor-pointer transition ${
                  starValue <= (hover || rating)
                    ? "text-yellow-500"
                    : "text-gray-400"
                }`}
                onClick={() => setRating(starValue)}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(rating)}
              />
            );
          })}
        </div>

        {/* Review Form */}
        <form onSubmit={handleSubmitReview} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">
              Which recipe you liked most?
            </label>
            <input
              type="text"
              name="recipe"
              required
              placeholder="Recipe you liked most"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-yellow-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Write your name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-yellow-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Your Image URL</label>
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-yellow-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Kindly express your care in a short way.
            </label>
            <textarea
              rows="4"
              name="description"
              required
              placeholder="Review in detail"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-yellow-600"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-amber-700 text-white px-6 py-2 rounded-md font-medium hover:bg-yellow-700 transition flex items-center justify-center mx-auto gap-2"
            >
              Send Review 
            </button>
          </div>
        </form>
      </div>

      {/* Success Modal */}
      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white rounded-xl p-8 text-center shadow-lg max-w-sm mx-auto animate-fadeIn">
            <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Review Submitted Successfully!
            </h3>
            <p className="text-gray-600 mb-4">
              Thank you for sharing your feedback 
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="bg-amber-700 text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddReview;
