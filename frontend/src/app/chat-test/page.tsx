"use client";

import { useEffect, useRef, useState } from "react";

import ChatInput from "@/components/chat/ChatInput";
import ChatMessage from "@/components/chat/ChatMessage";
import TypingIndicator from "@/components/chat/TypingIndicator";
import { sendChatMessage } from "@/services/api";

interface Message {
  role: "user" | "assistant";
  message: string;
}

const WELCOME_MESSAGE =
  "Hello! I'm your Government AI Assistant. Ask me anything about Passport, Aadhaar, PAN, Driving Licence or Government Schemes.";

export default function ChatTestPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      message: WELCOME_MESSAGE,
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const resetConversation = () => {
    setMessages([
      {
        role: "assistant",
        message: WELCOME_MESSAGE,
      },
    ]);
    setError("");
  };

  const handleSend = async (text: string) => {
    const trimmed = text.trim();

    if (!trimmed || isLoading) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        message: trimmed,
      },
    ]);

    setIsLoading(true);
    setError("");

    try {
      const data = await sendChatMessage(trimmed);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          message:
            data?.response || "I couldn't generate a response right now.",
        },
      ]);
    } catch {
      setError(
        "Sorry, something went wrong while contacting the assistant. Please try again."
      );

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          message: "Sorry, I couldn't reach the assistant right now.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_35%),linear-gradient(135deg,_#020617,_#0f172a)] px-3 py-4 text-slate-100 sm:px-4 lg:px-6">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col">
        <header className="mb-4 rounded-[28px] border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-slate-950/40 backdrop-blur-xl sm:p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
                AI Life Assistant
              </p>

              <h1 className="text-2xl font-semibold text-white sm:text-3xl">
                Government AI Assistant
              </h1>

              <p className="mt-1 text-sm text-slate-400">
                Ask about services, documents, schemes, and guidance.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={resetConversation}
                className="rounded-full border border-slate-700 bg-slate-800/80 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-700"
              >
                Clear conversation
              </button>

              <button
                type="button"
                onClick={resetConversation}
                className="rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-500"
              >
                New chat
              </button>
            </div>
          </div>
        </header>

        <main className="flex flex-1 flex-col overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/70 shadow-2xl shadow-slate-950/50 backdrop-blur-xl">
          <div className="flex-1 overflow-y-auto px-3 py-4 sm:px-5 lg:px-7">
            {error ? (
              <div className="mb-4 rounded-2xl border border-rose-400/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
                {error}
              </div>
            ) : null}

            <div className="space-y-4">
              {messages.map((msg, index) => (
                <ChatMessage
                  key={`${msg.role}-${index}`}
                  role={msg.role}
                  message={msg.message}
                />
              ))}

              {isLoading && <TypingIndicator />}
            </div>

            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-white/10 bg-slate-950/70 p-3 sm:p-4">
            <ChatInput
              onSend={handleSend}
              isLoading={isLoading}
            />
          </div>
        </main>
      </div>
    </div>
  );
}