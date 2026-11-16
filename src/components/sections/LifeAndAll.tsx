"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useState } from "react";

import { portfolioData } from "@/data/portfolio";
import type { LifeMoment } from "@/data/portfolio";

const tapeClasses: Record<Exclude<LifeMoment["tapeColor"], null | undefined>, string> = {
  pink: "bg-[#FBCFE8]",
  yellow: "bg-[#FDE047]",
  blue: "bg-[#BAE6FD]",
};

export function LifeAndAll() {
  const { life, lifeMoments } = portfolioData;
  const [selectedMoment, setSelectedMoment] = useState<LifeMoment | null>(null);

  useEffect(() => {
    if (!selectedMoment) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedMoment(null);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMoment]);

  return (
    <section aria-labelledby="life-title" className="px-0 pb-24 pt-10" id="life">
      <div className="max-w-[760px]">
        <p className="eyebrow">{life.eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-[#141824] sm:text-5xl" id="life-title">
          {life.galleryHeadline}
        </h1>
        <p className="mt-5 max-w-2xl text-[15.5px] leading-relaxed text-[#525866] sm:text-base">
          {life.gallerySubtitle}
        </p>
        <p className="script-accent mt-6 text-2xl text-[#141824]">{life.galleryNote}</p>
      </div>

      <motion.div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3" layout>
        <AnimatePresence mode="popLayout">
          {lifeMoments.map((moment) => (
            <motion.button
              animate={{ opacity: 1, y: 0 }}
              className={`group relative text-left ${moment.rotation} focus-visible:outline-none`}
              data-testid="life-moment"
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              initial={{ opacity: 0, y: 18 }}
              key={moment.id}
              layout
              onClick={() => setSelectedMoment(moment)}
              transition={{ duration: 0.24, ease: "easeOut" }}
              type="button"
              whileHover={{ y: -7 }}
              whileTap={{ scale: 0.985 }}
            >
              {moment.tapeColor ? (
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute -top-3 left-1/2 z-10 h-7 w-24 -translate-x-1/2 rotate-[-5deg] opacity-90 shadow-sm ${tapeClasses[moment.tapeColor]}`}
                />
              ) : null}
              <div className="relative bg-white p-3 pb-5 shadow-[0_14px_30px_rgba(20,24,36,0.08)] ring-1 ring-inset ring-black/5 transition-shadow duration-200 group-hover:shadow-[0_18px_34px_rgba(20,24,36,0.12)]">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#F5F1EB]">
                  <Image
                    alt={moment.caption}
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.035]"
                    fill
                    sizes="(max-width: 639px) calc(100vw - 3rem), (max-width: 1023px) calc(50vw - 4rem), 280px"
                    src={moment.imageUrl}
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#71717A]">{moment.category}</span>
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-[#A1A1AA] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#141824]" />
                </div>
                <p className="mt-2 max-w-[26ch] font-display text-lg font-bold leading-tight tracking-[-0.025em] text-[#141824]">{moment.caption}</p>
              </div>
              <span className="sr-only">{life.previewLabel}: {moment.caption}</span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedMoment ? (
          <motion.div
            animate={{ opacity: 1 }}
            aria-label={life.previewLabel}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#141824]/70 p-4 backdrop-blur-sm sm:p-8"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={() => setSelectedMoment(null)}
          >
            <motion.div
              animate={{ opacity: 1, scale: 1, y: 0 }}
              aria-labelledby="life-moment-title"
              aria-modal="true"
              className="relative w-full max-w-3xl rounded-2xl bg-[#FAF8F5] p-3 shadow-2xl sm:p-5"
              exit={{ opacity: 0, scale: 0.97, y: 10 }}
              initial={{ opacity: 0, scale: 0.97, y: 10 }}
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <button
                aria-label={life.closePreviewLabel}
                autoFocus
                className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#141824] shadow-sm ring-1 ring-[#EAE6DF] transition-transform hover:scale-105"
                onClick={() => setSelectedMoment(null)}
                type="button"
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
              <div className="relative h-[min(68vh,620px)] w-full overflow-hidden rounded-xl bg-[#F5F1EB]">
                <Image
                  alt={selectedMoment.caption}
                  className="object-contain"
                  fill
                  sizes="(max-width: 768px) calc(100vw - 2rem), 720px"
                  src={selectedMoment.imageUrl}
                />
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-3 px-1 pb-1 pt-4 sm:px-2">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#71717A]">{selectedMoment.category}</p>
                  <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-[#141824]" id="life-moment-title">{selectedMoment.caption}</h2>
                </div>
                <p className="font-script text-xl text-[#525866]">A moment in the margins.</p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
