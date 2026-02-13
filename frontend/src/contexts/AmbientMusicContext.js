import { createContext, useContext } from "react";

/**
 * Context for controlling ambient background music across the app.
 * Used to pause/resume ambient music when other audio is playing.
 */
export const AmbientMusicContext = createContext({
  pause: () => {},
  resume: () => {},
});

export const useAmbientMusic = () => {
  const context = useContext(AmbientMusicContext);
  if (!context) {
    console.warn("useAmbientMusic must be used within AmbientMusicProvider");
  }
  return context;
};
