/* import React from "react"; */
import ProductCard from "./ProductCard";
import type { ChatMessage } from "../types/chat";

type Props = {
  message: string;
  time: string;
  fromUser?: boolean;
  product?: ChatMessage["product"];
};

function ChatBubble({ message, time, fromUser = false, product }: Props) {
  return (
    <div
      className={`flex ${fromUser ? "justify-end" : "justify-start"} mb-2 animate-fade-in`}
    >
      <div
        className={`
          ${fromUser 
            ? "bg-[#64c7d8] text-black hover:bg-[#5bbcd3]" 
            : "bg-[#f3f3f3] text-black hover:bg-[#eaeaea]"
          }
          p-4 w-4/5 rounded-2xl
          transition-all duration-200 ease-in-out
          relative
        `}
      >
        {/* Tarjeta de producto */}
        {product && <ProductCard product={product} />}

        {/* Mensaje de texto */}
        {!product && <p className="mb-2 leading-tight">{message}</p>}

        {/* Hora del mensaje */}
        <p className="text-xs text-gray-800 mt-2 opacity-80">{time}</p>
      </div>
    </div>
  );
}

export default ChatBubble;