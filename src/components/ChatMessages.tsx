import ChatBubble from "./ChatBubble";
import type { ChatMessage } from "../types/chat";

type Props = {
  messages: ChatMessage[];
};

function ChatMessages({ messages }: Props) {
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
    </div>
  );
}

export default ChatMessages;
