/* import React from 'react' */

import ChatHeader from "./ChatHeader"
import ChatInput from "./ChatInput"
import ChatMessages from "./ChatMessages"
import { useChat } from "../hooks/usechat";

function PhoneFrame() {
  const { messages, addMessage } = useChat();
  return (
    <div className="h-dvh w-dvw max-h-[812px] max-w-[375px] bg-white rounded-2xl shadow-2xl border-2 border-gray-600 overflow-hidden">
      <ChatHeader/>
      <ChatMessages messages={messages}/>
      <ChatInput onSend={addMessage}/>
    </div>
  )
}

export default PhoneFrame