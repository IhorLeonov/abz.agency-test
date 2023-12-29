import { FC } from "react";
import logo from "../../assets/icons/logo.svg";
import { Button } from "../index";
import s from "./HeaderSection.module.scss";

export const Header: FC = () => {
  return (
    <header className={s.header}>
      <img className={s.logo} src={logo} alt="Logo" />
      <nav className={s.nav_box}>
        <a href="#users">
          <Button>Users</Button>
        </a>
        <a href="#sign-up">
          <Button>Sign up</Button>
        </a>
      </nav>
    </header>
  );
};
