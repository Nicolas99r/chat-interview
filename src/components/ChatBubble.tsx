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
    <div className={`flex ${fromUser ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`${
          fromUser ? "bg-[#64c7d8] text-black" : "bg-[#f3f3f3] text-black"
        } p-4 w-4/5 rounded-2xl`}
      >
        {product && <ProductCard product={product} />}

        {!product && <p className="mb-2">{message}</p>}

        <p className="text-xs text-gray-800 mt-2">{time}</p>
      </div>
    </div>
  );
}

export default ChatBubble;