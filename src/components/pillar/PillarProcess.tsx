import React from "react";
import {
  BarChart3,
  Code2,
  Database,
  Layers,
  Megaphone,
  PenTool,
  Rocket,
  Search,
  Settings2,
  ShieldCheck,
  Target,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export interface PillarStage {
  number: string;
  title: string;
  description: string;
  /** Optional icon key from ICON_MAP (e.g. "search", "build"). Falls back to a default by position. */
  icon?: string;
}

export interface PillarProcessProps {
  id?: string;
  eyebrow?: string;
  h2?: string;
  intro?: string;
  stages: PillarStage[];
}

/** The primary brand blue used across accents, badges, and icons. */
const BLUE = "#1B3BD9";
/** Soft blue tint for badge backgrounds and badge outer frames. */
const BADGE_FILL = "#EEF2FF";

const ICON_MAP: Record<string, LucideIcon> = {
  search: Search,
  scope: Target,
  stack: Layers,
  design: PenTool,
  build: Code2,
  launch: Rocket,
  analytics: BarChart3,
  automate: Workflow,
  campaign: Megaphone,
  data: Database,
  quality: ShieldCheck,
  team: Users,
  setup: Settings2,
};

const DEFAULT_ICONS = ["search", "scope", "stack", "design", "build", "launch"];

const HEX = "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)";
const OCTAGON = "polygon(30% 0, 70% 0, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0 70%, 0 30%)";
const SHIELD = "polygon(0 0, 100% 0, 100% 62%, 50% 100%, 0 62%)";

/** Distinct geometric badge frames. */
const SHAPES: { w: number; h: number; radius?: string; clip?: string }[] = [
  { w: 84, h: 84, radius: "20px" },
  { w: 104, h: 68, radius: "9999px" },
  { w: 88, h: 98, clip: HEX },
  { w: 88, h: 88, radius: "9999px" },
  { w: 88, h: 88, clip: OCTAGON },
  { w: 84, h: 96, clip: SHIELD },
];

function Badge({ index, Icon }: { index: number; Icon: LucideIcon }) {
  const b = SHAPES[index % SHAPES.length];
  const outer = b.clip ? { clipPath: b.clip } : { borderRadius: b.radius };
  const inner = b.clip ? { clipPath: b.clip } : { borderRadius: `calc(${b.radius} - 3px)` };

  return (
    <div
      className="relative flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:scale-105"
      style={{ width: b.w, height: b.h, background: "#C7D2FE", ...outer }}
    >
      <div
        className="absolute inset-[2.5px] flex items-center justify-center transition-colors duration-300 group-hover:bg-blue-100"
        style={{ background: BADGE_FILL, ...inner }}
      >
        <Icon className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" style={{ color: BLUE }} strokeWidth={1.85} />
      </div>
    </div>
  );
}

/**
 * Builds blue grid dividers between cards.
 * Layout: 1 column on mobile, 2 on md, 3 on lg.
 */
function cellBorders(i: number): string {
  return [
    // mobile (1 column): line above every cell except first
    i > 0 ? "border-t" : "",
    // md (2 columns)
    i % 2 === 0 ? "md:border-r" : "md:border-r-0",
    i >= 2 ? "md:border-t" : "md:border-t-0",
    // lg (3 columns)
    i % 3 !== 2 ? "lg:border-r" : "lg:border-r-0",
    i >= 3 ? "lg:border-t" : "lg:border-t-0",
  ].join(" ");
}

export default function PillarProcess({
  id = "process",
  eyebrow = "HOW WE BUILD",
  h2 = "From First Conversation to Launch and Beyond",
  intro,
  stages,
}: PillarProcessProps) {
  return (
    <section
      id={id}
      className="relative scroll-mt-32 overflow-hidden bg-white py-24 text-[#08080C] md:py-32 border-t border-blue-100"
    >
      <div className="relative mx-auto w-full px-4 sm:px-6 lg:max-w-[90%] lg:px-8">
        
        {/* Centered header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2.5 text-[13px] font-semibold text-[#1B3BD9] font-poppins px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200">
            <span className="h-2 w-2 rotate-45 bg-[#1B3BD9]" />
            {eyebrow}
          </div>
          <h2 className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight font-inter text-[#08080C] md:text-4xl lg:text-5xl">
            {h2}
          </h2>
          <div className="mx-auto mt-7 h-0.5 w-16 bg-blue-600 rounded-full" />
          {intro && (
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 font-poppins md:text-lg">
              {intro}
            </p>
          )}
        </div>

        {/* Lined Grid with Blue Dividers */}
        <ol className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {stages.map((s, i) => {
            const key = s.icon ?? DEFAULT_ICONS[i % DEFAULT_ICONS.length];
            const Icon = ICON_MAP[key] ?? Settings2;

            return (
              <li
                key={s.title}
                className={`group flex flex-col items-center border-blue-500/80 px-6 py-12 text-center transition-all duration-300 hover:bg-blue-50/40 sm:px-10 lg:py-16 ${cellBorders(
                  i
                )}`}
              >
                <div className="flex h-[100px] items-center justify-center">
                  <Badge index={i} Icon={Icon} />
                </div>

                <div className="mt-8 text-xs font-bold uppercase tracking-wider text-[#1B3BD9] font-poppins">
                  Step {s.number}
                </div>
                
                <h3 className="mt-2 text-2xl font-bold leading-tight tracking-tight font-inter text-[#08080C] group-hover:text-[#1B3BD9] transition-colors lg:text-[1.7rem]">
                  {s.title}
                </h3>
                
                <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-gray-600 font-poppins">
                  {s.description}
                </p>
              </li>
            );
          })}
        </ol>

      </div>
    </section>
  );
}