// components/ChatInput.tsx

import React, { useState, useRef } from "react";
import { PaperClipIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";

const ChatInput: React.FC = () => {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleSend = () => {
    if (message.trim() || file) {
      console.log("Message:", message);
      console.log("File:", file);
      setMessage("");
      setFile(null);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <div className="flex w-full flex-col gap-1.5 rounded-[26px] p-1.5 transition-colors bg-[#f4f4f4] dark:bg-black">
      <div className="flex items-end gap-1.5 md:gap-2">
        <div>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
          />
          <button
            type="button"
            className="flex items-center justify-center h-8 w-8 rounded-full text-token-text-primary focus-visible:outline-black dark:text-white dark:focus-visible:outline-white mb-1 ml-1.5"
            onClick={() => fileInputRef.current?.click()}
          >
            <PaperClipIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="flex min-w-0 flex-1 flex-col">
          <textarea
            id="prompt-textarea"
            rows={1}
            placeholder="Write here..."
            className="m-0 resize-none border-0 bg-transparent px-0 text-token-text-primary focus:outline-none focus:ring-0 max-h-[25vh] max-h-52"
            spellCheck="false"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ height: "32px", overflowY: "hidden" }}
          ></textarea>
        </div>
        <button
          data-testid="send-button"
          className="mb-1 me-1 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:outline-black disabled:bg-[#D7D7D7] disabled:text-[#f4f4f4] disabled:hover:opacity-100 dark:bg-white dark:text-black dark:focus-visible:outline-white disabled:dark:bg-token-text-quaternary dark:disabled:text-token-main-surface-secondary"
          onClick={handleSend}
          disabled={!message.trim() && !file}
        >
          <PaperAirplaneIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
