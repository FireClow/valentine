import BackButton from "@/components/BackButton";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Sparkles, Music2, Disc3 } from "lucide-react";

const PLAYLIST_SONGS = [
  { title: "Perfect", artist: "Ed Sheeran", duration: "4:23" },
  { title: "All of Me", artist: "John Legend", duration: "4:29" },
  { title: "Love Story", artist: "Taylor Swift", duration: "3:55" },
  { title: "A Thousand Years", artist: "Christina Perri", duration: "4:45" },
  { title: "Can't Help Falling in Love", artist: "Elvis Presley", duration: "3:00" },
  { title: "Thinking Out Loud", artist: "Ed Sheeran", duration: "4:41" },
  { title: "Just the Way You Are", artist: "Bruno Mars", duration: "3:40" },
  { title: "Unchained Melody", artist: "The Righteous Brothers", duration: "3:36" },
];

export default function Music({ onBack }) {
  return (
    <div className="page-wrapper bg-valentine-warm flex flex-col items-center px-6 py-16 sm:py-20 noise-overlay">
      <BackButton onClick={onBack} />

      {/* Decorative elements */}
      <div className="absolute top-[10%] left-[12%] animate-twinkle" aria-hidden="true">
        <Music2 className="w-5 h-5 text-valentine-rose-light opacity-30" />
      </div>
      <div className="absolute top-[20%] right-[10%] animate-twinkle" style={{ animationDelay: '1.3s' }} aria-hidden="true">
        <Sparkles className="w-4 h-4 text-valentine-pink opacity-30" />
      </div>
      <div className="absolute bottom-[15%] left-[18%] animate-twinkle" style={{ animationDelay: '0.8s' }} aria-hidden="true">
        <Heart className="w-4 h-4 text-valentine-rose-light opacity-25" />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-10 stagger-children">
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

      {/* Music Player Card */}
      <div className="relative z-10 w-full max-w-lg">
        <Card className="music-pulse border-border/50 bg-card/80 backdrop-blur-sm shadow-romantic overflow-hidden">
          <CardContent className="p-0">
            {/* Album Art Header */}
            <div className="relative bg-gradient-to-b from-valentine-blush to-valentine-cream p-6 sm:p-8 flex flex-col items-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-card border-4 border-border/30 flex items-center justify-center shadow-romantic mb-4 animate-sway">
                <Disc3 className="w-12 h-12 sm:w-14 sm:h-14 text-primary" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold text-foreground">
                Our Love Playlist
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                8 songs • Made with love
              </p>
            </div>

            {/* Song List */}
            <div className="divide-y divide-border/50">
              {PLAYLIST_SONGS.map((song, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 px-5 py-3.5 hover:bg-secondary/50 cursor-pointer group"
                  style={{ transition: 'background 0.25s' }}
                >
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-muted-foreground group-hover:hidden">
                      {index + 1}
                    </span>
                    <Music2 className="w-3.5 h-3.5 text-primary hidden group-hover:block" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">
                      {song.title}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {song.artist}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground font-medium flex-shrink-0">
                    {song.duration}
                  </span>
                </div>
              ))}
            </div>

            {/* Spotify Embed Placeholder */}
            <div className="p-5 border-t border-border/50">
              <div className="rounded-lg bg-secondary/60 p-4 flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  <span className="text-sm font-semibold text-foreground">Play on Spotify</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Open in your Spotify app to listen together
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
