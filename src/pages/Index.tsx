import { useState } from "react";
import { DayInput } from "../components/ui/DayInput";
import { QuizSection } from "../components/ui/QuizSection";
import { EpisodeResult } from "../components/ui/EpisodeResult";
import { generateNetflixPersonality, shareCharacter, type GameResult } from "../lib/netflix-generator";
import { useToast } from "../hooks/use-toast";
import '../index.css';

type GamePhase = 'input' | 'quiz' | 'result';

const Index = () => {
  const [gamePhase, setGamePhase] = useState<GamePhase>('input');
  const [dailyInputs, setDailyInputs] = useState<string[]>([]);
  const [gameResult, setGameResult] = useState<GameResult | null>(null);
  const { toast } = useToast();

  const handleDaySubmit = (inputs: string[]) => {
    setDailyInputs(inputs);
    setGamePhase('quiz');
  };

  const handleQuizComplete = (quizAnswers: string[]) => {
    const result = generateNetflixPersonality(dailyInputs, quizAnswers);
    setGameResult(result);
    setGamePhase('result');
  };

  const handleReset = () => {
    setGamePhase('input');
    setDailyInputs([]);
    setGameResult(null);
  };

  const handleShare = () => {
    if (gameResult) {
      shareCharacter(gameResult.character, gameResult.streak);
      toast({
        title: "Netflix personality shared! 🎭",
        description: "Your Netflix personality has been copied to share.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {gamePhase === 'input' && (
        <DayInput onSubmit={handleDaySubmit} />
      )}
      {gamePhase === 'quiz' && (
        <QuizSection onComplete={handleQuizComplete} />
      )}
      {gamePhase === 'result' && gameResult && (
        <EpisodeResult 
          character={gameResult.character}
          streak={gameResult.streak}
          onReset={handleReset}
          onShare={handleShare}
        />
      )}
    </div>
  );
};

export default Index;
