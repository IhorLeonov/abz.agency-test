import { FC } from "react";
import s from "./HeroSection.module.scss";
import { Button, Title } from "../index";

export const Hero: FC = () => {
  return (
    <section className={s.hero}>
      <div className={s.wrapper}>
        <Title tag="h1">Test assignment for front-end developer</Title>
        <p className={s.desc}>
          What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS
          with a vast understanding of User design thinking as they'll be building web interfaces
          with accessibility in mind. They should also be excited to learn, as the world of
          Front-End Development keeps evolving.
        </p>
        <a href="#sign-up">
          <Button>Sign up</Button>
        </a>
      </div>
    </section>
  );
};
