import { search } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80  text-gray-300 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-5 h-5 mr-4" src={search} alt="Loading" />
        Search new projects
    </div>
  );
};

export default Generating;