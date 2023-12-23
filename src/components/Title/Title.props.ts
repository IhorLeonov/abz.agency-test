import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface TitleProps
  extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  tag: "h1" | "h2";
  children: React.ReactNode;
}
