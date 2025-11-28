import React from 'react';
import { Composition, registerRoot } from 'remotion';
import { LumaDemo } from './Composition';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="LumaDemo"
        component={LumaDemo}
        durationInFrames={24 * 60}
        fps={24}
        width={720}
        height={1280}
      />
    </>
  );
};

registerRoot(RemotionRoot);
