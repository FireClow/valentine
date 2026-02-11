import { useState, useCallback } from "react";
import "@/App.css";
import Landing from "@/pages/Landing";
import Choices from "@/pages/Choices";
import Photos from "@/pages/Photos";
import Music from "@/pages/Music";
import Letter from "@/pages/Letter";
import FloatingHearts from "@/components/FloatingHearts";
import FloatingSparkles from "@/components/FloatingSparkles";

function App() {
  const [currentPage, setCurrentPage] = useState("landing");
  const [pageKey, setPageKey] = useState(0);

  const navigateTo = useCallback((page) => {
    setPageKey((prev) => prev + 1);
    setCurrentPage(page);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "landing":
        return <Landing onNext={() => navigateTo("choices")} />;
      case "choices":
        return (
          <Choices
            onNavigate={(page) => navigateTo(page)}
          />
        );
      case "photos":
        return <Photos onBack={() => navigateTo("choices")} />;
      case "music":
        return <Music onBack={() => navigateTo("choices")} />;
      case "letter":
        return <Letter onBack={() => navigateTo("choices")} />;
      default:
        return <Landing onNext={() => navigateTo("choices")} />;
    }
  };

  return (
    <div className="relative min-h-screen font-nunito">
      <FloatingHearts />
      <FloatingSparkles />
      <div key={pageKey} className="page-enter relative z-10">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
