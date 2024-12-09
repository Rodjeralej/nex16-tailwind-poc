"use client";

import { useState } from "react";
import Image from "next/image";
import SavedGame from "./components/SavedGame";
import { SavedGame as SavedGameType } from "@/types/savedgame";
import Typography from "@/components/Typography";

interface SavedGamesProps {
  savedGames: SavedGameType[];
}

export default function SavedGames({ savedGames }: SavedGamesProps) {
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  const handleImageChange = (image: string) => {
    setCurrentImage(image);
  };

  if (!savedGames.length) {
    return (
      <div className="flex justify-center items-center h-full">
        <Typography variant="heading" uppercase>
          No saved games found
        </Typography>
      </div>
    );
  }

  return (
    <div className="relative flex overflow-auto rounded-xl">
      <div className="absolute inset-0 bg-black-200 opacity-50" />
      <div className="relative z-10 flex flex-col flex-1 sm:basis-1/2 xl:basis-1/3 gap-4 md:p-8 p-4 overflow-y-auto overflow-x-hidden">
        {savedGames.map((game) => (
          <SavedGame
            key={game.id}
            savedGame={game}
            handleImageChange={handleImageChange}
          />
        ))}
      </div>
      <div className="relative basis-1/2 xl:basis-2/3 hidden xl:flex">
        {currentImage && (
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_APP_URL}/uploads/${currentImage}`}
            alt="current zone"
            fill
            className="object-contain"
            priority
          />
        )}
      </div>
    </div>
  );
}
