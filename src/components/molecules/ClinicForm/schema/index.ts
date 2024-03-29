import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required(),
  street: yup.string().required(),
  number: yup.number().required(),
  district: yup.string().required(),
  nameAdm: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(32).required(),
  confirmPassword: yup.string().min(6).max(32).required(),
});
