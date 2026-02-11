# Valentine's Day Interactive Website - PRD

## Overview
A cute, playful, romantic Valentine interactive website inspired by viral Canva/TikTok Valentine websites. The website guides the user step-by-step through a Valentine gift experience.

## Tech Stack
- React (CRA) + Tailwind CSS + Shadcn UI
- useState for page navigation (no React Router)
- CSS animations (no animation libraries)
- Nunito font for playful romantic typography

## Pages
1. **Landing** - Cute cat illustration + "Will you be my Happy Valentine?" heading + Next button
2. **Choices** - Three gift cards: Our Memories, Love Songs, A Letter For You
3. **Photos** - Polaroid-style photo gallery with hover effects
4. **Music** - Playlist card with 8 love songs + Spotify placeholder
5. **Letter** - Two-column: romantic love letter + flower bouquet image

## Design System
- **Color Palette**: Blush rose (primary), soft pink, pastel cream, warm peach
- **Animations**: Floating hearts, sparkles, heartbeat, card hover lift, page transitions
- **Typography**: Nunito 400-800 weights
- **Style**: Rounded cards, soft shadows, romantic gradient backgrounds

## Status: Feature Update Complete
All 5 pages implemented with full navigation, animations, and responsive design.

### Music Page Upgrade (v2)
- **Clickable Song List**: 10 songs with HTML5 audio playback, play/pause toggle, active row highlighting, progress bar, EQ visualizer, "Preview" label
- **Spotify Integration**: Green "Play Full Songs on Spotify" CTA button (opens new tab) + embedded Spotify playlist iframe
- **Ambient Background Music**: Site-wide soft piano ambient loop, starts on first user click, mute/unmute toggle button (fixed bottom-right)
- **Audio files**: Generated programmatically — 10 preview clips (~20s each) + 1 ambient track (2min loop), served from /public/music/
