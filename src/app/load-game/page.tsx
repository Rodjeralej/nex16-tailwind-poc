import { getSavedGames } from "./action";
import SavedGames from "./components/SavedGames";
import Title from "./components/Title";

export default async function LoadGame({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const search = (await searchParams)?.search as string;

  const savedGames = await getSavedGames(search);

  return (
    <>
      <div className="absolute inset-0 backdrop-blur-md" />
      <div className="relative z-10 flex flex-col gap-8 p-8 max-h-full">
        <Title />
        <SavedGames savedGames={savedGames} />
      </div>
    </>
  );
}
