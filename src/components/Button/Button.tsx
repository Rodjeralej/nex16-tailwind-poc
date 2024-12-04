"use client";

import { ForwardedRef, forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  testId?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "secondary" | "tertiary";
}

const sizes = {
  xs: "w-20 h-10",
  sm: "w-24 h-12",
  md: "w-28 h-14",
  lg: "w-32 h-16",
  xl: "w-36 h-20",
};

const variants = {
  primary:
    "bg-bistre text-white hover:bg-bistre2 rounded-lg transition-colors duration-300",
  secondary:
    "bg-licorice text-white hover:bg-night2 rounded-lg transition-colors duration-300",
  tertiary:
    "bg-eerieBlack text-white hover:bg-night rounded-lg transition-colors duration-300",
};

const Button = forwardRef(
  (
    {
      testId = "clk-button",
      size = "md",
      variant = "primary",
      children,
      ...props
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <button
        ref={ref}
        className={`${sizes[size]} ${variants[variant]}`}
        data-testid={testId}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "buttonComponent";

export default Button;
