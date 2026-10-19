import { 
  User, 
  Bot, 
  Headset,  
  MessageSquareText,
  ArrowRight
} from "lucide-react";
import { conversationalSales } from "@/data/whatsappmarketing";
import { BsCheckAll } from "react-icons/bs";

export default function ConversationalSalesThread() {
  return (
    <section className="relative bg-black py-12 md:py-32 px-6 z-0 overflow-hidden">
      
      {/* Abstract Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-900/15 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-900/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto md:max-w-[90%] relative z-10">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-bold tracking-wide uppercase">
            <MessageSquareText size={16} />
            <span>{conversationalSales.eyebrow}</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            {conversationalSales.title}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            {conversationalSales.body}
          </p>
        </div>

        {/* The Giant Chat Thread Layout */}
        <div className="max-w-4xl mx-auto flex flex-col space-y-8 md:space-y-12">
          
          {/* STEP 1: Understand Intent (Left Aligned / Incoming) */}
          <div className="flex w-full justify-start items-end gap-4 animate-[fadeIn_0.5s_ease-out_forwards]">
            <div className="hidden md:flex flex-none w-12 h-12 rounded-full bg-white/5 border border-white/10 items-center justify-center text-gray-400">
              <User size={20} />
            </div>
            <div className="relative max-w-[90%] md:max-w-[75%] bg-[#111111] border border-white/10 rounded-3xl rounded-bl-sm p-6 md:p-8 hover:border-blue-500/30 transition-colors duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {conversationalSales.steps[0].title}
                </h3>
              </div>
              <p className="text-lg text-gray-400 leading-relaxed">
                {conversationalSales.steps[0].text}
              </p>
              <div className="mt-4 flex items-center justify-end text-xs font-bold text-gray-600 uppercase tracking-widest">
                Step {conversationalSales.steps[0].number}
              </div>
            </div>
          </div>

          {/* STEP 2: Recommend (Right Aligned / Outgoing) */}
          <div className="flex w-full justify-end items-end gap-4 animate-[fadeIn_0.7s_ease-out_forwards]">
            <div className="relative max-w-[90%] md:max-w-[75%] bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl rounded-br-sm p-6 md:p-8 shadow-[0_10px_40px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_50px_rgba(37,99,235,0.3)] transition-shadow duration-300 text-left">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {conversationalSales.steps[1].title}
                </h3>
              </div>
              <p className="text-lg text-blue-100 leading-relaxed">
                {conversationalSales.steps[1].text}
              </p>
              <div className="mt-4 flex items-center justify-end gap-2 text-xs font-bold text-blue-300 uppercase tracking-widest">
                Step {conversationalSales.steps[1].number}
                <BsCheckAll size={16} className="text-blue-300" />
              </div>
            </div>
            <div className="hidden md:flex flex-none w-12 h-12 rounded-full bg-blue-600 border border-blue-400/50 items-center justify-center text-white shadow-lg">
              <Bot size={20} />
            </div>
          </div>

          {/* STEP 3: Answer Questions (Left Aligned / Incoming) */}
          <div className="flex w-full justify-start items-end gap-4 animate-[fadeIn_0.9s_ease-out_forwards]">
            <div className="hidden md:flex flex-none w-12 h-12 rounded-full bg-white/5 border border-white/10 items-center justify-center text-gray-400">
              <User size={20} />
            </div>
            <div className="relative max-w-[90%] md:max-w-[75%] bg-[#111111] border border-white/10 rounded-3xl rounded-bl-sm p-6 md:p-8 hover:border-blue-500/30 transition-colors duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {conversationalSales.steps[2].title}
                </h3>
              </div>
              <p className="text-lg text-gray-400 leading-relaxed">
                {conversationalSales.steps[2].text}
              </p>
              <div className="mt-4 flex items-center justify-end text-xs font-bold text-gray-600 uppercase tracking-widest">
                Step {conversationalSales.steps[2].number}
              </div>
            </div>
          </div>

          {/* STEP 4: Take the Next Action (Right Aligned / Outgoing) */}
          <div className="flex w-full justify-end items-end gap-4 animate-[fadeIn_1.1s_ease-out_forwards]">
            <div className="relative max-w-[90%] md:max-w-[75%] bg-gradient-to-br from-blue-600 to-indigo-800 rounded-3xl rounded-br-sm p-6 md:p-8 shadow-[0_10px_40px_rgba(37,99,235,0.2)] hover:shadow-[0_15px_50px_rgba(37,99,235,0.3)] transition-shadow duration-300 text-left">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {conversationalSales.steps[3].title}
                </h3>
              </div>
              <p className="text-lg text-blue-100 leading-relaxed">
                {conversationalSales.steps[3].text}
              </p>
              <div className="mt-4 flex items-center justify-end gap-2 text-xs font-bold text-blue-300 uppercase tracking-widest">
                Step {conversationalSales.steps[3].number}
                <BsCheckAll size={16} className="text-blue-300" />
              </div>
            </div>
            <div className="hidden md:flex flex-none w-12 h-12 rounded-full bg-blue-600 border border-blue-400/50 items-center justify-center text-white shadow-lg">
              <Bot size={20} />
            </div>
          </div>

          {/* STEP 5: Hand Off to Sales (Centered / System Notification) */}
          <div className="w-full hidden md:flex justify-center pt-8 animate-[fadeIn_1.3s_ease-out_forwards]">
            <div className="inline-flex flex-col items-center gap-4">
              <div className="h-12 w-px bg-gradient-to-b from-blue-500/50 to-transparent" />
              <div className="bg-white/5 border border-white/10 rounded-full px-6 py-3 flex items-center gap-4 backdrop-blur-sm shadow-xl">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Headset size={16} />
                </div>
                <div>
                  <span className="text-sm font-bold text-white block">
                    {conversationalSales.steps[4].title}
                  </span>
                  <span className="text-xs text-gray-400">
                    {conversationalSales.steps[4].text}
                  </span>
                </div>
                <ArrowRight size={16} className="text-gray-600 ml-2" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}