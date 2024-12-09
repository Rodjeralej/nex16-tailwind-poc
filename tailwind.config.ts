import type { Config } from "tailwindcss";
import colors from "./src/theme/colors";
import images from "./src/theme/images";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: images,

      colors: colors,

      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
    },
  },
} satisfies Config;
