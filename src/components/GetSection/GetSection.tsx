import { FC } from "react";
import s from "./GetSection.module.scss";
import { Title } from "../Title/Title";
import { Card } from "../Card/Card";
import { Button } from "../Button/Button";

export const GetSection: FC = () => {
  return (
    <section className={s.section}>
      <Title tag="h2">Working with GET request</Title>
      <Card />
      <Button style={{ marginTop: 50 }}>Show more</Button>
    </section>
  );
};
