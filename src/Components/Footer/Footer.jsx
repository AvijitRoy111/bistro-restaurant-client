import { FaFacebook } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#0e1621] text-white rounded-md">
        {/* <!-- Top Section --> */}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center px-6 py-10 space-y-8 md:space-y-0 md:space-x-12 relative">
          {/* <!-- Contact Us --> */}
          <div className="md:w-1/2 flex flex-col items-center md:items-center text-center">
            <h3 className="text-lg font-semibold mb-3">CONTACT US</h3>
            <p className="text-sm">123 ABC Street, Unit 21, Bangladesh</p>
            <p className="text-sm">+88 123456789</p>
            <p className="text-sm">Mon - Fri: 09:00 - 22:00</p>
            <p className="text-sm">Sat - Sun: 10:00 - 23:00</p>
          </div>

          {/* <!-- Vertical Divider --> */}
          <div className="hidden md:block w-[1px] bg-gray-500 h-44"></div>

          {/* <!-- Follow Us --> */}
          <div className="md:w-1/2 flex flex-col items-center md:items-center text-center">
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <p className="text-sm mb-4">Join us on social media</p>
            <div className="flex justify-center space-x-4 text-2xl">
              <a href="#" className="hover:text-blue-600">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-pink-600">
                <FaSquareInstagram />
              </a>
              <a href="#" className="hover:text-sky-600">
                <FaSquareTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* <!-- Bottom Section --> */}
        <div className="bg-[#0b111a] text-center py-4 text-sm border-t border-gray-700 rounded-md">
          <p>&copy; CulinaryCloud. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
