import React, { useState, useEffect, useRef } from 'react';
import {
  Bot,
  X,
  Send,
  MessageSquare,
  ExternalLink,
  RotateCcw,
  ArrowRight,
  User,
  Copy,
  Check,
} from 'lucide-react';
import {
  ChatMessage,
  INITIAL_SUGGESTIONS,
  getBotResponse,
} from '../data/chatbotKnowledge';

const POPUP_STORAGE_KEY = 'sajjad_career_chatbot_welcomed';

export const CareerChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: "👋 **Welcome! I'm Sajjad's Assistant.**\n\nI can provide direct answers about Sajjad's enterprise experience (.NET, React, AI), projects (like the Attendance Log System), Microsoft certifications, or how to get in touch.\n\nWhat would you like to explore?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      chips: [
        '30-Second Elevator Pitch',
        'Core Tech Stack',
        'Enterprise Experience',
        'Attendance Log System (ALS)',
        'Microsoft Certifications',
        'Contact Sajjad',
      ],
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = (behavior: ScrollBehavior = 'smooth') => {
    messagesEndRef.current?.scrollIntoView({ behavior });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom('auto');
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, isTyping]);

  // Timed Welcome Popup: Triggers 2.5s after mount if not dismissed in session
  useEffect(() => {
    const hasSeenWelcome = sessionStorage.getItem(POPUP_STORAGE_KEY);
    if (!hasSeenWelcome) {
      const timer = setTimeout(() => {
        if (!isOpen) {
          setShowWelcomePopup(true);
        }
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const dismissWelcomePopup = () => {
    setShowWelcomePopup(false);
    sessionStorage.setItem(POPUP_STORAGE_KEY, 'dismissed');
  };

  const handleOpenChat = (initialPrompt?: string) => {
    setShowWelcomePopup(false);
    sessionStorage.setItem(POPUP_STORAGE_KEY, 'opened');
    setIsOpen(true);

    if (initialPrompt) {
      handleSendMessage(initialPrompt);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'bot',
        text: "Conversation refreshed. 👋 Ask me anything about Sajjad's background, technologies, enterprise solutions, or certifications!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        chips: [
          '30-Second Elevator Pitch',
          'Core Tech Stack',
          'Enterprise Experience',
          'Attendance Log System (ALS)',
          'Microsoft Certifications',
          'Contact Sajjad',
        ],
      },
    ]);
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend ?? inputValue).trim();
    if (!query) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Natural conversation thinking delay
    setTimeout(() => {
      const response = getBotResponse(query);
      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        chips: response.chips,
        links: response.links,
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 380);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleCopyText = (id: string, text: string) => {
    const cleanText = text.replace(/\*\*/g, '');
    navigator.clipboard.writeText(cleanText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Helper to parse simple markdown formatting (bold, bullets, paragraphs)
  const renderMessageContent = (text: string) => {
    const lines = text.split('\n');

    return (
      <div className="space-y-1.5 leading-relaxed text-sm">
        {lines.map((line, idx) => {
          const trimmed = line.trim();
          if (!trimmed) {
            return <div key={idx} className="h-1.5" />;
          }

          // Format bold syntax **text**
          const parts = line.split(/(\*\*.*?\*\*)/g);
          const renderedLine = parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={i} className="font-semibold text-slate-900">
                  {part.slice(2, -2)}
                </strong>
              );
            }
            return part;
          });

          // Bullet point or list item
          if (trimmed.startsWith('•') || trimmed.startsWith('-')) {
            return (
              <div key={idx} className="flex items-start gap-2 pl-1">
                <span className="text-cyan-600 mt-1 text-xs">▸</span>
                <span className="flex-1 text-slate-700">{renderedLine}</span>
              </div>
            );
          }

          // Numbered list item like "1. "
          if (/^\d+\.\s/.test(trimmed)) {
            return (
              <div key={idx} className="flex items-start gap-2 pl-1">
                <span className="text-cyan-700 font-mono text-xs mt-0.5 font-bold">
                  {trimmed.match(/^\d+\./)?.[0]}
                </span>
                <span className="flex-1 text-slate-700">
                  {line.replace(/^\d+\.\s*/, '').split(/(\*\*.*?\*\*)/g).map((part, i) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return (
                        <strong key={i} className="font-semibold text-slate-900">
                          {part.slice(2, -2)}
                        </strong>
                      );
                    }
                    return part;
                  })}
                </span>
              </div>
            );
          }

          return <p key={idx} className="text-slate-700">{renderedLine}</p>;
        })}
      </div>
    );
  };

  return (
    <>
      {/* 1. TIMED WELCOME POPUP DIALOG (Light Card with Navy Header) */}
      {showWelcomePopup && !isOpen && (
        <aside
          aria-label="Welcome Assistant dialog"
          className="fixed bottom-24 right-4 sm:right-6 z-50 max-w-[360px] w-[calc(100vw-2rem)] rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-2xl shadow-slate-900/20 transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
        >
          {/* Header (Same Brand Navy Color) */}
          <div className="bg-gradient-to-r from-[#0c234b] via-[#0e2a58] to-[#12366e] text-white p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white border border-white/20">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <span
                  className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#0c234b] rounded-full"
                  title="Online"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-wide">
                  Sajjad Ali's Assistant
                </h4>
                <p className="text-[11px] text-cyan-200/90 font-mono">
                  Ask about experience & stack
                </p>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={dismissWelcomePopup}
              aria-label="Dismiss popup"
              className="text-slate-300 hover:text-white hover:bg-white/10 p-1 rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Light Body */}
          <div className="p-4 bg-white">
            <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 text-xs text-slate-700 mb-3 leading-relaxed">
              <p>
                👋 <strong>Hi there!</strong> Exploring Sajjad's portfolio?
                I can instantly summarize his <strong>4+ years in .NET, React, AI</strong>, live projects, or certifications!
              </p>
            </div>

            {/* Quick Suggestion Chips */}
            <div className="space-y-1.5 mb-3.5">
              <p className="text-[10px] uppercase tracking-wider font-mono text-cyan-700 font-bold">
                Popular Quick Inquiries:
              </p>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => handleOpenChat('Tell me about Sajjad Ali')}
                  className="text-[11px] bg-slate-100 hover:bg-cyan-50 border border-slate-200 hover:border-cyan-400 text-slate-700 hover:text-cyan-800 px-2.5 py-1 rounded-full transition-all"
                >
                  ⚡ 30-Sec Pitch
                </button>
                <button
                  onClick={() => handleOpenChat("What is Sajjad's technical stack?")}
                  className="text-[11px] bg-slate-100 hover:bg-cyan-50 border border-slate-200 hover:border-cyan-400 text-slate-700 hover:text-cyan-800 px-2.5 py-1 rounded-full transition-all"
                >
                  🛠️ Tech Stack
                </button>
                <button
                  onClick={() => handleOpenChat('Tell me about the Attendance Log System')}
                  className="text-[11px] bg-slate-100 hover:bg-cyan-50 border border-slate-200 hover:border-cyan-400 text-slate-700 hover:text-cyan-800 px-2.5 py-1 rounded-full transition-all"
                >
                  🚀 ALS Project
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleOpenChat()}
                className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-semibold py-2 px-3.5 rounded-xl shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Ask About Sajjad</span>
                <ArrowRight className="w-3.5 h-3.5 ml-auto opacity-70" />
              </button>
              <button
                onClick={dismissWelcomePopup}
                className="text-[11px] text-slate-500 hover:text-slate-800 px-2.5 py-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                Later
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* 2. EXPANDABLE CHATBOT DRAWER / WINDOW (Light Body with Navy Header) */}
      {isOpen && (
        <section
          aria-label="Interactive Career Assistant"
          className="fixed bottom-20 sm:bottom-24 right-3 sm:right-6 z-50 w-[calc(100vw-1.5rem)] sm:w-[440px] h-[580px] max-h-[82vh] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-slate-300 bg-white text-slate-800 animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Chat Window Header (Same Brand Navy Color) */}
          <header className="bg-gradient-to-r from-[#0c234b] via-[#0e2a58] to-[#12366e] border-b border-cyan-500/30 p-3.5 flex items-center justify-between select-none text-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white border border-white/20 shadow-sm">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <span
                  className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#0c234b] rounded-full"
                  title="Online"
                />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white tracking-wide">
                  Sajjad Ali Assistant
                </h3>
                <p className="text-[11px] text-cyan-200/90 font-mono">
                  Full-Stack • Solutions Engineer
                </p>
              </div>
            </div>

            {/* Actions: Refresh & Close */}
            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                title="Restart conversation"
                className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Restart chat"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close chat"
                className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </header>

          {/* Messages Scroll Area (Light clean background) */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/80 scroll-smooth">
            {messages.map((msg) => {
              const isBot = msg.sender === 'bot';

              return (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${isBot ? 'justify-start' : 'justify-end'}`}
                >
                  {/* Bot Avatar Icon */}
                  {isBot && (
                    <div className="w-7 h-7 rounded-full bg-cyan-100 border border-cyan-300 flex items-center justify-center text-cyan-800 shrink-0 mt-0.5">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  {/* Message Bubble */}
                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 shadow-sm relative group ${
                      isBot
                        ? 'bg-white border border-slate-200/90 text-slate-800'
                        : 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white ml-auto border border-blue-500'
                    }`}
                  >
                    {/* Copy Button for Bot Messages */}
                    {isBot && (
                      <button
                        onClick={() => handleCopyText(msg.id, msg.text)}
                        title="Copy answer"
                        className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-all"
                        aria-label="Copy text"
                      >
                        {copiedId === msg.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    )}

                    {/* Text Body */}
                    {renderMessageContent(msg.text)}

                    {/* Links if available */}
                    {msg.links && msg.links.length > 0 && (
                      <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap gap-2">
                        {msg.links.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.url}
                            target={link.url.startsWith('mailto:') ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs bg-cyan-50 hover:bg-cyan-100 border border-cyan-200 text-cyan-900 px-2.5 py-1.5 rounded-lg transition-all font-medium"
                          >
                            <span>{link.label}</span>
                            <ExternalLink className="w-3 h-3 text-cyan-700" />
                          </a>
                        ))}
                      </div>
                    )}

                    {/* Follow-up Suggestion Chips */}
                    {msg.chips && msg.chips.length > 0 && (
                      <div className="mt-3 pt-2.5 border-t border-slate-100">
                        <p className="text-[10px] text-slate-500 font-mono tracking-wider uppercase mb-1.5">
                          Suggested Questions:
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {msg.chips.map((chip, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleSendMessage(chip)}
                              className="text-xs bg-slate-100 hover:bg-cyan-50 border border-slate-200 hover:border-cyan-300 text-slate-700 hover:text-cyan-800 px-2.5 py-1 rounded-full transition-colors text-left flex items-center gap-1"
                            >
                              <span className="text-cyan-600 text-[10px]">↳</span>
                              <span>{chip}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Timestamp */}
                    <div
                      className={`text-[9px] mt-1.5 ${
                        isBot ? 'text-slate-400' : 'text-cyan-100 text-right'
                      }`}
                    >
                      {msg.timestamp}
                    </div>
                  </div>

                  {/* User Avatar Icon */}
                  {!isBot && (
                    <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 mt-0.5 shadow-sm">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-cyan-100 border border-cyan-300 flex items-center justify-center text-cyan-800 shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl px-4 py-2.5 flex items-center gap-1.5 shadow-sm">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></span>
                  <span className="text-xs text-slate-500 ml-1 font-mono">
                    Searching career data...
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts Bar (Always accessible shortcuts) */}
          <div className="px-3 py-1.5 bg-slate-100 border-t border-slate-200 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            <span className="text-[10px] text-slate-500 font-mono shrink-0">
              ⚡ Quick:
            </span>
            {INITIAL_SUGGESTIONS.slice(0, 4).map((sug, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(sug.query)}
                className="text-[11px] whitespace-nowrap bg-white hover:bg-cyan-50 text-slate-700 hover:text-cyan-800 px-2 py-0.5 rounded border border-slate-200 hover:border-cyan-300 transition-colors shadow-2xs"
              >
                {sug.label.replace(/^[^\w\s]+/, '').trim()}
              </button>
            ))}
          </div>

          {/* Chat Input Field (Clean light container) */}
          <footer className="p-3 bg-white border-t border-slate-200">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about Sajjad's stack, projects, experience..."
                className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:bg-white transition-colors"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim() || isTyping}
                aria-label="Send message"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white p-2.5 rounded-xl shadow-md transition-all flex items-center justify-center shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            {/* Removed the bottom label "Sajjad Ali Verified Knowledge Base" */}
            <div className="mt-1 flex items-center justify-end text-[10px] text-slate-400 font-mono px-1">
              <span>Press Enter ↵</span>
            </div>
          </footer>
        </section>
      )}

      {/* 3. PERSISTENT FLOATING LAUNCHER BUTTON (Bottom-Right) */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-50">
        <button
          onClick={() => {
            if (isOpen) {
              setIsOpen(false);
            } else {
              handleOpenChat();
            }
          }}
          aria-label={isOpen ? 'Close Assistant' : 'Open Sajjad Career Assistant'}
          className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/20"
        >
          {isOpen ? (
            <X className="w-6 h-6 transition-transform group-hover:rotate-90 duration-200" />
          ) : (
            <>
              <Bot className="w-7 h-7 text-white" />
              {/* Online Green Pulse Indicator */}
              <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#09172e]"></span>
              </span>
              {/* Tooltip on Hover */}
              <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-[#0c2247] px-3 py-1.5 text-xs font-semibold text-cyan-200 opacity-0 shadow-lg border border-cyan-400/30 transition-opacity duration-200 group-hover:opacity-100">
                💬 Chat with Assistant
              </span>
            </>
          )}
        </button>
      </div>
    </>
  );
};
