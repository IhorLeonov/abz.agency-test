import { FC } from "react";
import s from "./Card.module.scss";
import { User } from "../../types/interfaces";

export const Card: FC<Partial<User>> = ({ name, position, email, phone, photo }) => {
  return (
    <li className={s.card}>
      <img className={s.photo} src={photo} alt="User photo" />
      <p style={{ marginBottom: 20 }} className={s.text}>
        {name}
      </p>
      <p className={s.text}>{position}</p>
      <p className={s.text}>{email}</p>
      <p className={s.text}>{phone}</p>
    </li>
  );
};
