import { FaCircleUser } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

function ChatHeader() {
  return (
    <div className="h-[10%] min-h-fit bg-gradient-to-r from-[#1A1E41] to-[#3B599F] pt-2 pb-1 px-2 transition-all duration-300">
      <div className="flex w-full items-center justify-between pl-4 pr-4">
        <div className="flex items-center">
          <FaCircleUser className="text-white hover:text-blue-200 transition-colors" size={40} />
          <div className="ml-3 mt-1">
            <p className="text-xs text-white opacity-80">Chat with</p>
            <p className="text-lg font-bold text-white mt-[-3px]">Izi Wizy</p>
          </div>
        </div>

        <div className="flex space-x-2">
          <CiShoppingCart className="text-white hover:text-blue-200 transition-colors" size={25} />
          <IoIosArrowDown className="text-white hover:text-blue-200 transition-colors" size={25} />
        </div>
      </div>

      <div className="flex items-center p-2 pt-1">
        <GoDotFill className="text-green-500 animate-pulse mr-2" />
        <p className="text-white text-xs">We reply immediately!</p>
      </div>
    </div>
  );
}

export default ChatHeader;