// app/chat/page.tsx
"use client";
import Avatar from "@/components/Avatar";
import Card from "@/components/Card";
import ChatInput from "@/components/ChatInput";
import { cardsData } from "@/schema/danishGPT";
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
    <>
      <div className="flex flex-col items-center">
        {/* Centered Logo */}
        <div className="drop-shadow-lg mb-8">
          <Avatar
            source="/main.png"
            altText="self avatar"
            width={80}
            height={80}
          />
        </div>
        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl w-full">
          {cardsData.map((card) => (
            <Card
              key={card.id}
              icon={card.icon}
              color={card.color}
              description={card.description}
            />
          ))}
        </div>
        <div className="mt-9 w-full">
          <ChatInput />
        </div>
      </div>

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
    </>
  );
}
