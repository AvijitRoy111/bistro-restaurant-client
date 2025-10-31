import image from "../../assets/home/chef-service.jpg";
const BistroBoss = () => {
  return (
    <div
      className="relative bg-center bg-cover h-[500px] flex items-center justify-center mt-10 mb-32 mx-4 md:mx-28 rounded-md"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 rounded-md"></div>

      {/* Content Box */}
      <div className="relative flex flex-col items-center justify-center bg-white/90 text-center max-w-2xl h-[250px] mx-3 px-10 py-10 rounded-md shadow-md border border-gray-200">
        <h2 className="text-3xl font-serif tracking-wide mb-3 text-gray-800">
          BISTRO BOSS
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni adipisci dolorem alias dolor est,
          nihil iusto ducimus incidunt consequatur nemo.
        </p>
      </div>
    </div>
  );
};

export default BistroBoss;
