import React from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { theme } from '../theme';

interface TypingIndicatorProps {
  delay: number;
  duration: number;
}

export const TypingIndicator: React.FC<TypingIndicatorProps> = ({ delay, duration }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const startFrame = delay * fps;
  const endFrame = (delay + duration) * fps;
  const localFrame = frame - startFrame;

  if (frame < startFrame || frame > endFrame) return null;

  const opacity = interpolate(localFrame, [0, 10], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Animated dots
  const dot1Scale = interpolate(
    (localFrame % 30) / 30,
    [0, 0.33, 0.66, 1],
    [1, 1.4, 1, 1],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  const dot2Scale = interpolate(
    ((localFrame + 10) % 30) / 30,
    [0, 0.33, 0.66, 1],
    [1, 1.4, 1, 1],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  const dot3Scale = interpolate(
    ((localFrame + 20) % 30) / 30,
    [0, 0.33, 0.66, 1],
    [1, 1.4, 1, 1],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        marginBottom: theme.spacing.md,
        paddingLeft: theme.spacing.md,
        opacity,
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: 6,
          padding: `${theme.spacing.md}px ${theme.spacing.lg}px`,
          borderRadius: '20px 20px 20px 4px',
          backgroundColor: theme.colors.lumaBubble,
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: theme.colors.primary,
            transform: `scale(${dot1Scale})`,
            transition: 'transform 0.3s ease',
          }}
        />
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: theme.colors.primary,
            transform: `scale(${dot2Scale})`,
            transition: 'transform 0.3s ease',
          }}
        />
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: theme.colors.primary,
            transform: `scale(${dot3Scale})`,
            transition: 'transform 0.3s ease',
          }}
        />
      </div>
    </div>
  );
};
