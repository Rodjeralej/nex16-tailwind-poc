"use client";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const config = resolveConfig(tailwindConfig);

type Color = keyof typeof config.theme.colors;

interface TypographyVariants {
  menu: string;
  heading: string;
  subheading: string;
  body: string;
}

const variants: TypographyVariants = {
  menu: "sm:text-5xl text-4xl",
  heading: "text-3xl sm:text-4xl",
  subheading: "text-xs sm:text-sm lg:text-lg",
  body: "text-xs sm:text-sm 3xl:text-lg",
};

export interface TypographyProps
  extends Omit<
    React.HTMLAttributes<HTMLParagraphElement>,
    "className | color"
  > {
  children: React.ReactNode;
  variant: keyof TypographyVariants;
  color?: Color;
  uppercase?: boolean;
}

export default function Typography({
  children,
  variant,
  color = "white",
  uppercase = false,
}: TypographyProps) {
  return (
    <p
      className={`${variants[variant]} ${`text-${color}`} ${
        uppercase ? "uppercase" : ""
      }`}
    >
      {children}
    </p>
  );
}
