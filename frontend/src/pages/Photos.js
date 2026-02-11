import BackButton from "@/components/BackButton";
import { Heart, Sparkles } from "lucide-react";

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1541385496969-a3edfa5a94ed?w=400&h=500&fit=crop",
    caption: "That magical first date",
  },
  {
    src: "https://images.unsplash.com/photo-1591969851586-adbbd4accf81?w=400&h=500&fit=crop",
    caption: "Us being us",
  },
  {
    src: "https://images.unsplash.com/photo-1556229868-7b2d4b56b909?w=400&h=500&fit=crop",
    caption: "Dancing in the rain",
  },
  {
    src: "https://images.unsplash.com/photo-1769479379111-a01dfb63a9bd?w=400&h=500&fit=crop",
    caption: "My heart is yours",
  },
  {
    src: "https://images.unsplash.com/photo-1738979120113-821218436aa8?w=400&h=500&fit=crop",
    caption: "Forever and always",
  },
  {
    src: "https://images.unsplash.com/photo-1599791095997-5cf38bb5ff69?w=400&h=500&fit=crop",
    caption: "Roses for my love",
  },
];

export default function Photos({ onBack }) {
  return (
    <div className="page-wrapper bg-valentine-blush flex flex-col items-center px-6 py-16 sm:py-20 noise-overlay">
      <BackButton onClick={onBack} />

      {/* Decorative sparkles */}
      <div className="absolute top-[10%] right-[15%] animate-twinkle" aria-hidden="true">
        <Sparkles className="w-5 h-5 text-valentine-rose-light opacity-35" />
      </div>
      <div className="absolute bottom-[15%] left-[10%] animate-twinkle" style={{ animationDelay: '1.5s' }} aria-hidden="true">
        <Heart className="w-4 h-4 text-valentine-pink opacity-30" />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-10 stagger-children">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight mb-3">
          Our Memories
        </h1>
        <div className="flex items-center justify-center gap-2 mb-2" aria-hidden="true">
          <div className="w-8 h-px bg-valentine-pink/40" />
          <Heart className="w-4 h-4 text-primary fill-primary animate-heartbeat" />
          <div className="w-8 h-px bg-valentine-pink/40" />
        </div>
        <p className="text-base text-muted-foreground font-medium">
          Every moment with you is a treasure
        </p>
      </div>

      {/* Photo Grid */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl w-full stagger-children">
        {PHOTOS.map((photo, index) => (
          <div
            key={index}
            className="photo-card rounded-lg overflow-hidden bg-card border border-border/50 shadow-card-valentine"
            style={{
              transform: `rotate(${index % 2 === 0 ? '-1.5' : '1.5'}deg)`,
            }}
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={photo.src}
                alt={photo.caption}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-3 text-center">
              <p className="text-xs sm:text-sm font-semibold text-muted-foreground">
                {photo.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
