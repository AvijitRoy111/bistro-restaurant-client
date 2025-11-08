import { FaStar, FaRocket } from "react-icons/fa";

const AddReview = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-800 py-10 px-6 flex flex-col items-center">
      {/* ---Sharing is Caring--- */}
      <div className="flex flex-col items-center justify-center mb-8 space-y-4">
        <p className="text-center text-yellow-600 italic mb-2"> ---Sharing is Caring!!---</p>
        <hr className="border-2 border-gray-300 w-[350px] text-center" />
        <h2 className="text-center text-3xl font-bold tracking-wide text-white"> GIVE A REVIEW...</h2>
        <hr className="border-2 border-gray-300 w-[350px] text-center" />
      </div>

      {/* Review Card */}
      <div className="bg-white/70 w-full max-w-2xl rounded-md shadow-md p-10">
        <h3 className="text-center text-xl font-semibold mb-4">RATE US!</h3>

        {/* Rating Stars */}
        <div className="flex justify-center mb-8 text-gray-400 space-x-2">
          <FaStar className="text-3xl hover:text-yellow-500 cursor-pointer transition" />
          <FaStar className="text-3xl hover:text-yellow-500 cursor-pointer transition" />
          <FaStar className="text-3xl hover:text-yellow-500 cursor-pointer transition" />
          <FaStar className="text-3xl hover:text-yellow-500 cursor-pointer transition" />
          <FaStar className="text-3xl hover:text-yellow-500 cursor-pointer transition" />
        </div>

        {/* Review Form */}
        <form className="space-y-6">
          {/* Recipe name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Which recipe you liked most?
            </label>
            <input
              type="text"
              placeholder="Recipe you liked most"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-yellow-600"
            />
          </div>
          {/* image */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Do you have any Image for us?
            </label>
            <input
              type="text"
              placeholder="Image URL"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-yellow-600"
            />
          </div>

          {/* Suggestion */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Do you have any suggestion for us?
            </label>
            <input
              type="text"
              placeholder="Suggestion"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-yellow-600"
            />
          </div>

          {/* Detail review */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Kindly express your care in a short way.
            </label>
            <textarea
              rows="4"
              placeholder="Review in detail"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-yellow-600"
            ></textarea>
          </div>

          {/* Submit button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-amber-700 text-white px-6 py-2 rounded-md font-medium hover:bg-yellow-700 transition flex items-center justify-center mx-auto gap-2"
            >
              Send Review <FaRocket className="text-sm" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
