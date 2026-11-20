"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { portfolioData } from "@/data/portfolio";
import type { LifeMoment } from "@/data/portfolio";

const ASPECT_CYCLE = [
  "aspect-[4/5]",
  "aspect-[5/4]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-[5/4]",
  "aspect-square",
  "aspect-[4/5]",
] as const;

export function LifeAndAll() {
  const { life, lifeMoments } = portfolioData;
  const reduceMotion = useReducedMotion();
  const [selectedMoment, setSelectedMoment] = useState<LifeMoment | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const closeModal = () => {
    setSelectedMoment(null);
  };

  useEffect(() => {
    if (!selectedMoment) return;

    const opener = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusFrame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setSelectedMoment(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      opener?.focus();
    };
  }, [selectedMoment]);

  return (
    <section aria-labelledby="life-title" className="scroll-mt-36 px-0 pb-20 pt-8 sm:pt-10 lg:scroll-mt-6" id="life">
      <div className="max-w-[720px]">
        <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] text-ink sm:text-5xl" id="life-title">
          {life.galleryHeadline}
        </h1>
        <p className="mt-5 max-w-[58ch] text-[15.5px] leading-relaxed text-muted sm:text-base">
          {life.gallerySubtitle}
        </p>
      </div>

      <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3" data-testid="life-collage">
        {lifeMoments.map((moment, index) => {
          const aspect = ASPECT_CYCLE[index % ASPECT_CYCLE.length];

          return (
            <motion.div
              className="mb-6 break-inside-avoid"
              initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
              key={moment.id}
              transition={{ duration: 0.35, ease: "easeOut", delay: reduceMotion ? 0 : (index % 3) * 0.05 }}
              viewport={{ once: true, margin: "-40px" }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            >
              <button
                className="group block w-full cursor-pointer rounded-2xl border border-line bg-surface p-3 pb-4 text-left shadow-card transition-all duration-200 ease-out hover:-translate-y-1 hover:border-ink/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-4 focus-visible:ring-offset-cream"
                data-testid="life-moment"
                onClick={(event) => {
                  triggerRef.current = event.currentTarget;
                  setSelectedMoment(moment);
                }}
                type="button"
              >
                <span className={`relative block overflow-hidden rounded-xl bg-elevated ${aspect}`}>
                  <Image
                    alt=""
                    className="object-cover object-center transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    fill
                    sizes="(max-width: 639px) calc(100vw - 3rem), (max-width: 1023px) calc(50vw - 4rem), 280px"
                    src={moment.imageUrl}
                  />
                </span>
                <span className="mt-3 block px-1 font-mono text-xs font-medium uppercase tracking-[0.1em] text-muted-strong">
                  {moment.category}
                </span>
                <span className="mt-1 block px-1 font-display text-base font-bold leading-snug tracking-[-0.02em] text-ink">
                  {moment.caption}
                </span>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm sm:p-8"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
              aria-labelledby="life-moment-title"
              aria-modal="true"
              className="relative w-full max-w-3xl rounded-2xl border border-line bg-cream p-3 shadow-2xl sm:p-5"
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 10 }}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 10 }}
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <button
                aria-label={life.closePreviewLabel}
                className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface/95 text-ink shadow-sm transition-colors hover:border-ink/30 hover:bg-elevated"
                onClick={closeModal}
                ref={closeButtonRef}
                type="button"
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
              <div className="relative h-[min(68vh,620px)] w-full overflow-hidden rounded-xl bg-elevated">
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
