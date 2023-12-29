import { FC } from "react";
import s from "./FooterSection.module.scss";
import ghIcon from "../../assets/icons/github.svg";

export const Footer: FC = () => {
  return (
    <footer className={s.footer}>
      <p>© abz.agency test assignment</p>
      <a href="https://github.com/IhorLeonov/abz.agency-test" target="_blank" rel="noreferrer">
        Github
        <img src={ghIcon} alt="GitHub icon" />
      </a>
    </footer>
  );
};
