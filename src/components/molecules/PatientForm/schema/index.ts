import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required(),
  sus_card: yup.string().min(15).max(15).required(),
});
