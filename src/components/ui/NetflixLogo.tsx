import { cn } from "../../lib/utilsCopy";

interface NetflixLogoProps {
  className?: string;
}

export function NetflixLogo({ className }: NetflixLogoProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="text-3xl font-black text-red-700">N</div>
      <div className="text-lg font-bold">Daily Series</div>
    </div>
  );
}