/* import React from 'react' */
import { GoDotFill } from "react-icons/go";

function TypingIndicator() {
  return (
    <div className="flex justify-start mb-2 pl-2">
      <div className="bg-[#f3f3f3] text-black p-4 w-28 rounded-2xl">
        <div className="flex space-x-1">
          <GoDotFill className="animate-bounce"/>
          <GoDotFill className="animate-bounce delay-150"/>
          <GoDotFill className="animate-bounce delay-300"/>
        </div>
      </div>
    </div>
  )
}

export default TypingIndicator