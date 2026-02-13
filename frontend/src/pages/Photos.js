import BackButton from "@/components/BackButton";
import { Heart, Sparkles } from "lucide-react";

// Use local photos from the public/photos folder
const PHOTOS = [
  { src: "/photos/photo1.jpeg", caption: "That magical first date" },
  { src: "/photos/photo2.jpeg", caption: "Us being us" },
  { src: "/photos/photo6.jpeg", caption: "Dancing in the rain" },
  { src: "/photos/photo4.jpeg", caption: "My heart is yours" },
  { src: "/photos/photo5.jpeg", caption: "Forever and always" },
  { src: "/photos/photo3.jpeg", caption: "A quiet moment, just us" },
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
