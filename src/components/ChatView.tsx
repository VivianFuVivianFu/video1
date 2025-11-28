import React, { useMemo } from 'react';
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { theme } from '../theme';
import { conversation } from '../conversation';
import { MessageBubble } from './MessageBubble';
import { TypingIndicator } from './TypingIndicator';
import { ChatHeader } from './ChatHeader';

export const ChatView: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const currentTime = frame / fps;

  // Calculate which messages should be visible
  const visibleMessages = useMemo(() => {
    return conversation.filter((msg) => currentTime >= msg.startTime);
  }, [currentTime]);

  // Calculate scroll offset to keep latest message visible
  const messagesHeight = visibleMessages.length * 120; // approximate
  const scrollOffset = interpolate(
    messagesHeight,
    [0, 600],
    [0, Math.max(0, messagesHeight - 600)],
    {
      extrapolateRight: 'extend',
      extrapolateLeft: 'clamp',
    }
  );

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <ChatHeader />

      {/* Chat messages area */}
      <div
        style={{
          position: 'absolute',
          top: 100,
          left: 0,
          right: 0,
          bottom: 80,
          overflowY: 'hidden',
          paddingTop: theme.spacing.md,
        }}
      >
        <div
          style={{
            transform: `translateY(-${scrollOffset}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        >
          {conversation.map((msg, index) => {
            const messageVisible = currentTime >= msg.startTime;
            if (!messageVisible) return null;

            // Show typing indicator before Luma messages
            const showTyping =
              msg.sender === 'luma' &&
              msg.typingDuration &&
              currentTime >= msg.startTime &&
              currentTime < msg.startTime + msg.typingDuration;

            const messageDelay = msg.sender === 'luma'
              ? msg.startTime + (msg.typingDuration || 0)
              : msg.startTime;

            const messageAppears = currentTime >= messageDelay;

            return (
              <React.Fragment key={msg.id}>
                {showTyping && (
                  <TypingIndicator
                    delay={msg.startTime}
                    duration={msg.typingDuration || 1.5}
                  />
                )}
                {messageAppears && (
                  <MessageBubble
                    text={msg.text}
                    isUser={msg.sender === 'user'}
                    delay={messageDelay}
                    index={index}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Input bar (decorative) */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 80,
          backgroundColor: theme.colors.surface,
          borderTop: `1px solid ${theme.colors.surfaceAlt}`,
          display: 'flex',
          alignItems: 'center',
          paddingLeft: theme.spacing.lg,
          paddingRight: theme.spacing.lg,
          gap: theme.spacing.md,
        }}
      >
        <div
          style={{
            flex: 1,
            height: 44,
            backgroundColor: theme.colors.surfaceAlt,
            borderRadius: 22,
            display: 'flex',
            alignItems: 'center',
            paddingLeft: theme.spacing.lg,
            fontFamily: theme.fonts.primary,
            fontSize: '15px',
            color: theme.colors.textLight,
          }}
        >
          Message Luma...
        </div>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: theme.colors.gradient,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            fontSize: '20px',
            fontWeight: 600,
          }}
        >
          ↑
        </div>
      </div>
    </div>
  );
};
