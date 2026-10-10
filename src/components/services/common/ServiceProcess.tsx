"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users2,
  Search,
  Network,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
  ChevronRight,
  ChevronLeft,
  type LucideIcon,
} from "lucide-react";

export interface ProcessStageItem {
  stageNumber: string;
  title: string;
  description: string;
  /** Optional override. Defaults are picked by position below. */
  icon?: LucideIcon;
}

export interface ServiceProcessProps {
  id?: string;
  eyebrow: string;
  h2: string;
  intro?: string;
  stages: ProcessStageItem[];
  supportingParagraph?: string;
}

// Default icons by position: Discovery, Architecture, Design, Development, Testing, Launch
const DEFAULT_ICONS: LucideIcon[] = [Search, Network, PenTool, Code2, ShieldCheck, Rocket];

const NODE = "3.5rem"; // node size (w-14 / h-14)
const HALF_NODE = "1.75rem"; // vertical centre of node = where the line runs
const GAP_X = "2rem"; // grid column gap (gap-x-8)
const ROW_GAP = "4rem"; // space between the two rows (mb-16)
const LOOP_PAD = "2.5rem"; // room on the right for the U-turn

type Item = { stage: ProcessStageItem; index: number };

/* ---------- Node (icon badge) ---------- */
function Node({ Icon, number }: { Icon: LucideIcon; number: string }) {
  return (
    <div className="relative">
      {/* soft glow */}
      <div className="absolute inset-0 rounded-2xl bg-blue-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 ring-4 ring-white group-hover:-translate-y-1 group-hover:scale-105 transition-transform duration-300">
        <Icon className="w-6 h-6" strokeWidth={2} />
      </div>
      {/* step number badge */}
      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-blue-500 text-blue-600 text-[10px] font-poppins font-bold flex items-center justify-center shadow-sm">
        {number}
      </span>
    </div>
  );
}

/* ---------- Desktop card ---------- */
function DesktopStage({
  item,
  delay,
  total,
}: {
  item: Item;
  delay: number;
  total: number;
}) {
  const { stage, index } = item;
  const Icon = stage.icon ?? DEFAULT_ICONS[index % DEFAULT_ICONS.length];
  const isLast = index === total - 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group flex flex-col items-center"
    >
      <Node Icon={Icon} number={`0${index + 1}`} />

      <div
        className={`mt-5 w-full flex-1 rounded-2xl border p-5 text-center transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-blue-500/10 group-hover:border-blue-300 ${
          isLast
            ? "bg-gradient-to-b from-blue-50 to-white border-blue-200"
            : "bg-gradient-to-b from-gray-50 to-white border-gray-200"
        }`}
      >
        <h3 className="text-xl font-bold font-inter text-[#08080C] group-hover:text-blue-600 transition-colors mb-2">
          {stage.title}
        </h3>
        <p className="text-sm text-gray-600 font-poppins leading-relaxed">
          {stage.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ---------- One desktop row with its connector line ---------- */
function Row({
  items,
  direction,
  total,
  baseDelay,
  children,
}: {
  items: Item[];
  direction: "ltr" | "rtl";
  total: number;
  baseDelay: number;
  children?: React.ReactNode; // used for the U-turn on row 1
}) {
  const ChevronIcon = direction === "ltr" ? ChevronRight : ChevronLeft;
  const colHalf = `calc((100% - 2 * ${GAP_X}) / 6)`;

  return (
    <div className="relative" style={{ paddingRight: LOOP_PAD }}>
      {/* grid + straight connector share the same box so % maths lines up */}
      <div className="relative">
        {/* horizontal line through node centres */}
        <div
          className={`absolute h-0.5 rounded-full ${
            direction === "ltr"
              ? "bg-gradient-to-r from-blue-300 to-indigo-300"
              : "bg-gradient-to-l from-indigo-300 to-purple-300"
          }`}
          style={{ top: `calc(${HALF_NODE} - 1px)`, left: colHalf, right: colHalf }}
        />

        {/* direction chevrons sitting on the line between nodes */}
        {[1, 2].map((n) => (
          <span
            key={n}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white border border-indigo-200 text-indigo-500 flex items-center justify-center shadow-sm"
            style={{
              top: HALF_NODE,
              left: `calc(${n} * (100% - 2 * ${GAP_X}) / 3 + ${n} * ${GAP_X} - ${GAP_X} / 2)`,
            }}
            aria-hidden
          >
            <ChevronIcon className="w-3.5 h-3.5" />
          </span>
        ))}

        <div
          className="relative grid grid-cols-3"
          style={{ columnGap: GAP_X }}
        >
          {items.map((item, i) => (
            <DesktopStage
              key={item.index}
              item={item}
              total={total}
              delay={baseDelay + i * 0.12}
            />
          ))}
        </div>
      </div>

      {children}
    </div>
  );
}

/* ---------- Mobile / tablet vertical timeline ---------- */
function MobileTimeline({ stages }: { stages: ProcessStageItem[] }) {
  return (
    <div className="lg:hidden relative">
      <div
        className="absolute w-0.5 bg-gradient-to-b from-blue-300 via-indigo-300 to-purple-300 rounded-full"
        style={{ left: HALF_NODE, top: HALF_NODE, bottom: HALF_NODE, transform: "translateX(-50%)" }}
      />
      <div className="space-y-8">
        {stages.map((stage, idx) => {
          const Icon = stage.icon ?? DEFAULT_ICONS[idx % DEFAULT_ICONS.length];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="group relative flex gap-5 items-start"
            >
              <div className="relative z-10 flex-shrink-0" style={{ width: NODE }}>
                <Node Icon={Icon} number={`0${idx + 1}`} />
              </div>
              <div className="flex-1 rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-5 group-hover:border-blue-300 group-hover:shadow-lg group-hover:shadow-blue-500/10 transition-all">
                <h3 className="text-lg font-bold font-inter text-[#08080C] group-hover:text-blue-600 transition-colors mb-1.5">
                  {stage.title}
                </h3>
                <p className="text-sm text-gray-600 font-poppins leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function ServiceProcess({
  id = "process",
  eyebrow,
  h2,
  intro,
  stages,
  supportingParagraph,
}: ServiceProcessProps) {
  const total = stages.length;
  const half = Math.ceil(total / 2);

  const firstRow: Item[] = stages
    .slice(0, half)
    .map((stage, i) => ({ stage, index: i }));
  // Second row is reversed so the path snakes: → → → then ← ← ←
  const secondRow: Item[] = stages
    .slice(half)
    .map((stage, i) => ({ stage, index: half + i }))
    .reverse();

  return (
    <section
      id={id}
      className="scroll-mt-24 py-24 bg-white text-[#08080C] relative border-t border-gray-200 overflow-hidden"
    >
      <div className="relative w-full lg:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Intro */}
        <div className="max-w-6xl mb-16 mx-auto md:text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-poppins font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>{eyebrow}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inter text-[#08080C] tracking-tight leading-[1.15] mb-5">
            {h2}
          </h2>
          {intro && (
            <p className="text-base md:text-lg text-gray-700 font-poppins leading-relaxed max-w-4xl mx-auto">
              {intro}
            </p>
          )}
        </div>

        {/* Desktop: two connected rows (snake) */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <div style={{ marginBottom: ROW_GAP }} className="relative">
            <Row items={firstRow} direction="ltr" total={total} baseDelay={0}>
              {/* U-turn: leaves the last node of row 1, loops right, returns into first node of row 2 */}
              <div
                className="absolute right-0 rounded-r-[2rem] border-2 border-l-0 border-indigo-300 pointer-events-none"
                style={{
                  top: `calc(${HALF_NODE} - 1px)`,
                  height: `calc(100% + ${ROW_GAP} + 2px)`,
                  width: `calc((100% - ${LOOP_PAD} - 2 * ${GAP_X}) / 6 + ${LOOP_PAD})`,
                }}
                aria-hidden
              />
            </Row>
          </div>

          <Row
            items={secondRow}
            direction="rtl"
            total={total}
            baseDelay={0.4}
          />
        </div>

        {/* Mobile / tablet: single vertical timeline */}
        <MobileTimeline stages={stages} />

        {/* Collaborative Expectations Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col text-center items-center gap-4 max-w-4xl mx-auto shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600">
            <Users2 className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wider text-gray-500 font-poppins">
              Partnership & Feedback Alignment
            </div>
            <p className="text-sm sm:text-base text-gray-700 font-poppins leading-relaxed">
              {supportingParagraph ||
                "Successful projects depend on prompt feedback during review stages and clear alignment on scope and commercial requirements."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}