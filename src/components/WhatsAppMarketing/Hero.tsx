import Link from "next/link";
import { 
  MessageCircle, 
  PhoneCall, 
  ArrowRight, 
  Zap, 
  TrendingUp, 
  Database, 
  BarChart3,
  Headphones,
  RefreshCw,
  Megaphone
} from "lucide-react";
import { hero } from "@/data/whatsappmarketing";

export default function WhatsAppPillarHero() {
  return (
    <section className="relative bg-black min-h-[70vh] flex items-center overflow-hidden pt-32 pb-20 z-0">
      
      {/* 1. Immersive Blue Ambient Background */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-blue-900/15 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 -z-20" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-indigo-900/15 blur-[120px] rounded-full pointer-events-none -z-20" />
      
      {/* Abstract Tech Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-50 -z-10 [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]" />

      <div className="mx-auto max-w-[90%] px-6 relative z-10 w-full">
        
        {/* Split Layout: Text on Left, Visual on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Hero Copy (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm animate-[fadeIn_0.5s_ease-out]">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-blue-600 text-sm font-black tracking-widest uppercase">
                {hero.eyebrow}
              </span>
            </div>
            
            {/* Massive H1 with Blue/Indigo Gradient */}
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight animate-[fadeIn_0.7s_ease-out]">
              Turn WhatsApp Into a <br className="hidden md:block" />
              <span className="text-green-500">
                Powerful Marketing, <br className="hidden lg:block" />Sales & CX Channel
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="mt-8 text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl animate-[fadeIn_0.9s_ease-out]">
              {hero.subtitle}
            </p>

            {/* CTA Button Group */}
            <div className="mt-12 flex flex-col md:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto animate-[fadeIn_1.1s_ease-out]">
              
              {/* Primary CTA (Solid Blue) */}
              <Link
                href={hero.primaryCta.href}
                className="group w-full cursor-pointer sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] hover:-translate-y-1"
              >
                <PhoneCall className="w-5 h-5" />
                {hero.primaryCta.label}
              </Link>

              
            </div>
          </div>

          {/* Right Side: Abstract Integration Network (5 Columns) */}
          <div className="lg:col-span-5 hidden lg:block relative min-h-[560px]">

  {/* Ambient Glow */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  w-[420px] h-[420px] rounded-full 
                  bg-blue-600/10 blur-[100px]" />

  {/* Large Abstract Rings */}
  <div className="absolute top-1/2 left-1/2 
                  -translate-x-1/2 -translate-y-1/2 
                  w-[420px] h-[420px] rounded-full 
                  border border-blue-500/10" />

  <div className="absolute top-1/2 left-1/2 
                  -translate-x-1/2 -translate-y-1/2 
                  w-[330px] h-[330px] rounded-full 
                  border border-white/5 
                  border-dashed 
                  animate-[spin_45s_linear_infinite]" />

  <div className="absolute top-1/2 left-1/2 
                  -translate-x-1/2 -translate-y-1/2 
                  w-[250px] h-[250px] rounded-full 
                  border border-blue-400/10" />

  {/* Connection Lines */}
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 500 560"
    fill="none"
  >
    {/* Top Left */}
    <path
      d="M250 280 C200 220 155 170 105 120"
      stroke="url(#lineGradient)"
      strokeWidth="1"
      strokeDasharray="4 8"
      opacity="0.5"
    />

    {/* Top Right */}
    <path
      d="M250 280 C300 220 350 170 410 120"
      stroke="url(#lineGradient)"
      strokeWidth="1"
      strokeDasharray="4 8"
      opacity="0.5"
    />

    {/* Middle Left */}
    <path
      d="M250 280 C190 270 135 270 75 280"
      stroke="url(#lineGradient)"
      strokeWidth="1"
      strokeDasharray="4 8"
      opacity="0.4"
    />

    {/* Middle Right */}
    <path
      d="M250 280 C310 270 365 270 425 280"
      stroke="url(#lineGradient)"
      strokeWidth="1"
      strokeDasharray="4 8"
      opacity="0.4"
    />

    {/* Bottom Left */}
    <path
      d="M250 280 C200 340 155 390 110 440"
      stroke="url(#lineGradient)"
      strokeWidth="1"
      strokeDasharray="4 8"
      opacity="0.5"
    />

    {/* Bottom Right */}
    <path
      d="M250 280 C300 340 345 390 395 440"
      stroke="url(#lineGradient)"
      strokeWidth="1"
      strokeDasharray="4 8"
      opacity="0.5"
    />

    <defs>
      <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
        <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>

  {/* Central Abstract Hub */}
  <div className="absolute top-1/2 left-1/2 
                  -translate-x-1/2 -translate-y-1/2 
                  w-[150px] h-[150px] z-20">

    {/* Outer Glow */}
    <div className="absolute inset-[-25px] rounded-full 
                    bg-blue-500/10 blur-2xl" />

    {/* Outer Ring */}
    <div className="absolute inset-0 rounded-full 
                    border border-blue-400/20 
                    animate-[pulse_4s_ease-in-out_infinite]" />

    {/* Main Orb */}
    <div className="absolute inset-[12px] rounded-full 
                    bg-gradient-to-br from-blue-500/20 
                    via-indigo-500/10 to-transparent
                    border border-blue-400/30
                    backdrop-blur-xl
                    flex items-center justify-center
                    shadow-[0_0_80px_rgba(59,130,246,0.25)]">

      {/* Abstract Message Core */}
      <div className="relative w-16 h-16 rounded-2xl
                      bg-gradient-to-br from-blue-500 to-indigo-600
                      flex items-center justify-center
                      shadow-[0_0_40px_rgba(59,130,246,0.45)]">

        <MessageCircle className="w-8 h-8 text-white" />

        {/* Tiny orbiting dots */}
        <span className="absolute -top-2 -right-2 w-3 h-3 
                         rounded-full bg-cyan-400 
                         shadow-[0_0_15px_rgba(34,211,238,0.8)]" />

        <span className="absolute -bottom-1 -left-2 w-2 h-2 
                         rounded-full bg-indigo-300" />
      </div>
    </div>
  </div>


  {/* ───────────────────────── */}
  {/* TOP LEFT — MARKETING */}
  {/* ───────────────────────── */}

  <div className="absolute top-[8%] left-[4%] 
                  animate-[float_6s_ease-in-out_infinite]">

    <div className="flex items-center gap-3">

      <div className="w-11 h-11 rounded-xl 
                      bg-blue-500/10 
                      border border-blue-400/20
                      backdrop-blur-md
                      flex items-center justify-center">

        <Megaphone className="w-5 h-5 text-blue-400" />
      </div>

      <div>
        <p className="text-sm font-semibold text-white">
          Marketing
        </p>

        <p className="text-[10px] text-gray-500">
          Campaigns & Promotions
        </p>
      </div>

    </div>
  </div>


  {/* ───────────────────────── */}
  {/* TOP RIGHT — AUTOMATION */}
  {/* ───────────────────────── */}

  <div className="absolute top-[8%] right-[2%]
                  animate-[float_7s_ease-in-out_infinite_reverse]">

    <div className="flex items-center gap-3">

      <div className="w-11 h-11 rounded-xl 
                      bg-indigo-500/10 
                      border border-indigo-400/20
                      backdrop-blur-md
                      flex items-center justify-center">

        <Zap className="w-5 h-5 text-indigo-400" />
      </div>

      <div>
        <p className="text-sm font-semibold text-white">
          Automation
        </p>

        <p className="text-[10px] text-gray-500">
          Smart Customer Journeys
        </p>
      </div>

    </div>
  </div>


  {/* ───────────────────────── */}
  {/* MIDDLE LEFT — CRM */}
  {/* ───────────────────────── */}

  <div className="absolute top-[46%] left-[-2%]
                  animate-[float_8s_ease-in-out_infinite]">

    <div className="flex items-center gap-3">

      <div className="w-11 h-11 rounded-xl 
                      bg-cyan-500/10 
                      border border-cyan-400/20
                      backdrop-blur-md
                      flex items-center justify-center">

        <Database className="w-5 h-5 text-cyan-400" />
      </div>

      <div>
        <p className="text-sm font-semibold text-white">
          CRM
        </p>

        <p className="text-[10px] text-gray-500">
          Customer Data
        </p>
      </div>

    </div>
  </div>


  {/* ───────────────────────── */}
  {/* MIDDLE RIGHT — RETARGETING */}
  {/* ───────────────────────── */}

  <div className="absolute top-[46%] right-[-2%]
                  animate-[float_7s_ease-in-out_infinite_reverse]">

    <div className="flex items-center gap-3">

      <div className="w-11 h-11 rounded-xl 
                      bg-violet-500/10 
                      border border-violet-400/20
                      backdrop-blur-md
                      flex items-center justify-center">

        <RefreshCw className="w-5 h-5 text-violet-400" />
      </div>

      <div>
        <p className="text-sm font-semibold text-white">
          Retargeting
        </p>

        <p className="text-[10px] text-gray-500">
          Re-engage Customers
        </p>
      </div>

    </div>
  </div>


  {/* ───────────────────────── */}
  {/* BOTTOM LEFT — SUPPORT */}
  {/* ───────────────────────── */}

  <div className="absolute bottom-[10%] left-[8%]
                  animate-[float_6.5s_ease-in-out_infinite_reverse]">

    <div className="flex items-center gap-3">

      <div className="w-11 h-11 rounded-xl 
                      bg-sky-500/10 
                      border border-sky-400/20
                      backdrop-blur-md
                      flex items-center justify-center">

        <Headphones className="w-5 h-5 text-sky-400" />
      </div>

      <div>
        <p className="text-sm font-semibold text-white">
          Support
        </p>

        <p className="text-[10px] text-gray-500">
          Real-Time Conversations
        </p>
      </div>

    </div>
  </div>


  {/* ───────────────────────── */}
  {/* BOTTOM RIGHT — ANALYTICS */}
  {/* ───────────────────────── */}

  <div className="absolute bottom-[10%] right-[6%]
                  animate-[float_8s_ease-in-out_infinite]">

    <div className="flex items-center gap-3">

      <div className="w-11 h-11 rounded-xl 
                      bg-emerald-500/10 
                      border border-emerald-400/20
                      backdrop-blur-md
                      flex items-center justify-center">

        <BarChart3 className="w-5 h-5 text-emerald-400" />
      </div>

      <div>
        <p className="text-sm font-semibold text-white">
          Analytics
        </p>

        <p className="text-[10px] text-gray-500">
          Track & Optimize
        </p>
      </div>

    </div>
  </div>


  {/* Decorative Particles */}

  <div className="absolute top-[25%] left-[42%] w-1 h-1 rounded-full bg-blue-400 shadow-[0_0_12px_#60a5fa]" />
  <div className="absolute top-[68%] left-[30%] w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_15px_#818cf8]" />
  <div className="absolute top-[30%] right-[30%] w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
  <div className="absolute bottom-[25%] right-[32%] w-1 h-1 rounded-full bg-blue-300 shadow-[0_0_12px_#93c5fd]" />

</div>

        </div>
      </div>

      {/* 4. Bottom Fade to connect to the next section smoothly */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
      
    </section>
  );
}   