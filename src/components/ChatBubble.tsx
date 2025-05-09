/* import React from 'react' */

type ChatBubbleProps = {
  message: string;
  time: string;
  fromUser?: boolean;
}

function ChatBubble({message, time, fromUser = false}: ChatBubbleProps) {
  return (
    <div
      className={`
        flex 
        ${fromUser ? "justify-end" : "justify-start"} 
        mb-2
      `}
    >
      <div
        className={`
          ${fromUser ? "bg-[#64c7d8] text-black" : "bg-[#f3f3f3] text-black"}
          p-4 w-4/5 rounded-2xl cursor-pointer hover:opacity-85
        `}
      >
        <p className="mb-2">{message}</p>
        <p className={`text-xs ${fromUser ? "text-gray-800" : "text-gray-800"}`}>
          {time}
        </p>
      </div>
    </div>
  )
}

export default ChatBubble