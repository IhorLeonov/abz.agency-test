import * as Yup from "yup";

const required = "Please complete this field";
const regex = /^[+]{0,1}380([0-9]{9})$/;

export const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be longer")
    .max(60, "Name must be shorter")
    .required(required),
  email: Yup.string().email("Is not valid email").required(required),
  phone: Yup.string().matches(regex, "Is not valid phone number").required(required),
  // file: Yup.mixed().required(required),
});
