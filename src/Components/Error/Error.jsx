import error from "../../assets/error/404.gif";

const Error = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <img className="w-[600px]" src={error} alt="" />
    </div>
  );
};

export default Error;
