import React from 'react';
import YouTube from 'react-youtube';



const YouTubePlayer = ({ videoId }) => {
  // Set up event handlers
  const onReady = (event) => {
    // Access the player instance
    const player = event.target;

    // For example, you can automatically play the video
    player.playVideo();
  };

  const onError = (error) => {
    console.error('YouTube Player Error:', error);
  };

  return (
    <div className="grid">
    <YouTube
      videoId={videoId}
      onReady={onReady}
      onError={onError}
    />
     <YouTube
      videoId={videoId}
      onReady={onReady}
      onError={onError}
    />
    </div>

  );
};

export default YouTubePlayer;