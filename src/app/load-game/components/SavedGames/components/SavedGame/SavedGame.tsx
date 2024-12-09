"use client";

import { SavedGame as SavedGameType } from "@/types/savedgame";
import Typography from "@/components/Typography";
import { formatDate, formatDateToTime } from "@/utils/date";
import { useRouter } from "next/navigation";
interface SavedGameProps {
  savedGame: SavedGameType;
  handleImageChange: (image: string) => void;
}
export default function SavedGame({
  savedGame,
  handleImageChange,
}: SavedGameProps) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/load-game/${savedGame.id}`)}
      onMouseEnter={() => handleImageChange(savedGame.zoneSlug)}
      className="flex flex-col md:flex-row justify-between p-4 cursor-pointer rounded-xl hover:scale-105 transition-all duration-300 hover:from-red-950 hover:to-transparent hover:bg-gradient-to-r from-70% to-transparent"
    >
      <div className="flex flex-col">
        <Typography color="text-gray-200" variant="subheading" uppercase>
          {savedGame.zone}
        </Typography>
        <Typography color="text-gray-200" variant="subheading">
          {savedGame.place}
        </Typography>
        <div className="flex gap-2">
          <Typography color="text-gray-400" variant="body">
            COMBAT:
          </Typography>
          <Typography variant="body">{savedGame.gameDifficulty}</Typography>
          <Typography color="text-gray-400" variant="body">
            / PUZZLE:
          </Typography>
          <Typography variant="body">{savedGame.puzzleDifficulty}</Typography>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-4">
          <Typography color="text-gray-400" variant="body">
            {formatDateToTime(savedGame.gameDataSavedAt)}
          </Typography>
          <Typography color="text-gray-400" variant="body">
            {formatDate(savedGame.gameDataSavedAt)}
          </Typography>
        </div>
      </div>
    </div>
  );
}
