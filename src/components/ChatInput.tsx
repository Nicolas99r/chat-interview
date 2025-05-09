import { useState } from "react";
import { CiFaceSmile } from "react-icons/ci";
import { BsFillSendFill } from "react-icons/bs";

type Props = {
  onSend: (message: string) => void;
};

function ChatInput({ onSend }: Props) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <div className="w-full h-[10%] border-t border-gray-300 px-4 py-3 flex items-center gap-3 bg-white">
      <CiFaceSmile className="text-gray-500 w-6 h-6 hover:scale-110" />

      <input
        type="text"
        placeholder="Write a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        className="flex-1 text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
      />

      <button onClick={handleSend} className="bg-[#1d2559] rounded-full p-2 hover:bg-[#131a42] transition">
        <BsFillSendFill className="text-white w-4 h-4" />
      </button>
    </div>
  );
}

export default ChatInput;
