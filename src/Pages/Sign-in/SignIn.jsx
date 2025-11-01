// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
// import image from "../../assets/auth/authentication-1.png";
// import background from "../../assets/auth/authentication.png";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
// import { toast } from "react-toastify";


// const SignIn = () => {
//   const { signIn, signInWithGoogle } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   // handle email/password sign in
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     try {
//       await signIn(email, password);
//       toast.success("User Sign in successful!");
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//       toast.error("Sign in failed. Please check your credentials.");
//     }
//   };

//   // handle google sign in
//   const handleGoogleSignIn = async () => {
//     try {
//       await signInWithGoogle();
//       toast.success("User Sign in successful!");
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//       toast.error("Google sign in failed.");
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex justify-center items-center relative bg-cover bg-center"
//       style={{ backgroundImage: `url(${background})` }}
//     >
//       <div className="absolute inset-0 bg-black/20"></div>
//       <div
//         className="relative w-full max-w-[1000px] md:h-[600px] bg-cover bg-center backdrop-blur-sm shadow-2xl rounded-xl flex flex-col md:flex-row items-center justify-between overflow-hidden mx-4 my-6"
//         style={{ backgroundImage: `url(${background})` }}
//       >
//         {/* Left Image */}
//         <div className="w-full md:w-1/2 flex justify-center items-center md:h-full py-6 md:py-0">
//           <img src={image} alt="login" className="w-3/4 md:w-4/5 object-contain" />
//         </div>

//         {/* Right Form */}
//         <div className="w-full md:w-1/2 px-6 md:px-12 py-6 flex flex-col justify-center">
//           <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Sign In</h2>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             {/* Email */}
//             <div>
//               <label className="block text-gray-600 text-sm mb-1">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Type your email"
//                 required
//                 className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-[#c19a6b]"
//               />
//             </div>

//             {/* Password */}
//             <div className="relative">
//               <label className="block text-gray-600 text-sm mb-1">Password</label>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="Type your password"
//                 required
//                 className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-[#c19a6b] pr-10"
//               />
//               <span
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-[32px] text-gray-500 cursor-pointer"
//               >
//                 {showPassword ? <FaEyeSlash size={25}/> : <FaEye size={25}/>}
//               </span>
//             </div>

//             {error && <p className="text-red-500 text-sm">{error}</p>}

//             <button
//               type="submit"
//               className="w-full py-2 bg-[#c19a6b] text-white font-semibold rounded-md hover:bg-[#b58c5e] transition"
//             >
//               Sign In
//             </button>
//           </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 mb-3">
              New here?{" "}
              <Link to="/signUp" className="text-[#c19a6b] font-medium">
                Create a New Account
              </Link>
            </p>

            <button
              onClick={handleGoogleSignIn}
              className="flex justify-center items-center gap-2 w-full py-2 border-2 border-[#c19a6b] text-[#c19a6b] rounded-md hover:bg-[#c19a6b] hover:text-white transition"
            >
              <FaGoogle /> Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
