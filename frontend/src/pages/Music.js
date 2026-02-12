import { useState, useRef, useCallback, useEffect } from "react";
import BackButton from "@/components/BackButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, Sparkles, Music2, Disc3, Play, Pause, ExternalLink } from "lucide-react";

const SPOTIFY_PLAYLIST_URL = "https://open.spotify.com/playlist/YOUR_PLAYLIST_ID";
const SPOTIFY_EMBED_URL = "https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0?utm_source=generator&theme=0";

const PLAYLIST_SONGS = [
  { id: 1,  title: "Perfect",                     artist: "Ed Sheeran",              duration: "4:23", previewSrc: "/music/previews/song1.mp3"  },
  { id: 2,  title: "All of Me",                    artist: "John Legend",              duration: "4:29", previewSrc: "/music/previews/song2.mp3"  },
  { id: 3,  title: "Love Story",                   artist: "Taylor Swift",             duration: "3:55", previewSrc: "/music/previews/song3.mp3"  },
  { id: 4,  title: "A Thousand Years",              artist: "Christina Perri",          duration: "4:45", previewSrc: "/music/previews/song4.mp3"  },
  { id: 5,  title: "Can't Help Falling in Love",   artist: "Elvis Presley",            duration: "3:00", previewSrc: "/music/previews/song5.mp3"  },
  { id: 6,  title: "Thinking Out Loud",             artist: "Ed Sheeran",              duration: "4:41", previewSrc: "/music/previews/song6.mp3"  },
  { id: 7,  title: "Just the Way You Are",          artist: "Bruno Mars",              duration: "3:40", previewSrc: "/music/previews/song7.mp3"  },
  { id: 8,  title: "Unchained Melody",              artist: "The Righteous Brothers",  duration: "3:36", previewSrc: "/music/previews/song8.mp3"  },
  { id: 9,  title: "Make You Feel My Love",         artist: "Adele",                   duration: "3:32", previewSrc: "/music/previews/song9.mp3"  },
  { id: 10, title: "At Last",                       artist: "Etta James",              duration: "3:03", previewSrc: "/music/previews/song10.mp3" },
];

export default function Music({ onBack }) {
  const [activeSongId, setActiveSongId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);
  const progressIntervalRef = useRef(null);

  /* ---- cleanup on unmount ---- */
  useEffect(() => {
    const audio = audioRef.current;
    const interval = progressIntervalRef.current;
    return () => {
      if (audio) {
        audio.pause();
        audio.src = "";
      }
      if (interval) clearInterval(interval);
    };
  }, []);

  /* ---- progress tracking ---- */
  const startProgressTracking = useCallback(() => {
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    progressIntervalRef.current = setInterval(() => {
      const audio = audioRef.current;
      if (audio && audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    }, 200);
  }, []);

  const stopProgressTracking = useCallback(() => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
  }, []);

  /* ---- play / pause handler ---- */
  const handleSongClick = useCallback((song) => {
    const audio = audioRef.current;
    if (!audio) return;

    // Same song → toggle play/pause
    if (activeSongId === song.id) {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
        stopProgressTracking();
      } else {
        audio.play().catch(() => {});
        setIsPlaying(true);
        startProgressTracking();
      }
      return;
    }

    // Different song → stop old, play new
    audio.pause();
    stopProgressTracking();
    setProgress(0);
    audio.src = song.previewSrc;
    audio.load();
    audio.play().then(() => {
      setActiveSongId(song.id);
      setIsPlaying(true);
      startProgressTracking();
    }).catch(() => {
      setActiveSongId(song.id);
    });
  }, [activeSongId, isPlaying, startProgressTracking, stopProgressTracking]);

  /* ---- when a track ends ---- */
  const handleAudioEnded = useCallback(() => {
    setIsPlaying(false);
    setProgress(0);
    stopProgressTracking();
  }, [stopProgressTracking]);

  return (
    <div className="page-wrapper bg-valentine-warm flex flex-col items-center px-4 sm:px-6 py-16 sm:py-20 noise-overlay">
      <BackButton onClick={onBack} />

      {/* hidden <audio> element */}
      <audio ref={audioRef} onEnded={handleAudioEnded} preload="none" />

      {/* decorative sparkles */}
      <div className="absolute top-[10%] left-[12%] animate-twinkle" aria-hidden="true">
        <Music2 className="w-5 h-5 text-valentine-rose-light opacity-30" />
      </div>
      <div className="absolute top-[20%] right-[10%] animate-twinkle" style={{ animationDelay: "1.3s" }} aria-hidden="true">
        <Sparkles className="w-4 h-4 text-valentine-pink opacity-30" />
      </div>
      <div className="absolute bottom-[15%] left-[18%] animate-twinkle" style={{ animationDelay: "0.8s" }} aria-hidden="true">
        <Heart className="w-4 h-4 text-valentine-rose-light opacity-25" />
      </div>

      {/* ── Header ── */}
      <div className="relative z-10 text-center mb-8 sm:mb-10 stagger-children">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight mb-3">
          Love Songs
        </h1>
        <div className="flex items-center justify-center gap-2 mb-3" aria-hidden="true">
          <div className="w-8 h-px bg-valentine-pink/40" />
          <Heart className="w-4 h-4 text-primary fill-primary animate-heartbeat" />
          <div className="w-8 h-px bg-valentine-pink/40" />
        </div>
        <p className="text-base text-muted-foreground font-medium">
          I made this playlist just for you
        </p>
      </div>

      {/* ── Playlist Card ── */}
      <div className="relative z-10 w-full max-w-lg">
        <Card className={`border-border/50 bg-card/80 backdrop-blur-sm shadow-romantic overflow-hidden ${isPlaying ? "music-pulse" : ""}`}>
          <CardContent className="p-0">

            {/* ── Album Art Header ── */}
            <div className="relative bg-gradient-to-b from-valentine-blush to-valentine-cream p-6 sm:p-8 flex flex-col items-center">
              <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-card border-4 border-border/30 flex items-center justify-center shadow-romantic mb-4 ${isPlaying ? "disc-spin" : "animate-sway"}`}>
                <Disc3 className="w-12 h-12 sm:w-14 sm:h-14 text-primary" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-foreground">
                Our Love Playlist
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                10 songs &bull; Made with love
              </p>

              {/* now-playing indicator */}
              {activeSongId && isPlaying && (
                <div className="mt-3 flex items-center gap-2 animate-fade-in">
                  <div className="flex items-end gap-0.5 h-4" aria-label="Now playing">
                    <span className="eq-bar w-[3px] bg-primary rounded-full" style={{ animationDelay: "0s" }} />
                    <span className="eq-bar w-[3px] bg-primary rounded-full" style={{ animationDelay: "0.15s" }} />
                    <span className="eq-bar w-[3px] bg-primary rounded-full" style={{ animationDelay: "0.3s" }} />
                    <span className="eq-bar w-[3px] bg-primary rounded-full" style={{ animationDelay: "0.1s" }} />
                  </div>
                  <span className="text-xs font-semibold text-primary">
                    Now Playing
                  </span>
                </div>
              )}
            </div>

            {/* ── Song List ── */}
            <div className="divide-y divide-border/40">
              {PLAYLIST_SONGS.map((song) => {
                const isActive = activeSongId === song.id;
                const isSongPlaying = isActive && isPlaying;

                return (
                  <div key={song.id} className="relative">
                    {/* progress bar behind active row */}
                    {isActive && (
                      <div
                        className="absolute bottom-0 left-0 h-full bg-primary/[0.06] pointer-events-none rounded-r-sm"
                        style={{
                          width: `${progress}%`,
                          transition: "width 0.3s linear",
                        }}
                        aria-hidden="true"
                      />
                    )}

                    <button
                      type="button"
                      onClick={() => handleSongClick(song)}
                      className={`
                        w-full flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3 sm:py-3.5 text-left relative z-[1]
                        song-row group
                        ${isActive ? "bg-secondary/40" : "hover:bg-secondary/30"}
                      `}
                    >
                      {/* number / play-pause icon */}
                      <div className={`
                        w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                        ${isActive
                          ? "bg-primary text-primary-foreground shadow-romantic"
                          : "bg-secondary text-muted-foreground group-hover:bg-primary/15 group-hover:text-primary"
                        }
                      `} style={{ transition: "background 0.25s, color 0.25s, box-shadow 0.25s" }}>
                        {isSongPlaying ? (
                          <Pause className="w-3.5 h-3.5" />
                        ) : isActive ? (
                          <Play className="w-3.5 h-3.5 ml-0.5" />
                        ) : (
                          <>
                            <span className="text-xs font-bold group-hover:hidden">{song.id}</span>
                            <Play className="w-3 h-3 ml-0.5 hidden group-hover:block" />
                          </>
                        )}
                      </div>

                      {/* song info */}
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-semibold truncate ${isActive ? "text-primary" : "text-foreground"}`}>
                          {song.title}
                        </p>
                        <p className="text-xs text-muted-foreground truncate">
                          {song.artist}
                        </p>
                      </div>

                      {/* preview label when active */}
                      {isActive && (
                        <span className="hidden sm:inline-block text-[10px] font-bold uppercase tracking-wider text-primary/60 flex-shrink-0">
                          Preview
                        </span>
                      )}

                      {/* duration */}
                      <span className="text-xs text-muted-foreground font-medium flex-shrink-0 tabular-nums">
                        {song.duration}
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>

            <Separator className="opacity-50" />

            {/* ── Spotify CTA ── */}
            <div className="p-5 flex flex-col items-center gap-3">
              <a
                href={SPOTIFY_PLAYLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  className="btn-glow w-full rounded-pill py-5 text-sm font-bold gap-2 bg-[#1DB954] hover:bg-[#1aa34a] text-primary-foreground shadow-md"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-12.061-1.429-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.079 10.561 18.72 12.84c.361.21.599.659.301 1.1zm.44-3.4c-3.52-2.159-9.34-2.64-13.561-1.44-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.02.6-1.14 4.56-1.3 11.6-.549 15.301 1.661.36.211.599.659.301 1.099-.3.421-.841.599-1.261.299z" />
                  </svg>
                  Play Full Songs on Spotify
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </Button>
              </a>
              <p className="text-xs text-muted-foreground text-center">
                Open in Spotify for full-length songs
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
