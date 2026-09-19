'use client'

import React, { useState } from "react";
import Image from "next/image";
import { 
  Bot, 
  Sparkles, 
  Filter, 
  PackageSearch, 
  RefreshCcw, 
  Headset,
  ChevronRight
} from "lucide-react";
import { aiAndChatbots } from "@/data/whatsappEcommerce";
import gueerTee from '@/assets/greek-4.jpeg'

// Map icons
const tabIcons = [Sparkles, Bot, Filter, PackageSearch, RefreshCcw, Headset];

// Updated Mock chat scenarios to support image attachments
const mockChats = [
  {
    userText: "Hey! What is this tee?",
    userImage: gueerTee,
    aiText: "Good eye! That is the RELIC OF RUIN TEE from Guerr. Would you like me to check if we have your size in stock?",
  },
  {
    userText: "Do you offer international shipping?",
    aiText: "Yes, we ship to over 50 countries! Standard international shipping takes 7-10 business days. Can I help you estimate shipping costs?",
  },
  {
    userText: "I'm interested in your B2B wholesale pricing.",
    aiText: "Great! To connect you with the right account manager, roughly how many units are you looking to order monthly?",
  },
  {
    userText: "Can you tell me the status of order #84920?",
    aiText: "Checking now... Good news! Your order has shipped and is out for delivery today. Here is your tracking link: [Track Order]",
  },
  {
    userText: "These shoes don't fit. I need to exchange them for a size 10.",
    aiText: "I'm sorry they didn't fit! Let's get that exchange started. Are the shoes unworn and in their original packaging?",
  },
  {
    userText: "This isn't answering my question. I need to speak to a person.",
    aiText: "I completely understand. Please hold for just a moment while I transfer this chat and your details to a live support agent.",
  }
];

export default function AiAndChatbots() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-black py-20 md:py-32 overflow-hidden px-6 z-0">
      
      {/* AI Blue Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-blue-900/20 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 -z-10" />

      <div className="mx-auto md:max-w-[90%] lg:max-w-7xl">
        
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center z-10 relative mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-wide">
            <Bot size={16} />
            <span>{aiAndChatbots.eyebrow}</span>
          </div>
          
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white leading-tight">
            {aiAndChatbots.title}
          </h2>
          
          <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
            {aiAndChatbots.body}
          </p>
        </div>

        {/* Interactive Split Layout */}
        <div className="mt-16 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          {/* Left Side: The Interactive Chat Window (5 Columns) */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
             {/* Device Mockup Frame */}
             <div className="relative mx-auto w-full max-w-md bg-gradient-to-br from-white/10 to-transparent p-[1px] rounded-[2.5rem] shadow-[0_0_50px_rgba(37,99,235,0.15)]">
                <div className="relative bg-[#0a0a0a] rounded-[2.5rem] h-[550px] flex flex-col overflow-hidden border-4 border-white/10">
                  
                  {/* Mock Chat Header */}
                  <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10 bg-white/5 backdrop-blur-md">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                      <Bot className="text-blue-400 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">AI Assistant</h4>
                      <p className="text-blue-400 text-xs flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" /> Online
                      </p>
                    </div>
                  </div>

                  {/* Mock Chat Body (Reacts to State) */}
                  <div className="flex-1 p-6 flex flex-col justify-center gap-6 overflow-hidden">
                    
                    {/* User Message (Now supports Image + Text) */}
                    <div className="self-end max-w-[85%] bg-white/10 text-white text-sm p-4 rounded-2xl rounded-tr-sm animate-[fadeIn_0.3s_ease-out] flex flex-col gap-3">
                      
                      {/* Render image if it exists in the active mock chat */}
                      {mockChats[activeIndex].userImage && (
                        <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-white/10">
                          <Image 
                            src={mockChats[activeIndex].userImage}
                            alt="Uploaded product"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                      
                      {/* User Text */}
                      {mockChats[activeIndex].userText && (
                        <span className="leading-relaxed">
                          {mockChats[activeIndex].userText}
                        </span>
                      )}
                    </div>

                    {/* AI Message */}
                    <div className="self-start max-w-[90%] bg-blue-600 text-white text-sm p-4 rounded-2xl rounded-tl-sm shadow-[0_10px_20px_rgba(37,99,235,0.2)] animate-[fadeIn_0.5s_ease-out] leading-relaxed">
                      {mockChats[activeIndex].aiText}
                    </div>
                  </div>

                  {/* Mock Chat Input Footer */}
                  <div className="px-6 py-4 bg-white/5 border-t border-white/10 flex items-center gap-3">
                    <div className="flex-1 h-10 rounded-full bg-white/5 border border-white/10" />
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center opacity-50">
                      <ChevronRight className="text-white w-5 h-5" />
                    </div>
                  </div>

                </div>
             </div>
          </div>

          {/* Right Side: The Selectable Feature List (7 Columns) */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-3">
            {aiAndChatbots.cards.map((card, index) => {
              const Icon = tabIcons[index];
              const isActive = activeIndex === index;

              return (
                <button
                  key={card.title}
                  onClick={() => setActiveIndex(index)}
                  className={`group w-full flex items-center gap-5 p-5 rounded-2xl border text-left transition-all duration-300 ${
                    isActive 
                      ? "bg-blue-500/10 border-blue-500/50 shadow-[0_0_30px_rgba(37,99,235,0.1)]" 
                      : "bg-[#050505] border-white/5 hover:bg-white/[0.03] hover:border-white/20"
                  }`}
                >
                  {/* Icon */}
                  <div className={`flex-none w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                    isActive ? "bg-blue-600" : "bg-white/5 group-hover:bg-white/10"
                  }`}>
                    <Icon className={`w-6 h-6 ${isActive ? "text-white" : "text-gray-400 group-hover:text-gray-300"}`} />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold transition-colors duration-300 ${
                      isActive ? "text-blue-400" : "text-white"
                    }`}>
                      {card.title}
                    </h3>
                    {/* Only show the description for the active item to keep it looking like an accordion */}
                    <div className={`grid transition-all duration-300 ease-in-out ${
                      isActive ? "grid-rows-[1fr] mt-2 opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}>
                      <p className="overflow-hidden text-sm text-gray-300 leading-relaxed">
                        {card.text}
                      </p>
                    </div>
                  </div>

                  {/* Active Indicator Chevron */}
                  <ChevronRight className={`flex-none w-5 h-5 transition-all duration-300 ${
                    isActive ? "text-blue-400 opacity-100 translate-x-0" : "text-gray-600 opacity-0 -translate-x-4"
                  }`} />
                </button>
              );
            })}
          </div>
          
        </div>
        
      </div>
    </section>
  );
}