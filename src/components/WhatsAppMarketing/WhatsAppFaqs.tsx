'use client';
import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  MessageCircleQuestion, 
  FileQuestion
} from "lucide-react";
import { faqs } from "@/data/whatsappmarketing"; // Adjust path as needed

export default function WhatsAppFaqs() {
  const [searchQuery, setSearchQuery] = useState('');
  // Track open state by the exact question string so it stays open even during filtering
  const [openQuestion, setOpenQuestion] = useState<string | null>(faqs[0]?.question || null);

  // Live filter logic
  const filteredFaqs = faqs.filter((faq) => {
    const query = searchQuery.toLowerCase();
    return (
      faq.question.toLowerCase().includes(query) || 
      faq.answer.toLowerCase().includes(query)
    );
  });

  // Split into two columns for desktop to avoid the "endless scroll" problem of 19 items
  const midPoint = Math.ceil(filteredFaqs.length / 2);
  const leftColumn = filteredFaqs.slice(0, midPoint);
  const rightColumn = filteredFaqs.slice(midPoint);

  const toggleAccordion = (question: string) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  // Reusable Accordion Card Component
  const FaqCard = ({ item }: { item: typeof faqs[0] }) => {
    const isOpen = openQuestion === item.question;
    
    return (
      <div 
        className={`group relative rounded-3xl border transition-all duration-500 overflow-hidden ${
          isOpen 
            ? 'bg-gradient-to-br from-blue-900/20 to-[#050505] border-blue-500/30 shadow-[0_10px_30px_rgba(37,99,235,0.1)]' 
            : 'bg-[#050505] border-white/5 hover:border-white/15 hover:bg-white/[0.02]'
        }`}
      >
        <button
          onClick={() => toggleAccordion(item.question)}
          className="w-full flex items-start justify-between gap-4 p-6 md:p-8 text-left focus:outline-none"
        >
          <h3 className={`font-bold text-lg leading-snug transition-colors duration-300 ${
            isOpen ? 'text-blue-100' : 'text-gray-200 group-hover:text-white'
          }`}>
            {item.question}
          </h3>
          
          <div className={`flex-none w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-500 mt-0.5 ${
            isOpen 
              ? 'bg-blue-600 border-blue-500 text-white rotate-45' 
              : 'bg-white/5 border-white/10 text-gray-500 group-hover:bg-white/10 group-hover:text-white'
          }`}>
            <Plus size={16} />
          </div>
        </button>

        {/* CSS Grid trick for buttery-smooth height animation */}
        <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}>
          <div className="overflow-hidden">
            <p className="px-6 md:px-8 pb-6 md:pb-8 text-gray-400 leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative bg-black py-12 md:py-32 px-6 z-0 overflow-hidden">
      
      {/* Abstract Ambient Background Glows */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-indigo-900/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto md:max-w-[90%] relative z-10">
        
        {/* Section Header & Search Bar */}
        <div className="flex flex-col md:flex-row text-center gap-8 mb-16 lg:mb-20">
          
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-bold tracking-wide uppercase">
              <MessageCircleQuestion size={16} />
              <span>Questions & Answers</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              Frequently Asked <br className="hidden sm:block" /> Questions
            </h2>
          </div>

        </div>

        {/* FAQ Masonry Split Grid */}
        {filteredFaqs.length > 0 ? (
          <div className="grid lg:grid-cols-2 gap-4 md:gap-6 items-start">
            
            {/* Left Column */}
            <div className="flex flex-col gap-4 md:gap-6">
              {leftColumn.map((item, idx) => (
                <FaqCard key={`left-${idx}`} item={item} />
              ))}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4 md:gap-6">
              {rightColumn.map((item, idx) => (
                <FaqCard key={`right-${idx}`} item={item} />
              ))}
            </div>

          </div>
        ) : (
          <div className="w-full py-24 flex flex-col items-center justify-center text-center bg-[#050505] border border-white/5 rounded-3xl">
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center text-gray-600 mb-6">
              <FileQuestion size={40} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No results found</h3>
            <p className="text-gray-500 max-w-md">
              We couldn't find any questions matching "{searchQuery}". Try adjusting your search terms or contact our support team.
            </p>
            <button 
              onClick={() => setSearchQuery('')}
              className="mt-8 text-blue-400 hover:text-blue-300 font-medium underline underline-offset-4"
            >
              Clear search
            </button>
          </div>

        )}

      </div>
    </section>
  );
}