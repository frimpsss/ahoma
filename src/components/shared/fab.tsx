import { FiPlus } from "react-icons/fi";

const FloatingActionButton = () => {
  return (
    <div className="fixed w-fit bottom-10 right-10 rounded-lg border-[0.9px] cursor-pointer grid place-items-center z-[1000] py-5 px-8 hover:scale-[1.1] duration-500 bg-child shadow-md">
      <FiPlus size={24} />
    </div>
  );
};

export default FloatingActionButton;
