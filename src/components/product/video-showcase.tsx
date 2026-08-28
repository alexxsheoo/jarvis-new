"use client";

import { FilmIcon, PauseIcon, PlayIcon, XIcon } from "lucide-react";
import { useRef, useState } from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/cn";
import { useReducedMotion } from "@/lib/use-reduced-motion";

type VideoShowcaseProps = {
  src: string;
  /** Required — describes the footage for assistive tech. */
  label: string;
  poster?: string;
  caption?: string;
  /** `16 / 9` by default. */
  aspect?: string;
  /** Adds a "Watch the full demo" modal. */
  modalSrc?: string;
  className?: string;
};

/**
 * Muted, looping product video. Never plays audio.
 *
 * Falls back to a labelled placeholder panel when the asset is missing, so the
 * page is intact before real footage exists. Autoplay is suppressed under
 * reduced motion — the viewer gets the poster and an explicit play control.
 */
export function VideoShowcase({
  src,
  label,
  poster,
  caption,
  aspect = "16 / 9",
  modalSrc,
  className,
}: VideoShowcaseProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  const [unavailable, setUnavailable] = useState(false);
  const [playing, setPlaying] = useState(!reduced);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play().then(
        () => setPlaying(true),
        () => setPlaying(false),
      );
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <figure className={cn("flex flex-col gap-3", className)}>
      <div
        className="relative overflow-hidden rounded-lg border border-line-strong bg-ink-900"
        style={{ aspectRatio: aspect }}
      >
        {unavailable ? (
          <div className="grid-field absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
            <FilmIcon
              aria-hidden
              className="size-6 text-faint"
              strokeWidth={1.5}
            />
            <p className="type-label-wide text-faint">
              Video asset pending
            </p>
            <p className="max-w-[42ch] text-sm text-muted">{label}</p>
          </div>
        ) : (
          <>
            <video
              ref={videoRef}
              // Muted + playsInline are what make autoplay legal; never add sound.
              muted
              loop
              playsInline
              autoPlay={!reduced}
              preload="metadata"
              poster={poster}
              aria-label={label}
              onError={() => setUnavailable(true)}
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              className="size-full object-cover"
            >
              <source src={src} type="video/mp4" />
            </video>

            <button
              type="button"
              onClick={toggle}
              aria-label={playing ? "Pause video" : "Play video"}
              className="absolute bottom-3 left-3 inline-flex size-9 items-center justify-center rounded-full border border-line-strong bg-ink-950/80 text-paper backdrop-blur-sm transition-colors hover:bg-ink-800"
            >
              {playing ? (
                <PauseIcon aria-hidden className="size-4" strokeWidth={1.5} />
              ) : (
                <PlayIcon aria-hidden className="size-4" strokeWidth={1.5} />
              )}
            </button>
          </>
        )}

        {modalSrc ? (
          <Sheet>
            <SheetTrigger className="absolute right-3 bottom-3 inline-flex items-center gap-2 rounded-full border border-line-strong bg-ink-950/80 px-3.5 py-2 text-xs font-medium text-paper backdrop-blur-sm transition-colors hover:bg-ink-800">
              Watch the Full Demo
            </SheetTrigger>
            <SheetContent aria-describedby={undefined} className="justify-center p-6">
              <SheetTitle className="sr-only">{label}</SheetTitle>
              <SheetClose
                aria-label="Close video"
                className="absolute top-4 right-4 inline-flex size-10 items-center justify-center rounded-sm text-muted transition-colors hover:text-paper"
              >
                <XIcon aria-hidden className="size-5" strokeWidth={1.5} />
              </SheetClose>
              <div className="mx-auto w-full max-w-5xl">
                <VideoShowcase src={modalSrc} label={`${label} — full demo`} />
              </div>
            </SheetContent>
          </Sheet>
        ) : null}
      </div>

      {caption ? (
        <figcaption className="text-xs text-faint">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
