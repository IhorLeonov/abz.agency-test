import { FC, useEffect, useRef, useState } from "react";
import s from "./PostSection.module.scss";
import { Title } from "../Title/Title";
import { Button } from "../Button/Button";
import { Formik, Form, Field, FormikHelpers } from "formik";
import common_s from "../../sass/common.module.scss";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { selectData } from "../../redux/selectors";
import { getPositions, getToken, postNewUser } from "../../redux/operations";

interface Values {
  name: string;
  email: string;
  phone: string;
  position: string;
}

export const PostSection: FC = () => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const { positions } = useAppSelector(selectData);

  const [photo, setPhoto] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("Upload your photo");

  useEffect(() => {
    dispatch(getPositions());
    dispatch(getToken());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      setPhoto(e.target.files[0]);
      setFileName(e.target.files[0].name);
    }
  };

  const handlePickImage = () => {
    inputRef?.current?.click();
  };

  const handleSubmit = async (values: Values, { resetForm }: FormikHelpers<Values>) => {
    const formData = new FormData();

    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("phone", values.phone);
    formData.append("position_id", values.position);

    if (photo !== null) formData.append("photo", photo);

    dispatch(postNewUser({ formData }));
    resetForm();
  };

  return (
    <section className={s.section}>
      <Title tag="h2">Working with POST request</Title>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          position: "1",
        }}
        onSubmit={handleSubmit}
      >
        {() => {
          return (
            <Form>
              <Field className={s.field} type="text" name="name" id="name" />
              <label htmlFor="name" className={s.field_label}>
                Your name
              </label>
              <Field className={s.field} type="email" name="email" id="email" />
              <label htmlFor="email" className={s.field_label}>
                Email
              </label>
              <Field className={s.field} type="text" name="phone" id="phone" />
              <label htmlFor="phone" className={s.field_label}>
                Phone
              </label>

              <p className={s.number}>+38 (XXX) XXX - XX - XX</p>
              <p className={s.position_title}>Select your position</p>

              <div className={s.positions_box} role="group" aria-labelledby="my-radio-group">
                {positions.map(({ id, name }) => (
                  <label key={id}>
                    <Field className={s.radio} name="position" type="radio" value={`${id}`} />
                    <span className={s.radio_icon} />
                    <span className={s.position_caption}>{name}</span>
                  </label>
                ))}
              </div>

              <div className={s.upploader}>
                <button className={s.uppload_btn} type="button" onClick={handlePickImage}>
                  Upload
                </button>
                <p
                  className={s.uppload_caption}
                  style={{ color: !photo ? "#7e7e7e" : "#000000de" }}
                >
                  {fileName}
                </p>
              </div>

              <input
                className={common_s.hidden}
                name="photo"
                type="file"
                ref={inputRef}
                onChange={handleChangeFile}
                accept=".jpeg, .jpg"
              />

              <Button className={s.submit_btn} type="submit">
                Sign up
              </Button>
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};
