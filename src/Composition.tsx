import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { DeviceFrame } from './components/DeviceFrame';
import { ChatView } from './components/ChatView';
import { EndCard } from './components/EndCard';
import { theme } from './theme';
import { endCardStartTime } from './conversation';

export const LumaDemo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const currentTime = frame / fps;
  const showEndCard = currentTime >= endCardStartTime;

  // Background gradient animation
  const gradientShift = interpolate(
    frame,
    [0, fps * 90],
    [0, 360],
    {
      extrapolateRight: 'wrap',
    }
  );

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(${gradientShift}deg, #F8F7FC 0%, #E8E6F5 50%, #F8F7FC 100%)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Device mockup container */}
      <div
        style={{
          transform: showEndCard ? 'scale(0.95)' : 'scale(1)',
          transition: 'transform 0.5s ease',
          filter: showEndCard ? 'blur(0px)' : 'none',
        }}
      >
        <DeviceFrame>
          <ChatView />
          <EndCard />
        </DeviceFrame>
      </div>

      {/* Subtle ambient glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          height: 600,
          background: `radial-gradient(circle, ${theme.colors.primaryLight}20 0%, transparent 70%)`,
          pointerEvents: 'none',
          opacity: 0.5,
        }}
      />
    </AbsoluteFill>
  );
};
