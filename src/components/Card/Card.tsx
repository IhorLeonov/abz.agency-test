import { FC } from "react";
import s from "./Card.module.scss";
import { CardProps } from "../../types/types";
import coverImage from "../../assets/images/photo-cover.jpg";

export const Card: FC<CardProps> = ({ name, position, email, phone, photo }) => {
  return (
    <li className={s.card}>
      <img
        className={s.photo}
        src={
          photo.toLowerCase().includes(".jpeg") || photo.toLowerCase().includes(".jpg")
            ? photo
            : coverImage
        }
        alt="User photo"
      />
      <p style={{ marginBottom: 20 }} className={s.text}>
        {name}
      </p>
      <p className={s.text}>{position}</p>
      <p className={s.text}>{email}</p>
      <p className={s.text}>{phone}</p>
    </li>
  );
};
