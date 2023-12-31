import { FC } from "react";
import s from "./Loader.module.scss";

export const Loader: FC = () => {
  return (
    <div className={s.box}>
      <div className={s.spinner} />
    </div>
  );
};
