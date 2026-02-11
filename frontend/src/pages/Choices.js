import { Card, CardContent } from "@/components/ui/card";
import { Camera, Music, Mail, Heart, Sparkles } from "lucide-react";

const giftOptions = [
  {
    id: "photos",
    icon: Camera,
    label: "Our Memories",
    emoji: "📸",
    description: "A collection of our sweetest moments together",
    gradient: "from-valentine-blush to-valentine-cream",
  },
  {
    id: "music",
    icon: Music,
    label: "Love Songs",
    emoji: "🎶",
    description: "A playlist I made with songs that remind me of you",
    gradient: "from-valentine-cream to-valentine-lavender",
  },
  {
    id: "letter",
    icon: Mail,
    label: "A Letter For You",
    emoji: "💌",
    description: "Words from my heart, written just for you",
    gradient: "from-valentine-peach to-valentine-blush",
  },
];

export default function Choices({ onNavigate }) {
  return (
    <div className="page-wrapper bg-valentine-gradient flex flex-col items-center justify-center px-6 py-12 noise-overlay">
      {/* Decorative elements */}
      <div className="absolute top-[8%] left-[20%] animate-twinkle" aria-hidden="true">
        <Sparkles className="w-5 h-5 text-valentine-rose-light opacity-35" />
      </div>
      <div className="absolute top-[15%] right-[15%] animate-twinkle" style={{ animationDelay: '1.2s' }} aria-hidden="true">
        <Heart className="w-4 h-4 text-valentine-pink opacity-30" />
      </div>
      <div className="absolute bottom-[10%] right-[20%] animate-twinkle" style={{ animationDelay: '0.7s' }} aria-hidden="true">
        <Sparkles className="w-4 h-4 text-valentine-rose-light opacity-25" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto w-full">
        {/* Title */}
        <div className="mb-10 stagger-children">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-3">
            Presents for You
          </h1>
          <div className="flex items-center justify-center gap-2 mb-3" aria-hidden="true">
            <Heart className="w-4 h-4 text-primary fill-primary animate-heartbeat" />
          </div>
          <p className="text-base text-muted-foreground font-medium">
            Click any gift to open it
          </p>
        </div>

        {/* Gift Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 w-full stagger-children">
          {giftOptions.map((option) => {
            const IconComp = option.icon;
            return (
              <Card
                key={option.id}
                onClick={() => onNavigate(option.id)}
                className={`valentine-card-interactive cursor-pointer border-border/60 bg-gradient-to-b ${option.gradient} overflow-hidden group relative`}
              >
                <CardContent className="flex flex-col items-center text-center p-8 sm:p-7">
                  {/* Icon Container */}
                  <div className="w-16 h-16 sm:w-14 sm:h-14 rounded-full bg-card/70 backdrop-blur-sm border border-border/50 flex items-center justify-center mb-5 shadow-soft group-hover:shadow-romantic">
                    <IconComp className="w-7 h-7 sm:w-6 sm:h-6 text-primary" style={{ transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)' }} />
                  </div>

                  {/* Label */}
                  <h3 className="text-lg font-bold text-foreground mb-1">
                    {option.label}
                  </h3>
                  <span className="text-xl mb-3" aria-hidden="true">{option.emoji}</span>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {option.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 text-xs font-semibold text-primary" style={{ transition: 'opacity 0.3s' }}>
                    Tap to open &#10084;
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
