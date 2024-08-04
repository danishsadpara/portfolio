// app/chat/page.tsx
"use client";
import React, { useState } from "react";

export default function Chat() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(
      `/api/danishGPT?question=${encodeURIComponent(question)}`
    );
    const data = await res.json();
    console.log(data);
    setResponse(data.response);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="border p-2 w-full"
          placeholder="Ask me something..."
        />
        <button type="submit" className="bg-blue-500 text-white p-2 mt-2">
          Ask
        </button>
      </form>
      <div className="mt-4">
        <p dangerouslySetInnerHTML={{ __html: response }} />
      </div>
    </div>
  );
}
