// Luma Brand Design System
export const theme = {
  colors: {
    // Primary brand colors - warm, therapeutic purple/lavender
    primary: '#8B7FD8',
    primaryLight: '#B5ADEA',
    primaryDark: '#6B5FC7',

    // Accent colors
    accent: '#E8B4F0',
    accentLight: '#F5D9FA',

    // Neutrals
    background: '#F8F7FC',
    surface: '#FFFFFF',
    surfaceAlt: '#F3F2F7',

    // Text colors
    textPrimary: '#2D2B3E',
    textSecondary: '#6B6880',
    textLight: '#9B99AB',

    // Message bubbles
    userBubble: '#8B7FD8',
    lumaBubble: '#F3F2F7',

    // Status
    success: '#7FD88B',
    warning: '#F0B47F',

    // Gradients
    gradient: 'linear-gradient(135deg, #8B7FD8 0%, #E8B4F0 100%)',
    gradientSubtle: 'linear-gradient(180deg, #F8F7FC 0%, #FFFFFF 100%)',
  },

  fonts: {
    primary: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
    display: '"SF Pro Display", -apple-system, sans-serif',
  },

  typography: {
    display: {
      fontSize: '32px',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.5px',
    },
    h1: {
      fontSize: '24px',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h2: {
      fontSize: '20px',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    bodySmall: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    caption: {
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: '0.3px',
    },
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },

  borderRadius: {
    sm: 8,
    md: 16,
    lg: 24,
    full: 9999,
  },

  shadows: {
    sm: '0 2px 8px rgba(139, 127, 216, 0.1)',
    md: '0 4px 16px rgba(139, 127, 216, 0.15)',
    lg: '0 8px 32px rgba(139, 127, 216, 0.2)',
  },

  device: {
    width: 390,
    height: 844,
    notchHeight: 44,
    bottomSafeArea: 34,
  },
} as const;
