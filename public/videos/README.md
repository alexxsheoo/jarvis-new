# Product video assets

`VideoShowcase` expects MP4 files at these paths. Until they exist the component
renders a labelled "Video asset pending" placeholder rather than a broken player
— nothing on the page breaks if they are missing.

| Path | Used by |
|---|---|
| `jarvis-system-demo.mp4` | Homepage "See Jarvis Work" section |
| `jarvis-ai-staff.mp4` | Reserved — AI Staff |
| `jarvis-lead-engine.mp4` | Reserved — Lead Engines |

Guidelines:

- **H.264 MP4**, since the component declares `type="video/mp4"`.
- **No audio track.** Playback is muted and looping by design; audio would be
  silently discarded and only inflate the file.
- Keep loops short (10–20s) and small (< 6 MB) — they autoplay on load.
- Supply a matching poster image and pass it via the `poster` prop.
