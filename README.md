# Luma Video Demo Generator

This project generates a polished 60-90 second video demo showcasing a Luma chat conversation.

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

- **Duration**: ~95 seconds
- **Resolution**: 1080x1920 (vertical/mobile format)
- **Frame Rate**: 30 fps
- **Format**: MP4

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
