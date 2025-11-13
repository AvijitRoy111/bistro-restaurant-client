// import { useState, useEffect } from "react";
// import ContactBanner from "./ContactBanner";
// import ContactCard from "./ContactCard";
// import { FaPaperPlane } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";
// import { CheckCircle2, X } from "lucide-react";
// import axios from "axios";
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";

// const Contact = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [successMessage, setSuccessMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [captchaInput, setCaptchaInput] = useState("");
//   const [isCaptchaValid, setIsCaptchaValid] = useState(false);
//   const [captchaKey, setCaptchaKey] = useState(Date.now()); // unique key to refresh captcha

//   // Load captcha once
//   useEffect(() => {
//     loadCaptchaEnginge(6); // 6 character captcha
//   }, [captchaKey]);

//   // Handle input change
//   const handleCaptchaChange = (e) => {
//     setCaptchaInput(e.target.value);
//     setIsCaptchaValid(false); // default invalid
//   };

//   // Validate captcha manually
//   const handleValidateCaptcha = () => {
//     if (validateCaptcha(captchaInput)) {
//       setIsCaptchaValid(true);
//     } else {
//       setIsCaptchaValid(false);
//       setCaptchaInput("");
//       setCaptchaKey(Date.now()); // refresh captcha
//       alert("Incorrect CAPTCHA! Try again."); // optional
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate captcha before submit
//     if (!validateCaptcha(captchaInput)) {
//       setIsCaptchaValid(false);
//       setCaptchaInput("");
//       setCaptchaKey(Date.now()); // refresh captcha
//       alert("Incorrect CAPTCHA! Try again.");
//       return;
//     }

//     setLoading(true);

//     const form = e.target;
//     const name = form.name.value;
//     const email = form.email.value;
//     const phone = form.number.value;
//     const description = form.description.value;

//     try {
//       const res = await axios.post(`${import.meta.env.VITE_api}/contacts`, {
//         name,
//         email,
//         phone,
//         description,
//       });

//       if (res.data?.success) {
//         setSuccessMessage(res.data.message);
//         setShowModal(true);
//         form.reset();
//         setCaptchaInput("");
//         setIsCaptchaValid(false);
//         setCaptchaKey(Date.now()); // refresh captcha after submit
//       } else {
//         throw new Error(res.data?.message || "Failed to send message");
//       }
//     } catch (err) {
//       console.error(err);
//       setSuccessMessage(err.message);
//       setShowModal(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <ContactBanner />


//       <div>
//         <div className="flex flex-col items-center gap-3 pb-8">
//           <h1 className="text-xl font-bold text-center text-[#D99904]">
//             ---Send Us a Message---
//           </h1>
//           <hr className="border-2 border-gray-300 w-80" />
//           <h2 className="text-3xl font-bold text-center text-[#151515]">
//             CONTACT FORM
//           </h2>
//           <hr className="border-2 border-gray-300 w-80" />
//         </div>

//         <div className="bg-gray-100 p-8 max-w-4xl mx-auto rounded-md shadow-md mt-10 mb-20">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Name, Email, Phone, Message fields */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-gray-700 mb-2 font-medium">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Enter your name"
//                   required
//                   className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D99904]"
//                 />
//               </div>

//               <div>
//                 <label className="block text-gray-700 mb-2 font-medium">Email*</label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Enter your email"
//                   required
//                   className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D99904]"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-gray-700 mb-2 font-medium">Phone*</label>
//               <input
//                 type="number"
//                 name="number"
//                 placeholder="Enter your phone number"
//                 className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D99904]"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 mb-2 font-medium">Message*</label>
//               <textarea
//                 placeholder="Write your message here"
//                 rows="5"
//                 name="description"
//                 required
//                 className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D99904]"
//               ></textarea>
//             </div>

//             {/* CAPTCHA Section */}
//             <div className="flex flex-col items-start gap-2 mt-4">
//               <LoadCanvasTemplate key={captchaKey} />
//               <div className="flex gap-2 w-full">
//                 <input
//                   type="text"
//                   placeholder="Enter CAPTCHA"
//                   value={captchaInput}
//                   onChange={handleCaptchaChange}
//                   className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D99904]"
                />
                <button
                  type="button"
                  onClick={() => setCaptchaKey(Date.now())}
                  className="bg-gray-300 px-4 rounded-md hover:bg-gray-400"
                >
                  Refresh
                </button>
              </div>
              <button
                type="button"
                onClick={handleValidateCaptcha}
                className="mt-2 bg-amber-700 hover:bg-amber-800 text-white py-1 px-4 rounded-md"
              >
                Validate CAPTCHA
              </button>
            </div>


            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading || !isCaptchaValid}
                className={`${isCaptchaValid
                  ? "bg-gradient-to-r from-[#835D23] to-[#B58130] hover:from-[#B58130] hover:to-[#835D23]"
                  : "bg-gray-400 cursor-not-allowed"
                  } text-white px-6 py-2 rounded-md flex items-center gap-2 transition duration-300`}
              >
                {loading ? "Sending..." : "Send Message"} <FaPaperPlane />
              </button>
            </div>
          </form>
        </div>
      </div>


      <ContactCard />

      {/* Success Modal */}
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
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>

              <div className="flex justify-center mb-3">
                <CheckCircle2 className="text-green-500 w-14 h-14" />
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-1">Success!</h3>
              <p className="text-gray-600 mb-4">{successMessage}</p>

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

export default Contact;
