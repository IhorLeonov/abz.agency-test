import s from "./Button.module.scss";
import { ButtonProps } from "./Button.props";
import cn from "classnames";

export const Button = ({ children, className, ...props }: ButtonProps): JSX.Element => {
  return (
    <button className={cn(s.button, className)} {...props}>
      {children}
    </button>
  );
};
