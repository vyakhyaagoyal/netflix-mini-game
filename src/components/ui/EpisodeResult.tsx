import { Button } from "../../components/ui/ui/button";
import { Card } from "../../components/ui/ui/card";
import { Badge } from "../../components/ui/ui/badge";
import { Share2, RotateCcw, Star } from "lucide-react";
import { NetflixCharacter } from "../../lib/netflix-data";

import { useRef } from "react";

interface EpisodeResultProps {
  character: NetflixCharacter;
  streak: number;
  onReset: () => void;
  onShare: () => void;
}

export function EpisodeResult({ character, streak, onReset, onShare }: EpisodeResultProps) {
  const resultRef = useRef<HTMLDivElement>(null);
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div ref={resultRef} className="w-full max-w-lg space-y-6 animate-bounce-in">
        
        {/* Streak Counter */}
        <div className="text-center">
          <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary animate-pulse-intense">
            <Star className="w-3 h-3 mr-1" />
            Day {streak} Streak! 🎉
          </Badge>
        </div>

        {/* Main Results Card */}
        <Card className="p-6 bg-[#242424]/60 border-border/50 backdrop-blur-sm space-y-6 animate-netflix-glow">
          
          {/* Character Image */}
          {/* <div className="text-center">
            <div className="relative inline-block">
              <img 
                src={character.imageUrl} 
                alt={character.name}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-4 border-primary/30 mx-auto animate-netflix-glow"
              />
              <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-gradient-netflix rounded-full p-1 sm:p-2">
                <Camera className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
            </div>
          </div> */}

          {/* Series Header */}
          <div className="text-center space-y-2">
            <Badge className="bg-primary text-primary-foreground px-2 py-1 sm:px-3 sm:py-1 animate-flicker text-xs sm:text-sm">
              {character.genre}
            </Badge>
            <h1 className="text-lg sm:text-2xl font-bold text-foreground">
              {character.series}
            </h1>
          </div>

          {/* Character Details */}
          <div className="space-y-4">
            <div className="text-center">
              <h2 className="text-lg sm:text-xl font-semibold text-primary mb-2">
                You are: {character.name}
              </h2>
            </div>

            {/* Personality */}
            <div className="bg-gradient-option rounded-lg p-3 sm:p-4 border border-primary/20">
              <h3 className="text-sm font-medium text-primary mb-2">
                Your Netflix Personality:
              </h3>
              <p className="text-foreground/90 leading-relaxed text-sm sm:text-base">
                {character.personality}
              </p>
            </div>

            {/* Humorous Cliffhanger */}
            <div className="bg-secondary/30 rounded-lg p-3 sm:p-4 bg-[#242424]">
              <h3 className="text-sm font-medium text-foreground/80 mb-2">
                Tomorrow&apos;s Plot Twist:
              </h3>
              <p className="text-foreground text-sm sm:text-base ">
                {character.humorousCliffhanger}
              </p>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            onClick={onShare}
            variant="netflix"
            size="lg"
            className="flex-1 animate-intense text-sm sm:text-base bg-red-800"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share My Netflix Personality
          </Button>
          <Button 
            onClick={onReset}
            variant="outline"
            size="lg"
            className="border-border/30 hover:border-primary/50 sm:w-auto"
          >
            <RotateCcw className="w-4 h-4 sm:mr-0 mr-2" />
            <span className="sm:hidden">Play Again</span>
          </Button>
        </div>

        {/* Bottom Text */}
        <div className="text-center text-xs text-muted-foreground">
          Come back tomorrow to discover your next Netflix personality! 🎭
        </div>
      </div>
    </div>
  );
}