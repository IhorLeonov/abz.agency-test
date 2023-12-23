import { TitleProps } from "./Title.props";
import s from "./Title.module.scss";

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
