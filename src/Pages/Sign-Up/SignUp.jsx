import { Link } from "react-router-dom";
import image from "../../assets/auth/authentication-1.png";
import background from "../../assets/auth/authentication.png";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";


const SignUp = () => {
  return (
    <div
          className="min-h-screen flex justify-center items-center relative bg-cover bg-center"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>
    
          {/* Main Card */}
          <div
            className="relative w-full max-w-[1000px] md:h-[600px] bg-cover bg-center backdrop-blur-sm shadow-2xl rounded-xl flex flex-col md:flex-row items-center justify-between overflow-hidden mx-4 my-6"
            style={{
              backgroundImage: `url(${background})`,
            }}
          >
            {/* Left Image Section */}
            {/* <div className="w-full md:w-1/2 flex justify-center items-center  md:h-full py-6 md:py-0">
              <img
                src={image}
                alt="login illustration"
                className="w-3/4 md:w-4/5 object-contain"
              />
            </div> */}
    
            {/* Right Login Form Section */}
            <div className="w-full md:w-1/2 px-4 md:px-12 py-6 md:py-10 flex flex-col justify-center  ">
              <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                Login
              </h2>
    
              <form className="flex flex-col space-y-4 flex-grow">
                Email
                <div>
                  <label className="block text-gray-600 text-sm mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Type your email"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-[#c19a6b] bg-white/80"
                  />
                </div>
    
                {/* Password */}
                <div>
                  <label className="block text-gray-600 text-sm mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Type your password"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-[#c19a6b] bg-white/80"
                  />
                </div>
    
                {/* Captcha */}
                <div>
                  <label className="block text-gray-600 text-sm mb-1">Captcha</label>
                  <div className="flex items-center justify-between gap-3">
                    <a href="#" className="text-sm text-[#c19a6b] whitespace-nowrap">
                      Reload Captcha
                    </a>
                   
                  </div>
    
                  {/* type here */}
                  <div className="">
                  <label className="block text-gray-600 text-sm mb-2 mt-3">
                    Description
                  </label>
                  <input
                      type="text"
                      placeholder="Type here"
                      className="flex-1 border w-full pt-1 pb-8 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-[#c19a6b] bg-white/80"
                    />
                </div>
                   
                </div>
    
                {/* Sign In Button */}
                <button
                  type="submit"
                  className="w-full py-2 bg-[#c19a6b] text-white font-semibold rounded-md hover:bg-[#b58c5e] transition-all duration-200"
                >
                  Sign in
                </button>
              </form>
    
              {/* Bottom Section (Register + Socials) */}
              <div className="mt-6 text-center space-y-3">
                <div className="text-sm text-gray-600">
                  New here?{" "}
                  <a className="text-[#c19a6b] font-medium">
                   <Link to="/signUp">Create a New Account</Link>
                  </a>
                </div>
    
                <div>
                  <p className="text-sm text-gray-500 mb-2">Or sign in with</p>
                  <div className="flex justify-center space-x-5 text-[#c19a6b] text-lg">
                    <a href="#" className="border-2 rounded-full p-2 border-[#c19a6b]">
                      <FaFacebookF />
                    </a>
                    <a href="#" className="border-2 rounded-full p-2 border-[#c19a6b]">
                      <FaGoogle />
                    </a>
                    <a href="#" className="border-2 rounded-full p-2 border-[#c19a6b]">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </div>
  )
}

export default SignUp
