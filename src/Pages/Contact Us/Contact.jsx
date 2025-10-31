import ContactBanner from "./ContactBanner";
import ContactCard from "./ContactCard";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {

  const handleSubmit = e =>{
    e.preventDefault();
    const form =e.target;
    const name =form.name.value;
    const email = form.email.value;
    const phone = form.number.value;
    const description = form.description.value;
    console.log(name, email, phone, description)
  }
  return (
    <div>
      <ContactBanner />
      <ContactCard />

      <div>
        {/*contact text  */}
        <div className="flex flex-col items-center gap-3 pb-10">
          <h1 className="text-xl font-bold text-center text-[#D99904]">
            ---Send Us a Message---
          </h1>
          <hr className="border-2 border-gray-300 w-80" />
          <h2 className="text-3xl font-bold text-center text-[#151515]">
            CONTACT FORM
          </h2>
          <hr className="border-2 border-gray-300 w-80" />
        </div>

        {/* contact form */}
        <div className="bg-gray-100 p-8 max-w-4xl mx-auto rounded-md shadow-md mt-10 mb-32">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D99904]"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D99904]"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Phone*
              </label>
              <input
                type="number"
                name="number"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D99904]"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Message*
              </label>
              <textarea
                placeholder="Write your message here"
                rows="5"
                name="description"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D99904]"
              ></textarea>
            </div>

            {/* Recaptcha (fake placeholder for layout) */}
            <div className="flex items-center gap-3">
              <div className="w-[300px] h-[78px] border border-gray-300 rounded-md flex items-center justify-center bg-white">
                <span className="text-sm text-gray-400">
                  [ reCAPTCHA placeholder ]
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#835D23] to-[#B58130] text-white px-6 py-2 rounded-md flex items-center gap-2 hover:from-[#B58130] hover:to-[#835D23] transition duration-300"
              >
                Send Message <FaPaperPlane />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
