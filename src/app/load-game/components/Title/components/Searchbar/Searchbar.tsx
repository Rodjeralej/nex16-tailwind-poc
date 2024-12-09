"use client";
import { useRouter } from "next/navigation";
import debounce from "lodash/debounce";

export default function Searchbar() {
  const router = useRouter();

  const debouncedSearch = debounce((value: string) => {
    const search = value ? `?search=${value}` : "";
    router.push(`/load-game${search}`);
  }, 500);

  return (
    <input
      type="text"
      placeholder="Search"
      className="w-full rounded-md border border-gray-300 bg-gray-200 p-2 text-gray-800"
      onChange={(e) => debouncedSearch(e.target.value)}
    />
  );
}
