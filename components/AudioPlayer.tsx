import React, { useState, useRef, useEffect } from 'react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize Audio object only on the client-side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // The audio file is expected to be in the `public` folder at the project root.
      audioRef.current = new Audio('/audio1.mp3');
      
      const audio = audioRef.current;
      const onEnded = () => setIsPlaying(false);
      
      const onError = (e: Event) => {
        console.error("Audio player error:", e);
        // This error often means the file was not found (404), leading to the "no supported sources" error.
        // Alert the user with the most likely solution.
        alert("Error: Could not load audio file.\n\nPlease ensure 'audio1.mp3' is placed inside a 'public' folder in your project's root directory and then reload the page.");
        setIsPlaying(false);
      };

      audio.addEventListener('ended', onEnded);
      audio.addEventListener('error', onError);
      
      // Cleanup listeners on component unmount
      return () => {
        if (audio) {
            audio.removeEventListener('ended', onEnded);
            audio.removeEventListener('error', onError);
        }
      };
    }
  }, []);

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
        // The play() promise can be rejected if the source is not found/supported,
        // or for other reasons like the user not having interacted with the page yet.
        console.error("Audio playback failed:", error);
        // The 'error' event listener above will likely have already fired
        // with a more specific message for the user if the file is missing.
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
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
  );
};