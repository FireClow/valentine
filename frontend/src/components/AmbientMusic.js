import { useState, useRef, useEffect, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { AmbientMusicContext } from "@/contexts/AmbientMusicContext";

const AMBIENT_SRC = "/music/Can't Help Falling In Love - Elvis Presley _ Piano Cover by Welder Dias.mp3";
const AMBIENT_VOLUME = 0.08; // very low – non-intrusive

/**
 * Site-wide ambient background music.
 * Starts ONLY after first user interaction (click anywhere) to respect
 * browser autoplay policies. Shows a small mute / unmute pill button.
 */
const AmbientMusicPlayer = ({ contextValue }) => {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);
  const hasInteractedRef = useRef(false);

  /* ── expose pause/resume methods to context ── */
  useEffect(() => {
    contextValue.pause = () => {
      const audio = audioRef.current;
      if (audio) audio.pause();
    };
    contextValue.resume = () => {
      const audio = audioRef.current;
      if (audio && started && !muted) {
        audio.play().catch(() => {});
      }
    };
  }, [contextValue, started, muted]);

  /* ── kick off playback on first interaction ── */
  const tryStart = useCallback(() => {
    if (hasInteractedRef.current) return;
    hasInteractedRef.current = true;

    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = AMBIENT_VOLUME;
    audio.loop = true;
    audio.play().then(() => {
      setStarted(true);
    }).catch(() => {
      // autoplay blocked — ignore silently
      hasInteractedRef.current = false;
    });
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    document.addEventListener("click", tryStart, { once: false, passive: true });
    document.addEventListener("touchstart", tryStart, { once: false, passive: true });

    return () => {
      document.removeEventListener("click", tryStart);
      document.removeEventListener("touchstart", tryStart);
      if (audio) {
        audio.pause();
        audio.src = "";
      }
    };
  }, [tryStart]);

  /* ── mute / unmute ── */
  const toggleMute = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (muted) {
      audio.muted = false;
      // if not started yet, try starting
      if (!started) {
        audio.volume = AMBIENT_VOLUME;
        audio.loop = true;
        audio.play().then(() => setStarted(true)).catch(() => {});
      }
    } else {
      audio.muted = true;
    }
    setMuted((m) => !m);
  }, [muted, started]);

  return (
    <>
      {/* hidden audio element */}
      <audio ref={audioRef} src={AMBIENT_SRC} preload="none" loop />

      {/* mute / unmute toggle — only visible after first interaction */}
      {started && (
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Unmute background music" : "Mute background music"}
          className="
            ambient-toggle
            fixed bottom-20 right-5 z-50
            w-10 h-10 rounded-full
            bg-card/80 backdrop-blur-sm
            border border-border/60
            flex items-center justify-center
            shadow-soft
            text-muted-foreground hover:text-primary
            hover:border-valentine-pink hover:shadow-romantic
          "
        >
          {muted ? (
            <VolumeX className="w-4 h-4" />
          ) : (
            <Volume2 className="w-4 h-4" />
          )}
        </button>
      )}
    </>
  );
};

/**
 * Provider component for ambient music and context.
 */
export const AmbientMusicProvider = ({ children }) => {
  const contextValue = {
    pause: () => {},
    resume: () => {},
  };

  return (
    <AmbientMusicContext.Provider value={contextValue}>
      <AmbientMusicPlayer contextValue={contextValue} />
      {children}
    </AmbientMusicContext.Provider>
  );
};

/**
 * Standalone ambient music component (for compatibility).
 */
export const AmbientMusic = () => {
  const contextValue = {
    pause: () => {},
    resume: () => {},
  };

  return <AmbientMusicPlayer contextValue={contextValue} />;
};

export default AmbientMusic;
