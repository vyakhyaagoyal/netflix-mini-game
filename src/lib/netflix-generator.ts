import { NetflixCharacter, getCharacterFromAnswers } from "./netflix-data";

export interface GameResult {
  character: NetflixCharacter;
  streak: number;
}

export function generateNetflixPersonality(dailyInputs: string[], quizAnswers: string[]): GameResult {
  // Get streak from localStorage
  const currentStreak = parseInt(localStorage.getItem('netflixStreak') || '1');
  
  // Generate character based on inputs and quiz answers
  const character = getCharacterFromAnswers(dailyInputs, quizAnswers);
  
  // Update streak
  localStorage.setItem('netflixStreak', (currentStreak + 1).toString());
  
  return {
    character,
    streak: currentStreak
  };
}

export function shareCharacter(character: NetflixCharacter, streak: number): void {
  const text = `🎭 I just discovered my Netflix personality!\n\nI'm ${character.name} from ${character.series}!\n\n${character.personality}\n\nDay ${streak} streak! 🔥\n\nFind out your Netflix personality too! 📺\n\n#NetflixPersonality #Netflix #PersonalityQuiz`;
  
  if (navigator.share) {
    navigator.share({
      title: "My Netflix Personality",
      text: text,
      url: window.location.href
    });
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(text).then(() => {
      // Text copied successfully
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    });
  }
}