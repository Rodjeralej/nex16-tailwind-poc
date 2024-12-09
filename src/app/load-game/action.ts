import { SavedGame } from "@/types/savedgame";
import { strapiApi } from "@/api/strapi";

interface SavedGamesResponse {
  data: SavedGame[];
}

export async function getSavedGames(search?: string): Promise<SavedGame[]> {
  const filters = search ? `filters[zone][$contains]=${search}` : "";

  const savedGamesData = await strapiApi.get<SavedGamesResponse>(
    `/saved-games?${filters}`
  );

  return savedGamesData.data;
}
