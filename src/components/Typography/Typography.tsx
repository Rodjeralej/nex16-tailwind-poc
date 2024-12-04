"use client";

interface TypographyVariants {
  menu: string;
  heading: string;
  subheading: string;
}

const variants: TypographyVariants = {
  menu: "sm:text-5xl text-4xl uppercase",
  heading: "text-3xl sm:text-4xl uppercase",
  subheading: "text-2xl sm:text-3xl",
};

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, "className"> {
  children: React.ReactNode;
  variant: keyof TypographyVariants;
  color?: "text-white" | "text-black" | "text-gray-200";
}

export default function Typography({
  children,
  variant,
  color = "text-white",
}: TypographyProps) {
  return <p className={`${variants[variant]} ${color}`}>{children}</p>;
}
