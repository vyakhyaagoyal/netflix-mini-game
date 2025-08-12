import { useState } from "react";
import { Button } from "../../components/ui/ui/button";
import { Input } from "../../components/ui/ui/input";
import { Card } from "../../components/ui/ui/card";
import { NetflixLogo } from "./NetflixLogo";

interface DayInputProps {
  onSubmit: (inputs: string[]) => void;
}

export function DayInput({ onSubmit }: DayInputProps) {
  const [inputs, setInputs] = useState(["", "", ""]);

  const prompts = [
    "What's the main vibe of your day? 😎",
    "What was the biggest plot twist? 🌪️",
    "How would you describe the energy? ⚡"
  ];

  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleSubmit = () => {
    if (inputs.some(input => input.trim())) {
      onSubmit(inputs);
    }
  };

  const canSubmit = inputs.some(input => input.trim().length > 0);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8 animate-slide-up">
        {/* Header */}
        <div className="text-center space-y-4">
          <NetflixLogo className="justify-center" />
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">What If Your Life Was a Netflix Series?</h1>
            <p className="text-gray-00">
              Tell us about your day and we&apos;ll turn it into a Netflix episode! 🎬
            </p>
          </div>
        </div>

        {/* Input Form */}
        {/* <Card className="p-6 bg-gradient-card border-border/50 backdrop-blur-sm"> */}
        <Card className="p-6 bg-[#242424]/60 backdrop-blur-sm border-border/50 text-foreground/90">
          <div className="space-y-6">
            {prompts.map((prompt, index) => (
              <div key={index} className="space-y-2">
                <label className="text-sm font-medium text-foreground/90">
                  {prompt}
                </label>
                <Input
                  placeholder="Type your answer..."
                  value={inputs[index]}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  // className="bg-input/50 border-border/30 focus:border-primary/50 focus:ring-primary/20"
                  className="bg-[#292929] border-border/30 focus:border-primary/50 focus:ring-primary/20"
                />
              </div>
            ))}

            <Button
              onClick={handleSubmit}
              disabled={!canSubmit}
              variant="netflix"
              size="lg"
              className="w-full bg-red-800"
            >
              Generate My Netflix Episode 🎭
            </Button>
          </div>
        </Card>

        <div className="text-center text-xs text-muted-foreground">
          AI-powered daily life series generator
        </div>
      </div>
    </div>
  );
}