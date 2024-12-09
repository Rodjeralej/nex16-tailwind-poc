export type SavedGame = {
  id: string;
  zone: string;
  zoneSlug: string;
  place: string;
  gameDifficulty: string;
  puzzleDifficulty: string;
  gameDataSavedAt: string;
  playedTime: string;
  isCurrentGame: boolean;
  isAutosaved: boolean;
};
