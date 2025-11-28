import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { theme } from '../theme';
import { endCardStartTime } from '../conversation';

export const EndCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const startFrame = endCardStartTime * fps;
  const localFrame = Math.max(0, frame - startFrame);

  if (frame < startFrame) return null;

  const fadeIn = interpolate(localFrame, [0, 30], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const slideUp = spring({
    frame: localFrame,
    fps,
    config: {
      damping: 15,
      stiffness: 120,
    },
  });

  const translateY = interpolate(slideUp, [0, 1], [50, 0]);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: theme.colors.gradient,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing.xxl,
        opacity: fadeIn,
      }}
    >
      <div
        style={{
          transform: `translateY(${translateY}px)`,
          maxWidth: 320,
          textAlign: 'center',
        }}
      >
        {/* Logo/Icon */}
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #E8B4F0 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            marginBottom: theme.spacing.xl,
            fontWeight: 700,
            color: theme.colors.primary,
            fontSize: '36px',
            boxShadow: theme.shadows.lg,
          }}
        >
          L
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: theme.fonts.display,
            fontSize: '28px',
            fontWeight: 700,
            color: '#FFFFFF',
            marginBottom: theme.spacing.lg,
            letterSpacing: '-0.5px',
          }}
        >
          Luma Intelligence Summary
        </h1>

        {/* Insights */}
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)',
            borderRadius: theme.borderRadius.lg,
            padding: theme.spacing.lg,
            marginBottom: theme.spacing.lg,
            textAlign: 'left',
          }}
        >
          <InsightItem
            icon="🎯"
            label="Detected pattern"
            value="Perfectionism rooted in childhood conditioning"
            delay={0.2}
          />
          <InsightItem
            icon="📊"
            label="Emotional journey"
            value="Overwhelmed → Self-critical → Reflective → Open → Breakthrough"
            delay={0.4}
          />
          <InsightItem
            icon="🧠"
            label="Therapeutic approach"
            value="Socratic questioning, cognitive reframing, self-compassion, somatic awareness"
            delay={0.6}
          />
        </div>

        {/* Closing statement */}
        <p
          style={{
            fontFamily: theme.fonts.primary,
            fontSize: '14px',
            lineHeight: 1.6,
            color: '#FFFFFF',
            fontWeight: 500,
          }}
        >
          Luma uses evidence-based psychology to provide personalized support.
        </p>
      </div>
    </div>
  );
};

interface InsightItemProps {
  icon: string;
  label: string;
  value: string;
  delay: number;
}

const InsightItem: React.FC<InsightItemProps> = ({ icon, label, value, delay }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const startFrame = (endCardStartTime + delay) * fps;
  const localFrame = Math.max(0, frame - startFrame);

  const opacity = interpolate(localFrame, [0, 15], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        marginBottom: theme.spacing.md,
        opacity,
        transition: 'opacity 0.3s ease',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: theme.spacing.sm,
        }}
      >
        <span style={{ fontSize: '16px', lineHeight: 1.5 }}>{icon}</span>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontFamily: theme.fonts.primary,
              fontSize: '11px',
              fontWeight: 600,
              color: 'rgba(255, 255, 255, 0.8)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginBottom: 4,
            }}
          >
            {label}
          </div>
          <div
            style={{
              fontFamily: theme.fonts.primary,
              fontSize: '13px',
              lineHeight: 1.5,
              color: '#FFFFFF',
              fontWeight: 500,
            }}
          >
            {value}
          </div>
        </div>
      </div>
    </div>
  );
};
