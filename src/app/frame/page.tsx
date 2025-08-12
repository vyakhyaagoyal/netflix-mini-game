export const metadata = {
  title: "FlixMatch",
  description: "A Farcaster frame for Netflix fun!",
  openGraph: {
    title: "FlixMatch",
    images: ["https://netflix-mini-game.vercel.app/image.png"],
  },
  other: {
    "fc:frame": "vNext",
    "fc:frame:image": "https://netflix-mini-game.vercel.app/image.png",
    "fc:frame:button:1": "Play Now",
    "fc:frame:button:1:action": "link",
    "fc:frame:button:1:target": "https://netflix-mini-game.vercel.app/",
  },
};

export default function FramePage() {
  // Nothing to render, only metadata for Warpcast to read
  return null;
}
