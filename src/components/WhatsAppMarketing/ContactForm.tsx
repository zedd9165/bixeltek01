'use client';

import React from 'react';
import { 
  CheckCircle2, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Clock
} from 'lucide-react';
import ContactFromNew from '@/components/ContactFormNew';

export default function WhatsAppContactForm() {
  return (
    <section id="contact" className="relative bg-[#030712] py-24 md:py-32 px-6 overflow-hidden scroll-mt-20">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-green-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[180px] rounded-full pointer-events-none -z-10" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />

      <div className="lg:max-w-[90%] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Copy & Trust Signals (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-400 text-xs font-bold tracking-widest uppercase">
                  GET IN TOUCH
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6 font-inter">
                Turn WhatsApp Into Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-blue-400">
                  Highest-Converting
                </span>{' '}
                Sales Channel
              </h2>

              {/* Subtitle */}
              <p className="text-base md:text-lg text-gray-300 font-poppins leading-relaxed mb-10">
                Talk to our WhatsApp marketing specialists to audit your customer journey, explore custom automation workflows, and discover how much revenue your business is leaving on the table.
              </p>

              {/* Key Deliverables / Trust Badges */}
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white font-inter">Free Strategy Audit & Workflow Blueprint</h4>
                    <p className="text-sm text-gray-400 mt-0.5 font-poppins">Get a step-by-step roadmap tailored to your specific sales cycle and audience.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white font-inter">Official WhatsApp Business API</h4>
                    <p className="text-sm text-gray-400 mt-0.5 font-poppins">Verified green tick assistance, high-volume broadcasting, and 100% Meta compliance.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white font-inter">Fast 24-Hour Consultation Turnaround</h4>
                    <p className="text-sm text-gray-400 mt-0.5 font-poppins">Zero obligation, honest numbers, and immediate actionable insights.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact Anchors */}
            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center gap-6">
              <a
                href="tel:+919100032301"
                className="inline-flex items-center gap-3 text-gray-300 hover:text-green-400 transition-colors text-lg font-medium"
              >
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-green-400">
                  <Phone size={16} />
                </div>
                <span>+91 91000 32301</span>
              </a>

              <a
                href="mailto:connect@bixeltekglobal.com"
                className="inline-flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors text-lg font-medium"
              >
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                  <Mail size={16} />
                </div>
                <span>connect@bixeltekglobal.com</span>
              </a>
            </div>
          </div>

          {/* Right Column: ContactFromNew (6 Cols) */}
          <div className="lg:col-span-6 rounded-2xl border border-white/[0.1] bg-white/[0.03] backdrop-blur-md p-4 sm:p-6 md:p-8 shadow-2xl">
            <ContactFromNew />
          </div>

        </div>
      </div>
    </section>
  );
}
