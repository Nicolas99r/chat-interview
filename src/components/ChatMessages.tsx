import /* React, */ { useRef, useEffect } from "react";
import ChatBubble from "./ChatBubble";
import TypingIndicator from "./TypingIndicator";
import type { ChatMessage } from "../types/chat";

type Props = {
  messages: ChatMessage[];
  isTyping: boolean;
};

function ChatMessages({ messages, isTyping }: Props) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Función para hacer scroll al final
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Ejecutar scroll cuando cambien los mensajes o isTyping
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
        />
      ))}
      
      {isTyping && <TypingIndicator />}
      
      {/* Elemento de referencia para scroll */}  
      <div ref={messagesEndRef} />
    </div>
  );
}

export default ChatMessages;