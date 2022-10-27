import * as Yup from "yup";

export const ContactFormSchema = Yup.object({
  subject: Yup.string()
    .max(50, "Must have 50 characters at max")
    .required("Add a subject"),
  body: Yup.string().required("Add a message"),
});
