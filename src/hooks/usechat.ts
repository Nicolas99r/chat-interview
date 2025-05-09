import { useState } from "react";
import type { ChatMessage } from "../types/chat";
import type { Product } from "../types/product";

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      message: "Hello there! Do you need any help?",
      time: "10:38 PM | May 8",
      fromUser: false,
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);

  const addMessage = async (text: string) => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const formattedDate = now.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
    });

    // Mensaje del usuario
    const userMessage = {
      message: text,
      time: `${formattedTime} | ${formattedDate}`,
      fromUser: true,
    };
    setMessages((prev) => [...prev, userMessage]);

    if (text.trim().toLowerCase() === "i want product recommendations") {
      setIsTyping(true);

      try {
        const res = await fetch("https://api.wizybot.com/products/demo-product-list ");
        const products = await res.json();

        // Seleccionar un producto al azar
        const apiProduct = products[Math.floor(Math.random() * products.length)];

        // Adaptar a tipo `Product`
        const adaptedProduct: Product = {
          id: apiProduct.id,
          name: apiProduct.displayTitle,
          description: apiProduct.embeddingText,
          price: 499.99, // Simular precio (no viene en la API)
          imageUrl: apiProduct.imageUrl.trim(),
          url: apiProduct.url?.trim(),
        };

        // Mensaje del bot
        const botMessage = {
          message: "Sure! Here are some products you might like:",
          time: `${formattedTime} | ${formattedDate}`,
          fromUser: false,
        };
        setMessages((prev) => [...prev, botMessage]);

        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              message: "product_card_placeholder",
              time: `${formattedTime} | ${formattedDate}`,
              fromUser: false,
              product: adaptedProduct,
            },
          ]);
        }, 1500);
      } catch (error) {
        console.error("Error fetching products:", error);
        setMessages((prev) => [
          ...prev,
          {
            message: "Sorry, I couldn't load the products right now.",
            time: `${formattedTime} | ${formattedDate}`,
            fromUser: false,
          },
        ]);
      } finally {
        setIsTyping(false);
      }
    } else {
      setIsTyping(true);
      setTimeout(() => {
        const autoResponse = {
          message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          time: `${formattedTime} | ${formattedDate}`,
          fromUser: false,
        };
        setMessages((prev) => [...prev, autoResponse]);
        setIsTyping(false);
      }, 2500);
    }
  };

  return { messages, addMessage, isTyping };
}