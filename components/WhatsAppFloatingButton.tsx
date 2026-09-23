"use client";

import { useState } from "react";
import { MessageCircle, X, Send, Phone, Sparkles } from "lucide-react";

export default function WhatsAppFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("Hi Junior! I'd like to ask about detailing packages for my car.");
  const phoneNumber = "353899772513";

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end">
      {/* Pop-up Quick Chat Box */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] sm:w-96 max-w-sm rounded-3xl bg-white border border-neutral-200 shadow-2xl p-4 sm:p-5 animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-sm font-bold font-display">
                J
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-300 border-2 border-white animate-pulse" />
              </div>
              <div>
                <div className="text-sm font-bold text-neutral-900 font-display">Junior (Master Detailer)</div>
                <div className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                  <span>● Online</span> • Direct WhatsApp
                </div>
              </div>
            </div>
            
            {/* High-Contrast Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              type="button"
              className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-900 hover:text-white text-neutral-700 flex items-center justify-center border border-neutral-200 shadow-sm transition-all cursor-pointer"
              aria-label="Close Chat"
            >
              <X className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

          <div className="my-3 p-3 rounded-2xl bg-emerald-50/70 border border-emerald-100 text-xs text-neutral-700 leading-relaxed">
            👋 <strong>Dia dhuit!</strong> Send me a quick photo or message about your car&apos;s condition and I&apos;ll give you an immediate estimate.
          </div>

          <form onSubmit={handleSendWhatsApp} className="space-y-3">
            <textarea
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full text-xs p-3 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 focus:outline-none focus:border-emerald-500 focus:bg-white resize-none"
              placeholder="Type your message..."
            />
            <div className="flex items-center justify-between gap-2">
              <a
                href="tel:+353899772513"
                className="text-[11px] text-neutral-600 hover:text-neutral-900 font-semibold flex items-center gap-1"
              >
                <Phone className="w-3 h-3 text-[#B38E3F]" />
                <span>Prefer direct call?</span>
              </a>
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
              >
                <span>Start Chat</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Main WhatsApp Trigger Pill / Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="group flex items-center gap-2.5 sm:gap-3 px-3.5 py-3 sm:px-5 sm:py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
        aria-label="Open WhatsApp live chat with Junior"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <div className="flex flex-col text-left">
          <span className="text-[9px] sm:text-[10px] uppercase font-extrabold tracking-wider text-emerald-100 -mb-0.5">
            Instant Estimate
          </span>
          <span className="text-xs font-bold font-display">WhatsApp Junior</span>
        </div>
      </button>
    </div>
  );
}
