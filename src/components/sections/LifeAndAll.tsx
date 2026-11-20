"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

import { portfolioData } from "@/data/portfolio";
import type { LifeMoment } from "@/data/portfolio";

type Accent = "star" | "spark" | "stamp" | null;

interface CollageRecipe {
  /** Vertical offset so cards sit at staggered heights inside their column. */
  offset: string;
  aspect: string;
  rotation: string;
  /** Position, angle, and pastel tone for the washi-tape strip. */
  tape: string;
  accent: Accent;
  accentPosition: string;
}

// Hand-tuned recipes cycled across moments so adjacent cards never look identical.
const collageRecipes: CollageRecipe[] = [
  {
    offset: "sm:pt-0",
    aspect: "aspect-[4/5]",
    rotation: "-rotate-3",
    tape: "left-1/2 -top-3 h-7 w-24 -translate-x-1/2 -rotate-6 bg-[#FBCFE8]/85",
    accent: "star",
    accentPosition: "-right-5 -top-6 rotate-12",
  },
  {
    offset: "sm:pt-10",
    aspect: "aspect-[5/4]",
    rotation: "rotate-2",
    tape: "-left-5 top-3 h-6 w-20 -rotate-[38deg] bg-[#FDE047]/85",
    accent: "stamp",
    accentPosition: "-bottom-4 -right-3 rotate-6",
  },
  {
    offset: "sm:pt-4",
    aspect: "aspect-square",
    rotation: "-rotate-1",
    tape: "-right-5 top-3 h-6 w-20 rotate-[38deg] bg-[#BAE6FD]/85",
    accent: null,
    accentPosition: "",
  },
  {
    offset: "sm:pt-14",
    aspect: "aspect-[3/4]",
    rotation: "rotate-3",
    tape: "left-1/2 -top-3 h-7 w-24 -translate-x-1/2 rotate-3 bg-[#BBF7D0]/85",
    accent: "spark",
    accentPosition: "-left-6 top-1/3 -rotate-12",
  },
  {
    offset: "sm:pt-2",
    aspect: "aspect-[5/4]",
    rotation: "-rotate-2",
    tape: "left-6 -top-3 h-7 w-20 -rotate-6 bg-[#FBCFE8]/85",
    accent: "stamp",
    accentPosition: "-right-4 -top-4 -rotate-6",
  },
  {
    offset: "sm:pt-8",
    aspect: "aspect-square",
    rotation: "rotate-2",
    tape: "right-6 -top-3 h-7 w-20 rotate-3 bg-[#FDE047]/85",
    accent: "star",
    accentPosition: "-bottom-5 -left-5 -rotate-6",
  },
  {
    offset: "sm:pt-12",
    aspect: "aspect-[4/5]",
    rotation: "-rotate-2",
    tape: "-right-5 top-3 h-6 w-20 rotate-[38deg] bg-[#BBF7D0]/85",
    accent: "spark",
    accentPosition: "-right-6 bottom-16 rotate-12",
  },
];

function StarDoodle() {
  return (
    <svg aria-hidden="true" className="h-9 w-9 text-[#141824]/45" fill="none" viewBox="0 0 40 40">
      <path
        d="M20 4.5c1.2 6.8 3.4 10.4 8.9 12.6-5.6 1.9-7.8 5.6-8.9 13.4-1.4-7.6-3.7-11.3-9.4-13.2 5.9-2.1 8.2-6 9.4-12.8Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
      <path d="M33 30.5l1.2 3M35.6 31.4l-3.6 1.4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.4" />
    </svg>
  );
}

function SparkDoodle() {
  return (
    <svg aria-hidden="true" className="h-9 w-9 text-[#141824]/40" fill="none" viewBox="0 0 40 40">
      <path
        d="M20 5v8M20 27v8M5 20h8M27 20h8M9.5 9.5l5 5M25.5 25.5l5 5M30.5 9.5l-5 5M14.5 25.5l-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function CollageAccent({ accent, label }: { accent: Accent; label: string }) {
  if (accent === "star") return <StarDoodle />;
  if (accent === "spark") return <SparkDoodle />;
  if (accent === "stamp") {
    return (
      <span className="block rounded-sm border border-dashed border-[#141824]/30 bg-[#FAF8F5] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-[#525866] shadow-sm">
        {label}
      </span>
    );
  }
  return null;
}

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
        <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] text-ink sm:text-5xl" id="life-title">
          {life.galleryHeadline}
        </h1>
        <p className="mt-5 max-w-[58ch] text-[15.5px] leading-relaxed text-muted sm:text-base">
          {life.gallerySubtitle}
        </p>
      </div>

      <div className="mt-14 columns-1 gap-8 px-2 sm:columns-2 lg:columns-3" data-testid="life-collage">
        {lifeMoments.map((moment, index) => {
          const recipe = collageRecipes[index % collageRecipes.length];

          return (
            <motion.div
              className={`relative mb-12 break-inside-avoid hover:z-30 focus-within:z-30 ${recipe.offset}`}
              initial={{ opacity: 0 }}
              key={moment.id}
              transition={{ duration: 0.4, ease: "easeOut", delay: (index % 3) * 0.06 }}
              viewport={{ once: true, margin: "-40px" }}
              whileInView={{ opacity: 1 }}
            >
              <button
                className={`group relative block w-full cursor-pointer rounded-sm border border-[#EAE6DF] bg-white p-3 pb-4 text-left shadow-[0_4px_14px_rgba(20,24,36,0.06)] transition-all duration-300 ease-out hover:z-30 hover:-translate-y-3 hover:rotate-0 hover:scale-[1.03] hover:shadow-[0_16px_32px_rgba(20,24,36,0.14)] focus-visible:-translate-y-3 focus-visible:rotate-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141824] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FAF8F5] ${recipe.rotation}`}
                data-testid="life-moment"
                onClick={() => setSelectedMoment(moment)}
                type="button"
              >
                <span aria-hidden="true" className={`pointer-events-none absolute z-10 shadow-sm ${recipe.tape}`} />

                {recipe.accent ? (
                  <span aria-hidden="true" className={`pointer-events-none absolute z-10 ${recipe.accentPosition}`}>
                    <CollageAccent accent={recipe.accent} label={moment.category} />
                  </span>
                ) : null}

                <span className={`relative block overflow-hidden bg-[#F5F1EB] ${recipe.aspect}`}>
                  <Image
                    alt=""
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    fill
                    sizes="(max-width: 639px) calc(100vw - 3rem), (max-width: 1023px) calc(50vw - 4rem), 280px"
                    src={moment.imageUrl}
                  />
                </span>
                <span className="mt-3 block px-1 font-script text-xl leading-snug text-[#141824]">{moment.caption}</span>
                <span className="sr-only">{life.previewLabel}</span>
              </button>
            </motion.div>
          );
        })}
      </div>

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
              <div className="px-1 pb-1 pt-4 sm:px-2">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-muted-strong">{selectedMoment.category}</p>
                <h2 className="mt-1.5 font-display text-2xl font-extrabold tracking-[-0.03em] text-ink" id="life-moment-title">{selectedMoment.caption}</h2>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
