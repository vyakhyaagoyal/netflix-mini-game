import { useCallback } from 'react';

export function useNetflixSound() {
  const playTudum = useCallback(() => {
    // Create the Netflix "Ta-Dum" sound effect
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    const createTone = (frequency: number, startTime: number, duration: number, volume: number = 0.3) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(frequency, startTime);
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0, startTime);
      gainNode.gain.linearRampToValueAtTime(volume, startTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
      
      oscillator.start(startTime);
      oscillator.stop(startTime + duration);
    };

    try {
      const now = audioContext.currentTime;
      
      // Netflix "Ta-Dum" recreation
      // First "Ta" - higher pitch
      createTone(400, now, 0.3, 0.4);
      
      // "Dum" - lower pitch, longer
      createTone(150, now + 0.1, 0.8, 0.5);
      
      // Add some echo/reverb effect
      createTone(380, now + 0.05, 0.25, 0.2);
      createTone(140, now + 0.15, 0.7, 0.3);
      
    } catch {
      console.log('Audio not supported');
    }
  }, []);

  return { playTudum };
}