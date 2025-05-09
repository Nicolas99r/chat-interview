import { useState } from "react";
import type { ChatMessage } from "../types/chat";

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      message: "Hello there! Do you need any help?",
      time: "10:38 PM | May 8",
      fromUser: false,
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const addMessage = (text: string) => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const formattedDate = now.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });

    // Mensaje del usuario
    const newMessage: ChatMessage = {
      message: text,
      time: `${formattedTime} | ${formattedDate}`,
      fromUser: true,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    if (text !== "I want product recommendations") {
      setIsTyping(true); // Mostrar typing indicator

      setTimeout(() => {
        const autoResponse: ChatMessage = {
          message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          time: `${formattedTime} | ${formattedDate}`,
          fromUser: false,
        };

        setMessages((prevMessages) => [...prevMessages, autoResponse]);
        setIsTyping(false); // Quitar typing indicator
      }, 2500);
    }
  };

  return { messages, addMessage, isTyping };
}