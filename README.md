# Luma Video Demo Generator

This project generates a polished 60-second video demo showcasing a Luma chat conversation.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/VivianFuVivianFu/video1)

## 🎬 Live Demo

- **Video:** [View Demo Video](./demo/luma_chat_demo.mp4)
- **Size:** 1.7 MB (web-optimized)
- **Format:** H.264 Main, AAC audio
- **Duration:** 60 seconds

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── ChatHeader.tsx       - Header with Luma branding
│   │   ├── ChatView.tsx         - Main chat interface
│   │   ├── DeviceFrame.tsx      - iPhone mockup frame
│   │   ├── EndCard.tsx          - Intelligence summary end card
│   │   ├── MessageBubble.tsx    - Individual message component
│   │   └── TypingIndicator.tsx  - Animated typing dots
│   ├── Composition.tsx          - Main video composition
│   ├── conversation.ts          - Conversation script & timing
│   ├── theme.ts                 - Luma brand design system
│   └── index.ts                 - Remotion registration
├── package.json
├── tsconfig.json
└── remotion.config.ts
```

## Installation

```bash
npm install
```

## Usage

### Preview the video (with hot reload)
```bash
npm run preview
```

### Render the final video
```bash
npm run render
```

The final video will be exported to: `demo/luma_chat_demo.mp4`

## Video Specifications

- **Duration**: 60 seconds
- **Resolution**: 720x1280 (vertical/mobile format)
- **Frame Rate**: 24 fps
- **Format**: MP4 (H.264 Main, AAC 128k)
- **File Size**: 1.7 MB
- **Compatibility**: All modern browsers, Vercel-ready

## Features

✅ Real-time typing indicators before Luma messages
✅ Smooth message animations with spring physics
✅ Auto-scrolling chat interface
✅ Professional iPhone mockup frame
✅ Brand-consistent colors and typography
✅ Intelligence summary end card
✅ Evidence-based therapeutic conversation flow

## Customization

- **Conversation**: Edit `src/conversation.ts` to modify messages and timing
- **Styling**: Update `src/theme.ts` for colors, fonts, and spacing
- **Video Settings**: Modify `remotion.config.ts` for resolution and duration

## Deployment

### Deploy to Vercel

1. Click the "Deploy with Vercel" button above, or
2. Follow the guide in [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)

The demo page will be automatically deployed with the video embedded.

### Local Testing

```bash
# Serve the demo page locally
npx serve .

# Open http://localhost:3000
```

## Documentation

- **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** - Complete project overview
- **[VIDEO_FIX_NOTES.md](./VIDEO_FIX_NOTES.md)** - Video compatibility fixes
- **[VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md)** - Deployment guide
