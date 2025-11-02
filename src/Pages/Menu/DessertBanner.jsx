import image from "../../assets/home/chef-service.jpg";

const DessertBanner = () => {
  return (
    <div
      className="relative bg-center bg-cover h-[500px] flex items-center justify-center mt-10 mb-32  "
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 rounded-md"></div>

      {/* Content Box */}
      <div className="relative flex flex-col items-center justify-center bg-black/50 text-center max-w-4xl h-[350px] mx-4 px-10 py-10 rounded-md shadow-md ">
        <h2 className="text-3xl font-serif tracking-wide mb-3 text-white">
          DESSERTS
        </h2>
        <p className="text-sm text-white leading-relaxed">
          Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
};

export default DessertBanner;
