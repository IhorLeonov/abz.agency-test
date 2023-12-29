import s from "./Button.module.scss";
import cn from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, className, ...props }: ButtonProps): JSX.Element => {
  return (
    <button className={cn(s.button, className)} {...props}>
      {children}
    </button>
  );
};
