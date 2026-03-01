/**
 * @component DiscoveryChat
 * @part-of Web3School — AI Career Discovery
 * @design Full-screen chat, dark theme, streaming responses
 * @data Saves to discovery_sessions table via /api/discovery
 * @flow User → 10-min AI conversation → Results page → Role match
 */
"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Logo } from "@/components/shared/Logo";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

export function DiscoveryChat() {
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [streamingContent, setStreamingContent] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingContent, scrollToBottom]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: input.trim(),
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setStreamingContent("");

    try {
      const response = await fetch("/api/discovery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage.content,
          conversation_history: messages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
          session_id: sessionId,
        }),
      });

      if (!response.ok) throw new Error("Failed to send message");

      const reader = response.body?.getReader();
      if (!reader) throw new Error("No response stream");

      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (!line.startsWith("data: ")) continue;
          const jsonStr = line.slice(6);
          if (!jsonStr) continue;

          try {
            const data = JSON.parse(jsonStr);

            if (data.type === "session_id") {
              setSessionId(data.session_id);
            } else if (data.type === "text") {
              accumulated += data.content;
              setStreamingContent(accumulated);
            } else if (data.type === "done") {
              setProgress(data.progress || 0);
              setIsComplete(data.is_complete || false);

              const assistantMessage: Message = {
                role: "assistant",
                content: data.clean_response || accumulated,
                timestamp: new Date().toISOString(),
              };
              setMessages((prev) => [...prev, assistantMessage]);
              setStreamingContent("");
            }
          } catch {
            // Skip malformed JSON
          }
        }
      }
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, something went wrong. Please try sending your message again.",
          timestamp: new Date().toISOString(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleCompleteDiscovery = async () => {
    if (!sessionId) return;
    setIsLoading(true);

    try {
      const res = await fetch("/api/discovery/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          session_id: sessionId,
          conversation_history: messages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!res.ok) throw new Error("Failed to complete discovery");

      router.push("/results");
    } catch (err) {
      console.error("Complete error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const progressPercentage = Math.min((progress / 10) * 100, 100);
  const progressLabels = [
    "Saying hey",
    "Getting to know you",
    "Getting to know you",
    "What lights you up",
    "What lights you up",
    "How you work",
    "How you work",
    "Web3 vibes",
    "Web3 vibes",
    "Almost there",
  ];

  return (
    <div className="flex flex-col h-full min-h-[calc(100vh-4rem)]">
      {/* Progress bar */}
      <div className="border-b border-border bg-navy-mid/50 px-4 py-3">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-text-muted text-xs font-mono">
              {progress > 0
                ? progressLabels[Math.min(progress - 1, 9)]
                : "Starting discovery"}
            </span>
            <span className="text-text-muted text-xs">
              Step {Math.max(progress, 1)} of 10
            </span>
          </div>
          <div className="h-1.5 bg-navy-deep rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#10B981] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Welcome message if no messages yet */}
          {messages.length === 0 && !isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16 space-y-4"
            >
              <div className="w-16 h-16 bg-purple-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <Sparkles className="w-8 h-8 text-purple-primary" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-text-primary">
                Let's find your path
              </h2>
              <p className="text-text-secondary max-w-md mx-auto">
                Quick chat, no wrong answers. We'll figure out which Web3 career
                actually fits you — not what sounds cool on paper.
              </p>
              <Button
                onClick={() => {
                  setInput("Hey! I'm curious about getting into Web3.");
                  setTimeout(() => sendMessage(), 100);
                }}
                className="bg-purple-primary hover:bg-purple-light text-white rounded-xl px-6 py-3 font-semibold"
              >
                Let's go
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          )}

          {/* Message bubbles */}
          <AnimatePresence>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={cn(
                  "flex gap-3",
                  msg.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                {msg.role === "assistant" && (
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-primary/10 rounded-lg flex items-center justify-center mt-1">
                    <Logo size="sm" className="text-xs" />
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[80%] rounded-2xl px-4 py-3",
                    msg.role === "user"
                      ? "bg-purple-primary text-white"
                      : "bg-navy-mid border border-border text-text-primary"
                  )}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {msg.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Streaming indicator */}
          {streamingContent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-3 justify-start"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-purple-primary/10 rounded-lg flex items-center justify-center mt-1">
                <Logo size="sm" className="text-xs" />
              </div>
              <div className="max-w-[80%] rounded-2xl px-4 py-3 bg-navy-mid border border-border text-text-primary">
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                  {streamingContent}
                </p>
              </div>
            </motion.div>
          )}

          {/* Typing indicator */}
          {isLoading && !streamingContent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-3 justify-start"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-purple-primary/10 rounded-lg flex items-center justify-center mt-1">
                <Logo size="sm" className="text-xs" />
              </div>
              <div className="bg-navy-mid border border-border rounded-2xl px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 bg-text-muted rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <div className="w-2 h-2 bg-text-muted rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <div className="w-2 h-2 bg-text-muted rounded-full animate-bounce" />
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input area */}
      <div className="border-t border-border bg-navy-mid/50 px-4 py-4">
        <div className="max-w-3xl mx-auto">
          {isComplete ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-3"
            >
              <p className="text-text-secondary text-sm">
                Nice chat! Let's see what fits you best.
              </p>
              <Button
                onClick={handleCompleteDiscovery}
                disabled={isLoading}
                className="bg-white text-black hover:opacity-85 rounded-xl px-8 py-5 text-lg font-semibold transition-all active:scale-[0.98] shadow-lg"
              >
                {isLoading ? "Analyzing..." : "See My Results"}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          ) : (
            <div className="flex gap-3 items-end">
              <Textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                disabled={isLoading}
                rows={1}
                className="bg-navy-deep border-border text-text-primary placeholder:text-text-muted focus:border-purple-primary focus:ring-1 focus:ring-purple-primary rounded-xl resize-none min-h-[44px] max-h-32"
              />
              <Button
                onClick={sendMessage}
                disabled={!input.trim() || isLoading}
                size="icon"
                className="bg-purple-primary hover:bg-purple-light text-white rounded-xl h-11 w-11 flex-shrink-0 transition-all active:scale-[0.95]"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
