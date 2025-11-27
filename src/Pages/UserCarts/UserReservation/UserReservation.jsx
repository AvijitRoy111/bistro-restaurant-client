// import { useState } from "react";
// import axios from "axios";
// import { FaPhoneAlt, FaMapMarkerAlt, FaClock, FaCheckCircle } from "react-icons/fa";

// const UserReservation = () => {
//   const [success, setSuccess] = useState(false);

//   const handleSubmitReservation = async (e) => {
//     e.preventDefault();
//     const form = e.target;

//     // Get form data
//     const date = form.date.value;
//     const timeInput = form.time.value; 
//     const guest = form.guest.value;
//     const name = form.name.value;
//     const phone = form.phone.value;
//     const email = form.email.value;

//     //  Convert time to 12-hour format with AM/PM
//     const [hour, minute] = timeInput.split(":");
//     const hourNum = parseInt(hour, 10);
//     const ampm = hourNum >= 12 ? "PM" : "AM";
//     const hour12 = hourNum % 12 === 0 ? 12 : hourNum % 12;
//     const formattedTime = `${hour12}:${minute} ${ampm}`;

//     // Send data with formatted time
//     const bookingData = { date, time: formattedTime, guest, name, phone, email };

//     try {
//       const { data } = await axios.post(
//         `${import.meta.env.VITE_api}/bookings`,
//         bookingData
//       );

//       if (data?.success) {
//         setSuccess(true);
//         form.reset();
//       }
//     } catch (error) {
//       console.error("Booking failed:", error);
//       alert("Failed to submit reservation. Try again!");
//     }
//   };

//   return (
//     <div className="bg-slate-800 text-gray-800 py-10 md:px-20">
//       {/* ---Reservation--- */}
//       <div className="flex flex-col items-center justify-center mb-8 space-y-4">
//         <p className="text-center text-yellow-600 italic mb-2">---Reservation---</p>
//         <hr className="border-2 border-gray-300 w-[350px]" />
//         <h2 className="text-center text-3xl font-bold tracking-wide text-white">
//           BOOK A TABLE
//         </h2>
//         <hr className="border-2 border-gray-300 w-[350px]" />
//       </div>

      {/* Reservation Form */}
      <form
        onSubmit={handleSubmitReservation}
        className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
      >
        {/* Date */}
        <div className="flex flex-col">
          <label className="font-medium text-sm mb-1 text-white">Date*</label>
          <input
            type="date"
            name="date"
            required
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-yellow-600"
          />
        </div>

        {/* Time */}
        <div className="flex flex-col">
          <label className="font-medium text-sm mb-1 text-white">Time*</label>
          <input
            type="time"
            name="time"
            required
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-yellow-600"
          />
        </div>

        {/* Guest */}
        <div className="flex flex-col">
          <label className="font-medium text-sm mb-1 text-white">Guest*</label>
          <select
            name="guest"
            required
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-yellow-600"
          >
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
            name="name"
            placeholder="Your Name"
            required
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-yellow-600"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col md:col-span-1">
          <label className="font-medium text-sm mb-1 text-white">Phone*</label>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-yellow-600"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col md:col-span-1">
          <label className="font-medium text-sm mb-1 text-white">Email*</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-yellow-600"
          />
        </div>

        {/* Submit Button */}
        <div className="md:col-span-3 text-center mt-6">
          <button
            type="submit"
            className="bg-amber-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-yellow-700 transition"
          >
            Book A Table
          </button>
        </div>
      </form>

      {/* ---Visit Us--- */}
      <div className="flex flex-col items-center justify-center mb-8 space-y-4">
        <p className="text-center text-yellow-600 italic mb-2">---Visit Us---</p>
        <hr className="border-2 border-gray-300 w-[350px]" />
        <h2 className="text-center text-3xl font-bold tracking-wide text-white">
          OUR LOCATION
        </h2>
        <hr className="border-2 border-gray-300 w-[350px]" />
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
            <p className="text-gray-600">123 Main Street, City, Country</p>
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

      {/* Success Modal */}
      {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
          <div className="bg-white rounded-xl p-8 text-center shadow-lg max-w-sm mx-auto animate-fadeIn">
            <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Booking Submitted Successfully!
            </h3>
            <p className="text-gray-600 mb-4">
              Thank you! Your reservation has been saved.
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

export default UserReservation;
