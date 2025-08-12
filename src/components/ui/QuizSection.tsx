import { useState, useEffect } from "react";
import { Button } from "../../components/ui/ui/button";
import { Card } from "../../components/ui/ui/card";
import { Badge } from "../../components/ui/ui/badge";
import { ChevronRight, Sparkles } from "lucide-react";
import { getRandomQuizQuestions } from "../../lib/netflix-data";
import { useNetflixSound } from "../../hooks/useNetflixSound";

// interface QuizQuestion {
//   question: string;
//   options: string[];
// }

interface QuizSectionProps {
  onComplete: (answers: string[]) => void;
}

export function QuizSection({ onComplete }: QuizSectionProps) {
  const [questions, setQuestions] = useState(getRandomQuizQuestions());
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const { playTudum } = useNetflixSound();

  useEffect(() => {
    // Get new random questions when component mounts
    setQuestions(getRandomQuizQuestions());
  }, []);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (!selectedOption) return;

    const newAnswers = [...answers, selectedOption];

    if (currentQuestion < questions.length - 1) {
      setAnswers(newAnswers);
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption("");
    } else {
      // Play Netflix sound when generating personality
      playTudum();
      onComplete(newAnswers);
    }
  };

  const isLastQuestion = currentQuestion === questions.length - 1;
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg space-y-4 sm:space-y-6 animate-slide-up">

        {/* Progress Header */}
        <div className="text-center space-y-3 sm:space-y-4">
          <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary text-xs sm:text-sm">
            <Sparkles className="w-3 h-3 mr-1" />
            Quiz Time! {currentQuestion + 1}/{questions.length}
          </Badge>

          {/* Progress Bar */}
          <div className="w-full bg-black rounded-full h-1.5">
  <div 
    className="bg-[#e50914] h-1.5 rounded-full transition-all duration-500 ease-out"
    style={{ width: `${progress}%` }}
  />
</div>

        </div>

        {/* Question Card */}
        <Card className="p-4 sm:p-6 rounded-xl border border-[#202020] bg-[#3f1212a5] bg-gradient-to-b from-[#4a0b0bbb] to-[#1a1a1a]">

          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-lg sm:text-xl font-bold text-center text-foreground mb-4 sm:mb-6 leading-relaxed px-2">
              {questions[currentQuestion].question}
            </h2>

            {/* Options */}
            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  className={`w-full p-4 text-left rounded-lg transition-all duration-200 
  ${selectedOption === option
                      ? 'bg-[#404040] text-white shadow-[0_0_10px_#e50914]'
                      : 'bg-[#2e2e2e] text-white hover:bg-[#383838]'
                    }`}
                >
                  <span className="font-medium">{option}</span>
                </button>
              ))}
            </div>

            {/* Next Button */}
            <Button
  onClick={handleNextQuestion}
  disabled={!selectedOption}
  className="w-full text-sm sm:text-base bg-[#e50914] text-white shadow-[0_0_15px_#e50914] hover:shadow-[0_0_25px_#e50914] transition-all duration-300"
>
  {isLastQuestion ? "Get My Netflix Personality! 🎭" : "Next Question"}
  <ChevronRight className="w-4 h-4 ml-2" />
</Button>

          </div>
        </Card>

        <div className="text-center text-xs text-muted-foreground px-4">
          Choose the option that speaks to your soul ✨
        </div>
      </div>
    </div>
  );
}