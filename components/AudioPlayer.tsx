import React, { useState, useRef, useEffect } from 'react';
import { Figure1_1 } from './figures/Figure1_1';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  // FIX: Explicitly initialize useRef with null to address the "Expected 1 arguments, but got 0" error.
  const animationFrameRef = useRef<number | null>(null);

  // FIX: Refactored the animation loop into a useEffect hook.
  // This is the idiomatic React way to handle side effects like requestAnimationFrame.
  // It resolves a stale closure bug where the `isSeeking` value would not update correctly inside the loop,
  // making the component more robust.
  useEffect(() => {
    if (isPlaying) {
      const loop = () => {
        // We check isSeeking inside the loop to ensure we use the latest state
        if (!isSeeking && audioRef.current) {
          setCurrentTime(audioRef.current.currentTime);
        }
        animationFrameRef.current = requestAnimationFrame(loop);
      };
      animationFrameRef.current = requestAnimationFrame(loop);
    }

    // The cleanup function for this effect will cancel the animation frame
    // when isPlaying becomes false or when the component unmounts.
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [isPlaying, isSeeking]);


  // Toggle play/pause state - simplified to only manage state
  const togglePlayPause = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Audio playback failed:", error);
        setIsPlaying(false); // Revert state on failure
      }
    }
  };
  
  // Handlers for the <audio> element events
  const onLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const onEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };
  
  const onError = (e: React.SyntheticEvent<HTMLAudioElement, Event>) => {
    const audioEl = e.currentTarget;
    const error = audioEl.error;
    let detailedMessage = "An unknown error occurred.";
    if (error) {
      switch (error.code) {
        case error.MEDIA_ERR_ABORTED: detailedMessage = 'Playback was aborted.'; break;
        case error.MEDIA_ERR_NETWORK: detailedMessage = 'A network error occurred while fetching the audio.'; break;
        case error.MEDIA_ERR_DECODE: detailedMessage = 'The audio file is corrupted or could not be decoded.'; break;
        case error.MEDIA_ERR_SRC_NOT_SUPPORTED: detailedMessage = 'The audio format is not supported or the file could not be found.'; break;
        default: detailedMessage = `An unexpected error occurred. Code: ${error.code}`; break;
      }
    }
    console.error("Audio player error:", detailedMessage, e);
    alert(`Error: Could not load audio file.\n\nDetails: ${detailedMessage}\n\nPlease ensure 'audio1.mp3' exists in the 'public' folder.`);
    setIsPlaying(false);
  };
  
  // Cleanup effect to pause audio on unmount
  useEffect(() => {
    const audio = audioRef.current;
    return () => {
      audio?.pause();
    };
  }, []);

  // Time formatting utility
  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds) || timeInSeconds < 0) return '0:00';
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Logic for seeking through the audio via progress bar
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || !audioRef.current || !duration) return;
    const progressBar = progressBarRef.current;
    const rect = progressBar.getBoundingClientRect();
    const clickPositionX = e.pageX - rect.left;
    const newTime = (clickPositionX / rect.width) * duration;
    
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };
  
  // Effect to handle dragging the progress bar scrubber
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isSeeking && progressBarRef.current && audioRef.current && duration) {
        const progressBar = progressBarRef.current;
        const rect = progressBar.getBoundingClientRect();
        let newX = e.clientX - rect.left;
        // Clamp the value within the progress bar bounds
        newX = Math.max(0, Math.min(newX, rect.width));
        const newTime = (newX / rect.width) * duration;
        audioRef.current.currentTime = newTime;
        setCurrentTime(newTime);
      }
    };
    
    // Set seeking to false when mouse is released
    const handleMouseUp = () => {
      setIsSeeking(false);
    };

    if (isSeeking) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isSeeking, duration]);

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 transition-all duration-300">
      {/* The actual HTML audio element, visually hidden but controlled by our custom UI */}
      <audio
        ref={audioRef}
        src="/audio1.mp3"
        preload="metadata"
        onLoadedMetadata={onLoadedMetadata}
        onEnded={onEnded}
        onError={onError}
        hidden
      >
        Your browser does not support the audio element.
      </audio>

      {/* Picture-in-picture style display for the architecture diagram */}
      <div className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${isPlaying ? 'grid-rows-[1fr] opacity-100 mb-4' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="min-h-0 overflow-hidden">
          <div className="bg-white p-2 border border-gray-200 rounded-lg shadow-inner">
            <Figure1_1 />
          </div>
          <p className="text-xs text-center text-gray-500 mt-2 italic">Figure 1.1: Rev-Trac Architecture</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-blue-800">Audio Overview</h3>
          <p className="text-blue-700 mt-1">Listen to a quick introduction to the RevTrac learning path.</p>
        </div>
        <button
          onClick={togglePlayPause}
          className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center gap-2 w-40 justify-center"
          aria-label={isPlaying ? "Pause audio overview" : "Play audio overview"}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v4a1 1 0 11-2 0V8z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          )}
          <span>{isPlaying ? 'Pause Audio' : 'Play Audio'}</span>
        </button>
      </div>

      <div className="mt-4">
        <div
          ref={progressBarRef}
          className="bg-blue-200 rounded-full h-2.5 w-full cursor-pointer group"
          onMouseDown={(e) => { setIsSeeking(true); handleSeek(e); }}
          onClick={handleSeek}
        >
          <div
            className="bg-blue-600 h-2.5 rounded-full relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-5 w-5 bg-white rounded-full border-2 border-blue-600 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>
        <div className="flex justify-between text-xs text-blue-700 mt-1 font-mono">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
};
