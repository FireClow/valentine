import BackButton from "@/components/BackButton";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Sparkles } from "lucide-react";

const BOUQUET_IMAGE = "https://images.unsplash.com/photo-1615182787503-08365d1e7fae?w=500&h=700&fit=crop";

export default function Letter({ onBack }) {
  return (
    <div className="page-wrapper bg-valentine-gradient flex flex-col items-center px-6 py-16 sm:py-20 noise-overlay">
      <BackButton onClick={onBack} />

      {/* Decorative elements */}
      <div className="absolute top-[8%] right-[20%] animate-twinkle" aria-hidden="true">
        <Sparkles className="w-5 h-5 text-valentine-rose-light opacity-35" />
      </div>
      <div className="absolute bottom-[12%] left-[15%] animate-twinkle" style={{ animationDelay: '1s' }} aria-hidden="true">
        <Heart className="w-4 h-4 text-valentine-pink opacity-30" />
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-8 stagger-children">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight mb-3">
          A Letter For You
        </h1>
        <div className="flex items-center justify-center gap-2" aria-hidden="true">
          <div className="w-8 h-px bg-valentine-pink/40" />
          <Heart className="w-4 h-4 text-primary fill-primary animate-heartbeat" />
          <div className="w-8 h-px bg-valentine-pink/40" />
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="relative z-10 w-full max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-start">
          {/* Letter - Left Column */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <Card className="border-border/50 bg-card/90 backdrop-blur-sm shadow-romantic overflow-hidden animate-fade-in-up">
              <CardContent className="p-6 sm:p-8 lg:p-10">
                {/* Letter Header Decoration */}
                <div className="flex items-center gap-3 mb-6" aria-hidden="true">
                  <div className="w-2 h-2 rounded-full bg-valentine-rose-light" />
                  <div className="w-2 h-2 rounded-full bg-valentine-pink" />
                  <div className="w-2 h-2 rounded-full bg-valentine-cream" />
                </div>

                <div className="letter-text text-foreground space-y-5">
                  <p className="text-muted-foreground italic text-sm">
                    My Dearest Love,
                  </p>

                  <p>
                    From the moment I saw your smile at Gunung Luhur, it felt as if the world paused for a while. In the middle of the cold air and the vast view, your smile became the warmest thing I felt that day. That was when I realized, a feeling was quietly growing, without needing many words.
                  </p>

                  <p>
                    Since that day, your smile has always found its way back into my thoughts. In the middle of busy days, in moments of exhaustion, and even in the quiet times that used to feel empty. You come into my life simply, yet bring something so extraordinary.
                  </p>

                  <p>
                    I love the way your presence alone brings me peace. The way you listen, the way you understand, the way you accept me just as I am. With you, I've learned that love doesn't always have to be loud. Sometimes, it's simply about feeling safe and at ease.
                  </p>

                  <p>
                    With you, I’ve learned that love is not about perfection, but about choosing each other every single day. It’s in the little things you do, the way you care, the way you stay, and the way you make my world feel lighter just by being in it. No matter where life takes us, I know that as long as I have you, I have everything I need.
                  </p>

                  <p>
                    Happy Valentine's Day, my love. Today and every day, you are
                    my forever.
                  </p>

                  <div className="pt-4">
                    <p className="text-muted-foreground italic text-sm">
                      With all my love,
                    </p>
                    <p className="text-primary font-bold text-lg mt-1">
                      Yours Always &#10084;
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Flower - Right Column */}
          <div className="lg:col-span-2 order-1 lg:order-2 flex justify-center">
            <div className="relative animate-float-slow">
              <div className="rounded-2xl overflow-hidden shadow-romantic border border-border/30 max-w-[280px] sm:max-w-[320px]">
                <img
                  src={BOUQUET_IMAGE}
                  alt="Beautiful flower bouquet"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              {/* Decorative hearts around the image */}
              <div className="absolute -top-3 -right-3 animate-heartbeat" aria-hidden="true">
                <Heart className="w-6 h-6 text-primary fill-primary opacity-60" />
              </div>
              <div className="absolute -bottom-2 -left-2 animate-heartbeat" style={{ animationDelay: '0.5s' }} aria-hidden="true">
                <Heart className="w-5 h-5 text-valentine-rose-light fill-valentine-rose-light opacity-50" />
              </div>
              <div className="absolute top-1/3 -right-4 animate-sparkle" aria-hidden="true">
                <Sparkles className="w-4 h-4 text-valentine-pink opacity-40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
