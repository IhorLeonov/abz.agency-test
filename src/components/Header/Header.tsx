import { FC } from "react";
import logo from "../../assets/icons/logo.svg";
import { Button } from "../Button/Button";

import s from "./Header.module.scss";

export const Header: FC = () => {
  return (
    <header className={s.header}>
      <img className={s.logo} src={logo} alt="Logo" />
      <nav className={s.nav_box}>
        <Button>Users</Button>
        <Button>Sign up</Button>
      </nav>
    </header>
  );
};
