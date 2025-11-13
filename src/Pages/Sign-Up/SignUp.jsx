import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import image from "../../assets/auth/authentication-1.png";
import background from "../../assets/auth/authentication.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import axios from "axios";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";

const SignUp = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [captchaInput, setCaptchaInput] = useState("");
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [captchaKey, setCaptchaKey] = useState(Date.now());

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [captchaKey]);

  const handleCaptchaChange = (e) => {
    setCaptchaInput(e.target.value);
    setIsCaptchaValid(false);
  };

  // const handleValidateCaptcha = () => {
  //   if (validateCaptcha(captchaInput)) {
  //     setIsCaptchaValid(true);
  //     toast.success("CAPTCHA Matched Successfully!");
  //   } else {
      setIsCaptchaValid(false);
      toast.error("CAPTCHA didn't match! Try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateCaptcha(captchaInput)) {
      alert("Incorrect CAPTCHA! Try again.");
      return;
    }

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

      const saveUser = {
        name,
        email: user.email,
        photoURL,
      };

      await axios.post(`${import.meta.env.VITE_api}/users`, saveUser);

      toast.success("User Sign Up Successful!");
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();
      const user = result.user;

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
        className="relative w-full max-w-[1000px] md:h-[850px] bg-cover bg-center backdrop-blur-sm shadow-2xl rounded-xl flex flex-col-reverse md:flex-row items-center justify-between overflow-hidden mx-4 my-6"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Left Form */}
        <div className="w-full md:w-1/2 px-6 md:px-12 py-6 flex flex-col  justify-center">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Sign Up</h2>

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
                required
                placeholder="Your photo URL"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-[#c19a6b]"
              />
            </div>

            {/* Password */}
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

            {/* CAPTCHA */}
            <div className="flex flex-col gap-2 mt-3">
              <LoadCanvasTemplate key={captchaKey} />
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter CAPTCHA"
                  value={captchaInput}
                  onChange={handleCaptchaChange}
                  className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#c19a6b]"
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
                className="bg-[#c19a6b] hover:bg-[#b58c5e] text-white py-1 px-4 rounded-md"
              >
                Validate CAPTCHA
              </button>
            </div>

            {/* Terms */}
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

            <button
              type="submit"
              disabled={!isCaptchaValid}
              className={`w-full py-2 ${isCaptchaValid
                ? "bg-[#ca8531] hover:bg-[#b58c5e]"
                : "bg-gray-400 cursor-not-allowed"
                } text-white font-semibold rounded-md transition`}
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

          <button
            onClick={handleGoogleSignIn}
            className="mt-4 w-full py-2 border-2 border-[#c19a6b] text-[#c19a6b] rounded-md hover:bg-[#c19a6b] hover:text-white transition"
          >
            Continue with Google
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center py-6 md:py-0">
          <img src={image} alt="signup" className="w-3/4 md:w-4/5 object-contain" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
