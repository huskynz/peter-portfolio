import React from 'react';
import Typewriter  from 'typewriter-effect';

export default function TypingEffect() {
  const typewriterOptions = (typewriter) => {
    typewriter.typeString('Hello World!')
      .callFunction(() => console.log('String typed out!'))
      .pauseFor(2500)
      .deleteAll()
      .callFunction(() => console.log('All strings were deleted'))
      .start();
  };

  return (
    <div>
      <Typewriter onInit={typewriterOptions} />
    </div>
  );
}