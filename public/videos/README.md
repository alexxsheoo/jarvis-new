# Product video assets

The landing page's "See Jarvis Work" section uses the provided narrated Jarvis CRM overview.

| File | Purpose |
| --- | --- |
| `jarvis-system-demo.mp4` | Complete 74-second overview, 1920 x 1080 at 25 fps, H.264 video and original AAC audio. |
| `jarvis-crm-overview-poster.jpg` | Matching poster extracted from the supplied overview. |
| `jarvis-why-poster.png` | Existing poster for the separate scroll-revealed "Why teams switch" section. |

`VideoShowcase` uses native controls for play/pause, seeking, volume, and fullscreen. It does not autoplay or loop; audio is preserved and plays only after visitor interaction. `preload="none"` keeps the video file from downloading with the initial page. The poster appears until playback begins, including for visitors who prefer reduced motion.

The supplied source was optimized for web delivery with H.264 CRF 22, the original AAC track copied unchanged, and `faststart` metadata. The original file in Downloads was not changed. Keep the `/jarvis-new/` prefix on public media paths in the GitHub Pages preview branch.
