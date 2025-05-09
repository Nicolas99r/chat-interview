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

    // Agregar el mensaje del usuario
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Lógica de respuesta automática con delay
    if (text !== "I want product recommendations") {
      // Usamos setTimeout para agregar el mensaje con un retraso de 2.5 segundos
      setTimeout(() => {
        const autoResponse: ChatMessage = {
          message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          time: `${formattedTime} | ${formattedDate}`,
          fromUser: false,
        };

        setMessages((prevMessages) => [...prevMessages, autoResponse]);
      }, 2500); // 2500 milisegundos = 2.5 segundos
    }
  };

  return { messages, addMessage };
}
