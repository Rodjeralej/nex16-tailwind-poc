interface TypographyVariants {
  menu: string;
}

const variants: TypographyVariants = {
  menu: "sm:text-5xl text-4xl uppercase",
};

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, "className"> {
  children: React.ReactNode;
  variant: keyof TypographyVariants;
}

export default function Typography({ children, variant }: TypographyProps) {
  return <p className={variants[variant]}>{children}</p>;
}
