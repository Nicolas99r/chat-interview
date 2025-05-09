import { useRef, useEffect } from "react";
import ChatBubble from "./ChatBubble";
import TypingIndicator from "./TypingIndicator";
import type { ChatMessage } from "../types/chat";

type Props = {
  messages: ChatMessage[];
  isTyping: boolean;
};

function ChatMessages({ messages, isTyping }: Props) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <div className="h-[80%] overflow-y-scroll custom-scrollbar p-4 pl-2 pr-2">
      {messages.map((msg, index) => (
        <ChatBubble
          key={index}
          message={msg.message}
          time={msg.time}
          fromUser={msg.fromUser}
          product={msg.product}
        />
      ))}

      {isTyping && <TypingIndicator />}

      <div ref={messagesEndRef} />
    </div>
  );
}

export default ChatMessages;