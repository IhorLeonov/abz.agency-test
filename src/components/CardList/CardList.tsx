import { FC } from "react";
import { useAppSelector } from "../../redux/store";
import { selectData } from "../../redux/selectors";
import { Card } from "../Card/Card";
import s from "./CardList.module.scss";

export const CardList: FC = () => {
  const { users } = useAppSelector(selectData);

  return (
    <ul className={s.list}>
      {users.map((user) => (
        <Card
          key={user.id}
          name={user.name}
          position={user.position}
          email={user.email}
          phone={user.phone}
          photo={user.photo}
        />
      ))}
    </ul>
  );
};
