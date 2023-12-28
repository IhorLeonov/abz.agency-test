import { FC, useEffect } from "react";
import { Title, SignUpForm } from "../index";

import s from "./SignUpSection.module.scss";
import { useAppDispatch } from "../../redux/store";
import { getPositions, getToken } from "../../redux/operations";

export const SignUpSection: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPositions());
    dispatch(getToken());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="sign-up" className={s.section}>
      <Title tag="h2">Working with POST request</Title>
      <SignUpForm />
    </section>
  );
};
