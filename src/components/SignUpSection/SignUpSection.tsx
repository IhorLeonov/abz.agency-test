import { FC, useEffect } from "react";
import { Title, SignUpForm, SuccessPage } from "../index";

import s from "./SignUpSection.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getPositions, getToken } from "../../redux/operations";
import { selectIsSuccess } from "../../redux/selectors";

export const SignUp: FC = () => {
  const dispatch = useAppDispatch();
  const isSuccess = useAppSelector(selectIsSuccess);

  useEffect(() => {
    dispatch(getPositions());
    dispatch(getToken());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="sign-up" className={s.section}>
      {!isSuccess ? (
        <>
          <Title tag="h2">Working with POST request</Title>
          <SignUpForm />
        </>
      ) : (
        <SuccessPage />
      )}
    </section>
  );
};
