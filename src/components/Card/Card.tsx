import { FC } from "react";
import s from "./Card.module.scss";
import photo from "../../assets/cover.png";

export const Card: FC = () => {
  return (
    <div className={s.card}>
      <img className={s.photo} src={photo} alt="User photo" />
      <p style={{ marginBottom: 20 }} className={s.text}>
        Takamaru Ayako Jurrien
      </p>
      <p className={s.text}>Lead Independent Director </p>
      <p className={s.text}>Takamuru@gmail.com</p>
      <p className={s.text}>+38 (098) 278 90 24</p>
    </div>
  );
};
