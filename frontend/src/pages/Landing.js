import { Button } from "@/components/ui/button";
import { Heart, Sparkles } from "lucide-react";

const CAT_IMAGE = "https://static.prod-images.emergentagent.com/jobs/2ab09e84-d6e4-41ee-b17c-03a9fda24b24/images/e0b115dcc5a3185d3763252695b03443de8449b81c6e7c5a6bea9ac0d59ab145.png";

export default function Landing({ onNext }) {
  return (
    <div className="page-wrapper bg-valentine-gradient flex flex-col items-center justify-center px-6 py-12 noise-overlay">
      {/* Decorative sparkles */}
      <div className="absolute top-[12%] left-[15%] animate-twinkle" aria-hidden="true">
        <Sparkles className="w-5 h-5 text-valentine-rose-light opacity-40" />
      </div>
      <div className="absolute top-[18%] right-[18%] animate-twinkle" style={{ animationDelay: '1s' }} aria-hidden="true">
        <Sparkles className="w-4 h-4 text-valentine-pink opacity-35" />
      </div>
      <div className="absolute bottom-[20%] left-[10%] animate-twinkle" style={{ animationDelay: '1.5s' }} aria-hidden="true">
        <Heart className="w-4 h-4 text-valentine-rose-light opacity-30" />
      </div>
      <div className="absolute bottom-[25%] right-[12%] animate-twinkle" style={{ animationDelay: '0.5s' }} aria-hidden="true">
        <Heart className="w-5 h-5 text-valentine-pink opacity-25" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg mx-auto stagger-children">
        {/* Cat Illustration */}
        <div className="mb-8 animate-float">
          <div className="relative">
            <img
              src={CAT_IMAGE}
              alt="Cute Valentine Cat"
              className="w-48 h-48 sm:w-56 sm:h-56 object-contain drop-shadow-lg"
            />
            {/* Glowing ring behind cat */}
            <div
              className="absolute inset-0 -z-10 rounded-full bg-valentine-pink/20 blur-2xl scale-110"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-4">
          Will you be my
          <br />
          <span className="text-primary">Happy Valentine</span>,
          <br />
          my love?
        </h1>

        {/* Heart divider */}
        <div className="flex items-center gap-3 mb-8" aria-hidden="true">
          <div className="w-12 h-px bg-valentine-pink/40" />
          <Heart className="w-5 h-5 text-primary animate-heartbeat fill-primary" />
          <div className="w-12 h-px bg-valentine-pink/40" />
        </div>

        {/* CTA Button */}
        <Button
          onClick={onNext}
          size="lg"
          className="btn-glow rounded-pill px-10 py-6 text-lg font-bold bg-primary text-primary-foreground hover:bg-valentine-deep shadow-romantic"
        >
          <span>Next</span>
          <span className="ml-2 text-xl" aria-hidden="true">💌</span>
        </Button>
      </div>
    </div>
  );
}
