import React from 'react';
import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { theme } from '../theme';

interface MessageBubbleProps {
  text: string;
  isUser: boolean;
  delay: number;
  index: number;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ text, isUser, delay, index }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const startFrame = delay * fps;
  const localFrame = Math.max(0, frame - startFrame);

  // Smooth entrance animation
  const opacity = interpolate(localFrame, [0, 15], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const scale = spring({
    frame: localFrame,
    fps,
    config: {
      damping: 12,
      stiffness: 200,
    },
  });

  const translateY = interpolate(localFrame, [0, 15], [10, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  if (localFrame < 0) return null;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: isUser ? 'flex-end' : 'flex-start',
        marginBottom: theme.spacing.md,
        opacity,
        transform: `translateY(${translateY}px) scale(${scale})`,
        paddingLeft: isUser ? 60 : theme.spacing.md,
        paddingRight: isUser ? theme.spacing.md : 60,
      }}
    >
      <div
        style={{
          maxWidth: '80%',
          padding: `${theme.spacing.md}px ${theme.spacing.lg}px`,
          borderRadius: isUser ? '20px 20px 4px 20px' : '20px 20px 20px 4px',
          backgroundColor: isUser ? theme.colors.userBubble : theme.colors.lumaBubble,
          color: isUser ? '#FFFFFF' : theme.colors.textPrimary,
          fontFamily: theme.fonts.primary,
          fontSize: theme.typography.body.fontSize,
          lineHeight: theme.typography.body.lineHeight,
          boxShadow: isUser ? theme.shadows.sm : 'none',
        }}
      >
        {text}
      </div>
    </div>
  );
};
