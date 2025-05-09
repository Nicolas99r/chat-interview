import { useState } from "react";
import { CiFaceSmile } from "react-icons/ci";
import { BsFillSendFill } from "react-icons/bs";

type Props = {
  onSend: (message: string) => void;
};

function ChatInput({ onSend }: Props) {
  const [text, setText] = useState("");
  const [shake, setShake] = useState(false);

  const handleSend = () => {
    if (!text.trim()) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    onSend(text);
    setText("");
  };

  return (
    <div className="w-full h-[10%] border-t border-gray-200 px-4 py-3 flex items-center gap-3 bg-white transition-all duration-300 ease-in-out">
      <CiFaceSmile
        className={`text-gray-400 w-6 h-6 transition-transform duration-200 hover:text-blue-500 hover:scale-110`}
      />

      <input
        type="text"
        placeholder="Write a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        className={`
          flex-1 text-sm text-gray-800 placeholder-gray-400 rounded-lg px-4 py-2
          focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent
          border border-gray-200 bg-gray-50 transition-all duration-200
        `}
      />

      <button
        onClick={handleSend}
        className={`
          ${text.trim() ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"}
          ${shake ? "animate-shake" : ""}
          rounded-full p-2 transition-all duration-200 transform hover:scale-105
          shadow-md
        `}
        disabled={!text.trim()}
      >
        <BsFillSendFill className="text-white w-4 h-4" />
      </button>
    </div>
  );
}

export default ChatInput;