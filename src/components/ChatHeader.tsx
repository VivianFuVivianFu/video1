import React from 'react';
import { theme } from '../theme';

export const ChatHeader: React.FC = () => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 100,
        background: theme.colors.gradient,
        display: 'flex',
        alignItems: 'flex-end',
        paddingBottom: theme.spacing.md,
        paddingLeft: theme.spacing.lg,
        paddingRight: theme.spacing.lg,
        zIndex: 100,
        boxShadow: theme.shadows.sm,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {/* Luma avatar */}
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #E8B4F0 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            color: theme.colors.primary,
            fontSize: '18px',
          }}
        >
          L
        </div>

        {/* Title */}
        <div>
          <div
            style={{
              fontFamily: theme.fonts.primary,
              fontSize: '18px',
              fontWeight: 600,
              color: '#FFFFFF',
              marginBottom: 2,
            }}
          >
            Luma
          </div>
          <div
            style={{
              fontFamily: theme.fonts.primary,
              fontSize: '12px',
              color: 'rgba(255, 255, 255, 0.8)',
            }}
          >
            Your AI Companion
          </div>
        </div>
      </div>
    </div>
  );
};
