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
        const audioEl = e.target as HTMLAudioElement;
        const error = audioEl.error;
        let detailedMessage = "An unknown error occurred.";

        if (error) {
            switch (error.code) {
                case error.MEDIA_ERR_ABORTED:
                    detailedMessage = 'Playback was aborted by the user.';
                    break;
                case error.MEDIA_ERR_NETWORK:
                    detailedMessage = 'A network error prevented the audio from loading.';
                    break;
                case error.MEDIA_ERR_DECODE:
                    detailedMessage = 'The audio file is corrupted or in a format the browser cannot play.';
                    break;
                case error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                    detailedMessage = 'The audio format is not supported or the file could not be found.';
                    break;
                default:
                    detailedMessage = `An unexpected error occurred. Code: ${error.code}`;
                    break;
            }
        }
        
        console.error("Audio player error:", detailedMessage, error);
        alert(`Error: Could not load audio file.\n\nDetails: ${detailedMessage}\n\nPlease ensure 'audio1.mp3' is placed correctly inside a 'public' folder in your project's root directory and that the file is not corrupted.`);
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
        if (error instanceof DOMException && error.name === 'NotAllowedError') {
            alert("Audio playback was blocked by the browser. Please interact with the page (e.g., click a button) before trying to play audio.");
        }
        console.error("Audio playback failed:", error);
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