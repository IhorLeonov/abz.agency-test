import { FC, useEffect } from "react";
import s from "./UsersSection.module.scss";
import { Title, Button, CardList } from "..";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { getUsers } from "../../redux/operations";
import { selectData, selectIsSuccess } from "../../redux/selectors";
import { resetState, setPage } from "../../redux/mainSlice";

export const Users: FC = () => {
  const dispatch = useAppDispatch();
  const { page, total_pages } = useAppSelector(selectData);
  const isSuccess = useAppSelector(selectIsSuccess);

  useEffect(() => {
    dispatch(resetState());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  useEffect(() => {
    const promise = dispatch(getUsers(page));
    return () => promise.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, isSuccess]);

  const handleShowMore = () => {
    dispatch(setPage());
  };

  return (
    <section id="users" className={s.section}>
      <Title tag="h2">Working with GET request</Title>
      <CardList />
      <Button disabled={total_pages === page} style={{ marginTop: 50 }} onClick={handleShowMore}>
        Show more
      </Button>
    </section>
  );
};
