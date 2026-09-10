import { cn } from "@/lib/cn";

type VideoShowcaseProps = {
  src: string;
  /** Describes the footage for assistive technology. */
  label: string;
  poster?: string;
  caption?: string;
  aspect?: string;
  className?: string;
};

/** A narrated overview: playback and audio start only when the visitor chooses. */
export function VideoShowcase({
  src,
  label,
  poster,
  caption,
  aspect = "16 / 9",
  className,
}: VideoShowcaseProps) {
  return (
    <figure className={cn("flex flex-col gap-3", className)}>
      <div
        className="overflow-hidden rounded-lg border border-line-strong bg-ink-900"
        style={{ aspectRatio: aspect }}
      >
        <video
          controls
          playsInline
          preload="none"
          poster={poster}
          aria-label={label}
          className="size-full bg-ink-950 object-contain"
        >
          <source src={src} type="video/mp4" />
          <p>
            Your browser does not support embedded video.{" "}
            <a href={src}>Open the Jarvis CRM overview.</a>
          </p>
        </video>
      </div>
      {caption ? (
        <figcaption className="text-sm text-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
