"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi there! How can we help you support our mission today?" },
  ]);

  function handleSend(e) {
    e.preventDefault();
    const trimmed = message.trim();
    if (!trimmed) return;
    setMessages((prev) => [...prev, { from: "user", text: trimmed }]);
    setMessage("");
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-80 rounded-2xl bg-white border border-neutral-200 shadow-2xl overflow-hidden">
          <div className="bg-emerald-600 text-white px-4 py-3 flex items-center justify-between">
            <span className="text-sm font-semibold">Chat with us!</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="p-1 hover:bg-emerald-700 rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 h-60 overflow-y-auto space-y-2.5 text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`px-3 py-2 rounded-xl max-w-[85%] ${
                  msg.from === "user"
                    ? "ml-auto bg-emerald-600 text-white"
                    : "bg-neutral-100 text-neutral-800"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="border-t border-neutral-100 p-2 flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write a message..."
              className="flex-1 px-3 py-1.5 text-sm outline-none"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      <div className="flex items-center gap-2.5">
        {!open && (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="px-4 py-2 rounded-full bg-white text-neutral-900 text-xs font-semibold shadow-md border border-neutral-200 hover:bg-neutral-50 transition-colors"
          >
            Chat with us!
          </button>
        )}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle chat widget"
          className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}