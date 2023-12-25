import { FC, useEffect, useRef, useState } from "react";
import s from "./PostSection.module.scss";
import { Title } from "../Title/Title";
import { Button } from "../Button/Button";
import { Formik, Form, Field, FormikHelpers } from "formik";
import common_s from "../../sass/common.module.scss";

const URL = "https://frontend-test-assignment-api.abz.agency/api/v1";

interface Values {
  name: string;
  email: string;
  phone: string;
  position: string;
}

export const PostSection: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [photo, setPhoto] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("Upload your photo");
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`${URL}/token`)
        .then((res) => res.json())
        .then((data) => setToken(data.token));
    };
    fetchData().catch((err) => console.log(err.message));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      setPhoto(e.target.files[0]);
      setFileName(e.target.files[0].name);
    }
  };

  const handlePick = () => {
    inputRef?.current?.click();
  };

  const handleSubmit = async (values: Values, { resetForm }: FormikHelpers<Values>) => {
    const formData = new FormData();

    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("phone", values.phone);
    formData.append("position_id", values.position);

    if (photo !== null) formData.append("photo", photo);

    try {
      const res = await fetch(`${URL}/users`, {
        method: "POST",
        body: formData,
        headers: { Token: token },
      });

      if (res.status) {
        console.log(`Success`);
      } else {
        console.log(`Error`);
      }
    } catch (error) {
      console.log(error);
    }

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
        {() => (
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
              <label>
                <Field className={s.radio} name="position" type="radio" value="1" />
                <span className={s.radio_icon} />
                <span className={s.position_caption}>Frontend developer</span>
              </label>
              <label>
                <Field className={s.radio} name="position" type="radio" value="2" />
                <span className={s.radio_icon} />
                <span className={s.position_caption}>Backend developer</span>
              </label>
              <label>
                <Field className={s.radio} name="position" type="radio" value="3" />
                <span className={s.radio_icon} />
                <span className={s.position_caption}>Designer</span>
              </label>
              <label>
                <Field className={s.radio} name="position" type="radio" value="4" />
                <span className={s.radio_icon} />
                <span className={s.position_caption}>QA</span>
              </label>
            </div>

            <div className={s.upploader}>
              <button className={s.uppload_btn} type="button" onClick={handlePick}>
                Upload
              </button>
              <p className={s.uppload_caption} style={{ color: !photo ? "#7e7e7e" : "#000000de" }}>
                {fileName}
              </p>
            </div>

            <input
              className={common_s.hidden}
              name="photo"
              type="file"
              ref={inputRef}
              onChange={handleChange}
              accept=".jpeg, .jpg"
            />

            <Button className={s.submit_btn} type="submit">
              Sign up
            </Button>
          </Form>
        )}
      </Formik>
    </section>
  );
};
