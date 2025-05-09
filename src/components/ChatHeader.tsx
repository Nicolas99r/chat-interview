/* import React from 'react' */
import { FaCircleUser } from "react-icons/fa6";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

function ChatHeader() {
  return (
    <div className="h-[10%] min-h-fit bg-gradient-to-r from-[#1A1E41] to-[#3B599F] pt-2">
      <div className="flex w-full items-center text-white justify-between pl-4 pr-4">
        <div className="flex items-center">
          <FaCircleUser color="white" size={40}/>
          <div className="mt-2 pl-2">
            <p className="text-xs">Chat with</p>
            <p className="text-lg mt-[-5px] font-bold">Izi Wizy</p>
          </div>
        </div>
        <div className="flex">
          <CiShoppingCart color="white" size={25} style={{marginRight: 4}}/>
          <IoIosArrowDown color="white" size={25} style={{marginLeft: 4, marginRight: 10}}/>
        </div>
      </div>
      <div className="flex p-2 pb-2">
        <GoDotFill color="green"/>
        <p className="text-white text-xs">We reply inmediatly!</p>
      </div>
    </div>
  )
}

export default ChatHeader