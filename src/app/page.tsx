import Typography from "@/components/Typography/Typography";
import Link from "next/link";

import { routes } from "@/utils/menu";

export default function Home() {
  return (
    <div className="h-screen bg-mainWallpaper bg-cover bg-center flex relative">
      <ul className="absolute sm:bottom-80 sm:left-32 bottom-24 left-8 justify-center flex flex-col gap-8">
        {Object.keys(routes).map((item) =>
          routes[item] ? (
            <Link key={item} href={routes[item]}>
              <li
                key={item}
                className="text-gray-200 cursor-pointer hover:bg-red-100 rounded-xl px-8 py-4 transition-all duration-300 sm:hover:scale-105"
              >
                <Typography variant="menu">{item}</Typography>
              </li>
            </Link>
          ) : (
            <li
              key={item}
              className="cursor-not-allowed rounded-xl px-8 py-4 transition-all duration-300 blur-sm "
            >
              <Typography key={item} variant="menu">
                {item}
              </Typography>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
