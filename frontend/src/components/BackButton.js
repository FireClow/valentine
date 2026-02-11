import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const BackButton = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="ghost"
      className="fixed top-6 left-6 z-50 rounded-pill bg-card/80 backdrop-blur-sm border border-border hover:bg-secondary hover:border-valentine-pink gap-2 px-4 py-2 text-muted-foreground hover:text-foreground"
      style={{ transition: 'background 0.3s, color 0.3s, border-color 0.3s' }}
    >
      <ArrowLeft className="w-4 h-4" />
      <span className="text-sm font-semibold">Back</span>
    </Button>
  );
};

export default BackButton;
