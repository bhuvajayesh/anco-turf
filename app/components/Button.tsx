import { ButtonHTMLAttributes, ReactNode } from "react";

const variants = {
  primary:
    "border border-[#5D9732] rounded-[8px] tracking-[1.4px] px-6 md:px-[30px] py-[22px] leading-none uppercase text-sm font-medium text-[#5D9732] hover:bg-[#5D9732] hover:border-[#5D9732] hover:text-white",
  secondary:
    "bg-[#5D9732] rounded-[8px] tracking-[1.4px] px-6 md:px-[30px] py-[23px] leading-none uppercase text-sm font-medium text-white hover:bg-[#3D7303]",
  btnWhite:
    "bg-white rounded-[8px] tracking-[1.4px] p-6 leading-none uppercase text-sm font-medium text-[#5D9732]",
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
