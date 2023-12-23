import { FC } from "react";
import s from "./PostSection.module.scss";
import { Title } from "../Title/Title";
import { Button } from "../Button/Button";
import { Formik, Form } from "formik";

export const PostSection: FC = () => {
  return (
    <section className={s.section}>
      <Title tag="h2">Working with POST request</Title>

      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
        }}
      >
        {(props) => (
          <Form className={s.form} onSubmit={props.handleSubmit}>
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.name}
              name="name"
            />
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}

            <input type="text" name="name" />
            <input type="email" name="email" />
            <input type="text" name="phone" />

            <p>Select your position</p>

            <label>
              <input name="position" type="radio" id="" />
              Frontend developer
            </label>

            <label>
              <input name="position" type="radio" id="" />
              Backend developer
            </label>

            <label>
              <input name="position" type="radio" id="" />
              Designer
            </label>
            <label>
              <input name="position" type="radio" id="" />
              QA
            </label>

            <Button type="submit" style={{ marginTop: 50 }}>
              Sign up
            </Button>
          </Form>
        )}
      </Formik>
    </section>
  );
};
