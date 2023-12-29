import { FC } from "react";
import { Title } from "..";
import image from "../../assets/icons/success-image.svg";
import s from "./SuccessPage.module.scss";
import { setIsSuccess } from "../../redux/mainSlice";
import { useAppDispatch } from "../../redux/store";

export const SuccessPage: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <Title tag="h2">User successfully registered</Title>
      <img
        onClick={() => dispatch(setIsSuccess())}
        className={s.img}
        src={image}
        alt="Success registration"
      />
    </div>
  );
};
