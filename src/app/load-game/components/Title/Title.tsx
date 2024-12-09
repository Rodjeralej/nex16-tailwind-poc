import Typography from "@/components/Typography";
import Searchbar from "./components/Searchbar";

export default function Title() {
  return (
    <div className="flex flex-col gap-4">
      <Typography variant="heading" color="text-gray-200" uppercase>
        Load Game
      </Typography>
      <Searchbar />
    </div>
  );
}
