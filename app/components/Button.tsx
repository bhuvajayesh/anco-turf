import { ButtonHTMLAttributes, ReactNode } from "react";

const variants = {
  primary:
    "border border-[#5D9732] rounded-[8px] tracking-[1.2px] px-[30px] py-[18px] leading-none uppercase text-sm text-[#5D9732] hover:bg-[#5D9732] hover:border-[#5D9732] hover:text-white",
};

type ButtonVariant = keyof typeof variants;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  children,
  className = "cursor-pointer",
  ...props
}: ButtonProps) {
  const classes = `${variants[variant]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
