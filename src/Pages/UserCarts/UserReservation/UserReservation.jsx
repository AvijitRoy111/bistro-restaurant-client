import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const UserReservation = () => {
  return (
    <div className="bg-slate-800 text-gray-800 py-10 md:px-20">
      {/* ---Reservation--- */}
      <div className="flex flex-col items-center justify-center mb-8 space-y-4">
        <p className="text-center text-yellow-600 italic mb-2">---Reservation---</p>
        <hr className="border-2 border-gray-300 w-[350px] text-center" />
        <h2 className="text-center text-3xl font-bold tracking-wide text-white">BOOK A TABLE</h2>
        <hr className="border-2 border-gray-300 w-[350px] text-center" />
      </div>


      {/* Reservation Form */}
      <form className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Date */}
        <div className="flex flex-col">
          <label className="font-medium text-sm mb-1 text-white">Date*</label>
          <input
            type="date"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-yellow-600"
          />
        </div>

        {/* Time */}
        <div className="flex flex-col">
          <label className="font-medium text-sm mb-1 text-white">Time*</label>
          <input
            type="time"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-yellow-600"
          />
        </div>

        {/* Guest */}
        <div className="flex flex-col">
          <label className="font-medium text-sm mb-1 text-white">Guest*</label>
          <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-yellow-600">
            <option>1 Person</option>
            <option>2 Person</option>
            <option>3 Person</option>
            <option>4 Person</option>
            <option>5 Person</option>
          </select>
        </div>

        {/* Name */}
        <div className="flex flex-col md:col-span-1">
          <label className="font-medium text-sm mb-1 text-white">Name*</label>
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-yellow-600"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col md:col-span-1">
          <label className="font-medium text-sm mb-1 text-white">Phone*</label>
          <input
            type="tel"
            placeholder="Phone Number"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-yellow-600"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col md:col-span-1">
          <label className="font-medium text-sm mb-1 text-white">Email*</label>
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-yellow-600"
          />
        </div>
      </form>

      {/* Submit Button */}
      <div className="text-center mb-20">
        <button
          type="submit"
          className="bg-amber-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-yellow-700 transition"
        >
          Book A Table
        </button>
      </div>

      {/* ---Visit Us--- */}
      <div className="flex flex-col items-center justify-center mb-8 space-y-4">
        <p className="text-center text-yellow-600 italic mb-2">---Visit Us---</p>
        <hr className="border-2 border-gray-300 w-[350px] text-center" />
        <h2 className="text-center text-3xl font-bold tracking-wide text-white">OUR LOCATION</h2>
        <hr className="border-2 border-gray-300 w-[350px] text-center" />
      </div>

      {/* Location Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center mb-10">
        {/* Phone */}
        <div>
          <div className="bg-amber-700 text-white py-3">
            <FaPhoneAlt className="mx-auto text-2xl" />
          </div>
          <div className="bg-gray-50 py-6 h-[125px]">
            <h3 className="font-semibold mb-1">PHONE</h3>
            <p className="text-gray-600">+38 (012) 34 56 789</p>
          </div>
        </div>

        {/* Address */}
        <div>
          <div className="bg-amber-700 text-white py-3 ">
            <FaMapMarkerAlt className="mx-auto text-2xl" />
          </div>
          <div className="bg-gray-50 py-6 h-[125px]">
            <h3 className="font-semibold mb-1">ADDRESS</h3>
            <p className="text-gray-600">+38 (012) 34 56 789</p>
          </div>
        </div>

        {/* Working Hours */}
        <div>
          <div className="bg-amber-700 text-white py-3">
            <FaClock className="mx-auto text-2xl" />
          </div>
          <div className="bg-gray-50 py-6 h-[125px]">
            <h3 className="font-semibold mb-1">WORKING HOURS</h3>
            <p className="text-gray-600">Mon - Fri: 08:00 - 22:00</p>
            <p className="text-gray-600">Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReservation;
