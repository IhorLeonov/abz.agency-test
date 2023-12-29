import { FC } from "react";
import s from "./Card.module.scss";
import { CardProps } from "../../types/types";
import coverImage from "../../assets/images/photo-cover.jpg";

export const Card: FC<CardProps> = ({ name, position, email, phone, photo }) => {
  const isNameTooLong = name.length > 35;
  const isEmailTooLong = email.length > 35;

  return (
    <>
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
        <p
          data-tooltip-id={isNameTooLong ? "name-tooltip" : ""}
          data-tooltip-content={name}
          style={{ marginBottom: 20, cursor: isNameTooLong ? "pointer" : "default" }}
          className={s.text}
        >
          {name}
        </p>
        <p className={s.text}>{position}</p>
        <p
          data-tooltip-id={isEmailTooLong ? "email-tooltip" : ""}
          data-tooltip-content={email}
          style={{ cursor: isEmailTooLong ? "pointer" : "default" }}
          className={s.text}
        >
          {email}
        </p>
        <p className={s.text}>{phone}</p>
      </li>
    </>
  );
};
