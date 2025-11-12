import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import image from "../../assets/auth/authentication-1.png";
import background from "../../assets/auth/authentication.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import axios from "axios"; 

const SignUp = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);

  // handle signup user....
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photoURL = e.target.photoURL.value;

    if (!acceptTerms) {
      toast.error("Please accept the Terms and Conditions!");
      return;
    }

    try {
      const { user } = await createUser(email, password);
      await updateUserProfile(name, photoURL);

      // ✅ Save user to database using axios
      const saveUser = {
        name: name,
        email: user.email,
        photoURL: photoURL,
      };

      await axios.post(`${import.meta.env.VITE_api}/users`, saveUser);

      toast.success("User Sign Up Successful!");
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  // handlegoogle signin
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      const user = result.user;

      //  Save Google user to database using axios
      const saveUser = {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      };

      await axios.post(`${import.meta.env.VITE_api}/users`, saveUser);

      toast.success("Google Sign Up Successful!");
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center relative bg-cover bg-center pt-20"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black/20"></div>

      <div
        className="relative w-full max-w-[1000px] md:h-[650px] bg-cover bg-center backdrop-blur-sm shadow-2xl rounded-xl flex flex-col-reverse md:flex-row items-center justify-between overflow-hidden mx-4 my-6"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Left Form */}
        <div className="w-full md:w-1/2 px-6 md:px-12 py-6 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Sign Up
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-gray-600 text-sm mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-[#c19a6b]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-600 text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-[#c19a6b]"
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="block text-gray-600 text-sm mb-1">Photo URL</label>
              <input
                type="text"
                name="photoURL"
                placeholder="Your photo URL"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-[#c19a6b]"
              />
            </div>

            {/* Password + Eye Toggle */}
            <div className="relative">
              <label className="block text-gray-600 text-sm mb-1">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Your password"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-[#c19a6b]"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-8 cursor-pointer text-gray-600"
              >
                {showPassword ? <FaEye size={25} /> : <FaEyeSlash size={25} />}
              </span>
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                id="terms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I accept the{" "}
                <span className="text-[#c19a6b] cursor-pointer hover:underline">
                  Terms and Conditions
                </span>
              </label>
            </div>

            {/* Error */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 bg-[#c19a6b] text-white font-semibold rounded-md hover:bg-[#b58c5e] transition"
            >
              Sign Up
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/signIn" className="text-[#c19a6b] font-medium">
              Sign In
            </Link>
          </div>

          {/* Google Sign Up */}
          <button
            onClick={handleGoogleSignIn}
            className="mt-4 w-full py-2 border-2 border-[#c19a6b] text-[#c19a6b] rounded-md hover:bg-[#c19a6b] hover:text-white transition"
          >
            Continue with Google
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center py-6 md:py-0">
          <img
            src={image}
            alt="signup"
            className="w-3/4 md:w-4/5 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
