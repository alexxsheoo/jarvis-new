"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { PlayIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

import { useReducedMotion } from "@/lib/use-reduced-motion";

gsap.registerPlugin(ScrollTrigger, SplitText);

/**
 * Scroll-pinned circular video reveal.
 *
 * FOUR LOCAL CHANGES from the source, each one required here:
 *
 * 1. No global style injection. The original injected `body, html {
 *    background-color: #0d0f0d !important }`, which repaints the entire site
 *    from one section. Colours now come from the design system and stay
 *    inside this component.
 * 2. Cleanup kills only its own ScrollTriggers. The original called
 *    ScrollTrigger.getAll().forEach(t => t.kill()), which destroys triggers
 *    belonging to every other component on the page.
 * 3. prefers-reduced-motion is honoured — no pin, no scrub, no split reveal.
 *    The video simply sits at full size, which is the same content without
 *    hijacking the scroll.
 * 4. The two full-viewport text screens are gone. This is a section inside a
 *    page, not a page; three stacked 100vh blocks would add five screens of
 *    scroll to the homepage.
 *
 * 5. The tags render visible and are hidden by the animation, not the other
 *    way round. Shipping them at opacity 0 means any path that skips the
 *    effect leaves a hole in the page.
 *
 * The external CDN badge and play-icon images are replaced with a lucide icon
 * so nothing hotlinks a third-party asset.
 */

export interface TagItem {
  id?: string;
  text: string;
  /** Design-system class, e.g. "border-hud bg-neon-glow text-neon-400". */
  tone?: string;
}

export interface HeroScrollVideoRevealProps {
  eyebrow?: string;
  headingText?: React.ReactNode;
  tags?: TagItem[];
  subText?: string;
  /** Omit until real footage exists — the poster stands in for it. */
  videoSrc?: string;
  posterSrc?: string;
  /** Shown under the frame — say plainly when the footage is a placeholder. */
  caption?: string;
  className?: string;
}

const DEFAULT_TAGS: TagItem[] = [
  { text: "One system", tone: "border-cobalt-500/40 bg-cobalt-glow text-cobalt-400" },
  { text: "Every lead answered", tone: "border-hud bg-neon-glow text-neon-400" },
  { text: "Work that carries itself", tone: "border-line-strong bg-ink-850 text-paper" },
];

export const HeroScrollVideoReveal: React.FC<HeroScrollVideoRevealProps> = ({
  eyebrow = "Why teams switch",
  headingText = "The case for running it as one system.",
  tags = DEFAULT_TAGS,
  subText,
  videoSrc,
  posterSrc = "/videos/jarvis-why-poster.png",
  caption,
  className = "",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoBoxRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const tagRefs = useRef<(HTMLDivElement | null)[]>([]);
  const reduced = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      // A missing file rejects here; the poster and caption cover that case.
      video.play().catch(() => {});
    }

    // Reduced motion: no pin, no scrub, no split.
    //
    // The aperture still has to be reopened. `useReducedMotion` reports false
    // on the first render by design — that is what keeps hydration
    // deterministic — so the animated pass has usually already run and left
    // the clip at circle(10%). Without this the section collapses to a pinhole
    // for exactly the people who asked for less motion, and the lazy image
    // inside it never loads. The tags need no such reset; they render visible.
    if (reduced) {
      if (videoBoxRef.current) {
        gsap.set(videoBoxRef.current, { clipPath: "none" });
      }
      return;
    }

    const ctx = gsap.context(() => {
      let split: SplitText | null = null;
      let words: Element[] = [];

      try {
        split = new SplitText(paraRef.current, {
          type: "words",
          wordsClass: "reveal-word inline-block origin-left will-change-transform",
        });
        words = split.words;
      } catch {
        words = paraRef.current
          ? Array.from(paraRef.current.querySelectorAll(".reveal-word"))
          : [];
      }

      if (words.length > 0) {
        gsap.set(words, { opacity: 0, rotate: 6, yPercent: 24 });
      }

      // Hide the tags here rather than in the markup. Anything that stops this
      // effect running — reduced motion, no JavaScript, a thrown plugin —
      // leaves them visible instead of leaving a hole in the page.
      tagRefs.current.forEach((el) => {
        if (el) {
          gsap.set(el, {
            opacity: 0,
            clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          });
        }
      });

      const revealTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "top 5%",
          scrub: 1.2,
        },
      });

      if (words.length > 0) {
        revealTl.to(words, {
          stagger: 0.15,
          opacity: 1,
          rotate: 0,
          yPercent: 0,
          ease: "power1.inOut",
        });
      }

      tagRefs.current.forEach((tagEl) => {
        if (!tagEl) return;
        revealTl.to(
          tagEl,
          {
            duration: 1,
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.out",
          },
          ">-0.4",
        );
      });

      // The aperture starts smaller on wide screens, where there is more
      // travel available to open it across.
      const mm = gsap.matchMedia();
      const pin = (query: string, from: string, end: string, scrub: number) =>
        mm.add(query, () => {
          gsap.set(videoBoxRef.current, { clipPath: from });
          gsap
            .timeline({
              scrollTrigger: {
                trigger: videoWrapperRef.current,
                start: "top top",
                end,
                scrub,
                pin: true,
                pinSpacing: true,
                anticipatePin: 1,
              },
            })
            .fromTo(
              videoBoxRef.current,
              { clipPath: from },
              { clipPath: "circle(150% at 50% 50%)", ease: "none" },
            );
        });

      pin("(max-width: 639.9px)", "circle(20% at 50% 50%)", "+=1200", 1.2);
      pin("(min-width: 640px) and (max-width: 1023.9px)", "circle(14% at 50% 50%)", "+=1700", 1.3);
      pin("(min-width: 1024px)", "circle(10% at 50% 50%)", "+=2200", 1.5);
    }, sectionRef);

    // Reverts only what this component created — other components' triggers
    // and tweens are left alone.
    return () => ctx.revert();
  }, [reduced]);

  return (
    <div ref={sectionRef} className={`relative w-full ${className}`}>
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-16 text-center md:py-24">
        <span className="type-label-wide text-cobalt-400">{eyebrow}</span>

        <p
          ref={paraRef}
          className="text-h2 md:text-display-md max-w-[20ch] text-balance text-paper"
        >
          {headingText}
        </p>

        <div className="flex flex-wrap justify-center gap-2.5">
          {tags.map((tag, idx) => (
            <div
              key={tag.id ?? `tag-${idx}`}
              ref={(el) => {
                tagRefs.current[idx] = el;
              }}
              className={`rounded-full border px-4 py-2 text-sm font-medium will-change-[clip-path,opacity] ${
                tag.tone ?? "border-line-strong bg-ink-850 text-paper"
              }`}
            >
              {tag.text}
            </div>
          ))}
        </div>

        {subText ? (
          <p className="max-w-[52ch] text-sm leading-relaxed text-muted">{subText}</p>
        ) : null}
      </div>

      {/* Pinned aperture. The wrapper is what pins; the box is what opens. */}
      <div
        ref={videoWrapperRef}
        className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-ink-950"
      >
        <div
          ref={videoBoxRef}
          className="relative flex h-full w-full items-center justify-center overflow-hidden bg-ink-950 will-change-[clip-path]"
        >
          {/* Until real footage exists the aperture reveals the poster, so the
              effect reads as finished rather than opening onto a black hole.
              Passing `videoSrc` swaps in the video with no other change. */}
          {videoSrc ? (
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={posterSrc}
              aria-label="Why teams run Jarvis as one system"
              className="h-full w-full bg-ink-950 object-cover"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={posterSrc}
              alt=""
              fill
              sizes="100vw"
              priority={false}
              className="bg-ink-950 object-cover"
            />
          )}

          {videoSrc ? (
            <span
              aria-hidden
              className="pointer-events-none absolute top-1/2 left-1/2 z-20 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-white/15 backdrop-blur-md md:size-16"
            >
              <PlayIcon className="size-5 text-paper md:size-6" strokeWidth={1.5} />
            </span>
          ) : null}
        </div>
      </div>

      {caption ? (
        <p className="mx-auto max-w-[62ch] px-6 py-6 text-center text-xs leading-relaxed text-faint">
          {caption}
        </p>
      ) : null}
    </div>
  );
};

export default HeroScrollVideoReveal;
