// import banner1 from "../../assets/contact/banner.jpg";

// const ContactBanner = () => {
//   const title = "CONTACT US";
//   const subtitle = "Would you like to try a dish";
//   return (
//     <div>
//       <div className="relative w-full h-[70vh] max-h-[700px] overflow-hidden mb-16">
//         {/* Background Banner */}
//         <img
//           src={banner1}
//           alt="banner"
//           className="w-full h-full object-cover"
//         />

//         {/* Center Gradient Card */}
//         <div
//           className="absolute top-60 md:top-64 left-1/2 -translate-x-1/2 -translate-y-1/2
//                          bg-black/40 rounded-2xl px-8 py-10 sm:px-12 sm:py-14
//                          flex flex-col justify-center items-center text-center text-white
//                          max-w-3xl h-44 md:h-64 w-[90%] space-y-4 backdrop-blur-sm"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-3">{title}</h2>
          <p className="text-sm sm:text-lg opacity-90">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
