import React from 'react';
import { theme } from '../theme';

interface DeviceFrameProps {
  children: React.ReactNode;
}

export const DeviceFrame: React.FC<DeviceFrameProps> = ({ children }) => {
  return (
    <div
      style={{
        width: theme.device.width,
        height: theme.device.height,
        position: 'relative',
        borderRadius: 50,
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        backgroundColor: '#000',
      }}
    >
      {/* Notch */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 150,
          height: 30,
          backgroundColor: '#000',
          borderRadius: '0 0 20px 20px',
          zIndex: 1000,
        }}
      />

      {/* Screen content */}
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: theme.colors.background,
          position: 'relative',
        }}
      >
        {children}
      </div>
    </div>
  );
};
