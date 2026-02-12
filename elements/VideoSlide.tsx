'use client'

import { useRef, useState, MouseEvent } from 'react';


function VideoError() {
  return (
    <div className="relative w-full h-full bg-gray-200 flex items-center justify-center">
      <div className="text-gray-500 text-sm">Video unavailable</div>
    </div>
  )
}

export const VideoSlide = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  // Validate that we have a valid video source
  if (!src) return <VideoError />

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // prevent video onClick
    handleVideoClick();
  };

  const handleVideoError = () => {
    setHasError(true);
  };

  const handleVideoLoadedMetadata = () => {
    setIsVideoReady(true);
  };

  // Show error state if video failed to load
  if (hasError) return <VideoError />


  return (
    <div
      className="relative w-full h-full cursor-pointer"
      onClick={handleVideoClick}
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        preload="metadata"
        onError={handleVideoError}
        onLoadedMetadata={handleVideoLoadedMetadata}
        className="object-cover w-full h-full"
        style={{
          backgroundColor: isVideoReady ? 'transparent' : '#f3f4f6',
          transition: 'background-color 0.2s ease'
        }}
      />

      {!isPlaying && (
        <button
          title="pause button"
          type="button"
          onClick={handleButtonClick}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl opacity-70 hover:opacity-100 transition text-white"
        >
          <svg
            style={{
              fill: 'var(--fill-white-80, rgba(255, 255, 255, 0.80))',
              backdropFilter: 'blur(2px)'
            }}
            xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="16" fill="white" fillOpacity="0.8" />
            <path d="M20.5 15.134C21.1667 15.5189 21.1667 16.4811 20.5 16.866L14.5 20.3301C13.8333 20.715 13 20.2339 13 19.4641L13 12.5359C13 11.7661 13.8333 11.285 14.5 11.6699L20.5 15.134Z" fill="#363636" />
          </svg>
        </button>
      )}
    </div>
  );
};
