import { Button } from "../index";
import { FC, useEffect, useRef, useState } from "react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { FormValues } from "../../types/types";
import { selectData } from "../../redux/selectors";
import { useAppSelector, useAppDispatch } from "../../redux/store";
import { postNewUser } from "../../redux/operations";
import { schema, validatePhoto } from "../../helpers/index";
import { setIsSuccess } from "../../redux/mainSlice";

import s from "./SignUpForm.module.scss";
import common_s from "../../sass/common.module.scss";
import cn from "classnames";

export const SignUpForm: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const { positions } = useAppSelector(selectData);

  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("Upload your photo");
  const [fileErrorText, setFileErrorText] = useState<string>("idle");
  const [isFileOk, setIsFileOk] = useState<boolean>(false);

  useEffect(() => {
    validatePhoto(file, fileErrorText, setFileErrorText, setIsFileOk);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      setFile(e.target.files[0]);
      if (e.target.files[0]) {
        setFileName(e.target.files[0].name);
      } else setFileName("Upload your photo");
    }
  };

  const handlePickImage = () => {
    inputRef?.current?.click();
  };

  const handleSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
    const formData = new FormData();

    formData.append("name", values.name);
    formData.append("email", values.email.toLowerCase());
    formData.append("phone", values.phone);
    formData.append("position_id", values.position);
    if (file !== null) formData.append("photo", file);

    if (fileErrorText.includes("idle")) {
      setFileErrorText("You should choose the photo");
    }

    if (isFileOk) {
      const res = await dispatch(postNewUser({ formData }));

      if (res.payload.success) {
        dispatch(setIsSuccess());
        actions.resetForm();
      }
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        position: "1",
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ values, touched, errors }) => {
        return (
          <Form>
            <Field
              id="name"
              type="text"
              name="name"
              className={cn(s.field, {
                [s.field_error]: touched.name && errors.name,
              })}
            />
            <label
              htmlFor="name"
              className={cn(s.label, {
                [s.field_typed]: touched.name && values.name,
                [s.label_error]: touched.name && errors.name,
              })}
            >
              Your name
            </label>
            <p className={s.field_error_text}>{errors.name && touched.name ? errors.name : ""}</p>

            <Field
              id="email"
              type="email"
              name="email"
              className={cn(s.field, {
                [s.field_error]: touched.email && errors.email,
              })}
            />
            <label
              htmlFor="email"
              className={cn(s.label, {
                [s.field_typed]: touched.email && values.email,
                [s.label_error]: touched.email && errors.email,
              })}
            >
              Email
            </label>
            <p className={s.field_error_text}>
              {errors.email && touched.email ? errors.email : ""}
            </p>

            <Field
              id="phone"
              type="text"
              name="phone"
              className={cn(s.field, {
                [s.field_error]: touched.phone && errors.phone,
              })}
            />
            <label
              htmlFor="phone"
              className={cn(s.label, {
                [s.field_typed]: touched.phone && values.phone,
                [s.label_error]: touched.phone && errors.phone,
              })}
            >
              Phone
            </label>
            <p className={s.field_error_text}>
              {errors.phone && touched.phone ? (
                errors.phone
              ) : (
                <span className={s.field_prompt}>+38 (XXX) XXX - XX - XX</span>
              )}
            </p>

            <p>Select your position</p>
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
              <button
                className={cn(s.uppload_btn, {
                  [s.upload_error]: !isFileOk && !fileErrorText.includes("idle"),
                })}
                type="button"
                onClick={handlePickImage}
              >
                Upload
              </button>
              <p
                data-tooltip-id={fileName.length > 32 ? "image-tooltip" : ""}
                data-tooltip-content={fileName}
                className={cn(s.uppload_caption, {
                  [s.upload_error]: !isFileOk && !fileErrorText.includes("idle"),
                })}
                style={{
                  color: !file ? "#7e7e7e" : "#000000de",
                  cursor: fileName.length > 32 ? "pointer" : "default",
                }}
              >
                {fileName}
              </p>
            </div>
            <p style={{ marginBottom: 0 }} className={s.field_error_text}>
              {!fileErrorText.includes("idle") && fileErrorText}
            </p>

            <input
              className={common_s.hidden}
              name="file"
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
  );
};
