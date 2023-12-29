import s from "./Title.module.scss";
import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

interface TitleProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  tag: "h1" | "h2";
  children: React.ReactNode;
}

export const Title = ({ tag, children, ...props }: TitleProps): JSX.Element => {
  switch (tag) {
    case "h1":
      return (
        <h1 {...props} className={s.title}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 {...props} className={s.title + " " + s.h2}>
          {children}
        </h2>
      );
    default:
      return <></>;
  }
};

// universal title component that returns necessary h-tag with personal styles
