import React from "react";
// External libraries
import { Form, Formik } from "formik";
import { Button, TextField, Box, Typography } from "@mui/material";
import Swal from "sweetalert2";
import { useTranslation } from "next-i18next";
// Interfaces
import { IEmailDto } from "../interfaces";
// Services
import { sendEmail } from "../services";
// Themes
import { colors } from "@/styles/themes";
// Schemas
import { ContactFormSchema } from "../schemas";
// Helpers
import { handleError } from "@/modules/shared/helpers";

export const ContactMe = () => {
  //******** Hooks ********//

  const { t } = useTranslation("common");

  //******** Methods ********//

  const onSubmit = async (values: IEmailDto) => {
    try {
      await sendEmail(values);
      Swal.fire({
        icon: "success",
        text: "Your message have been sent!",
      });
    } catch (error) {
      Swal.fire({
        icon: "success",
        text: handleError(error),
      });
    }
  };

  //******** Renders ********//

  return (
    <Formik
      initialValues={{ subject: "", body: "" }}
      validationSchema={ContactFormSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ getFieldProps, handleSubmit, touched, errors }) => (
        <Form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography
              sx={{ pb: 1, borderBottom: `1px solid white` }}
              color="secondary.main"
            >
              {t("contact_text_1")} 💬
            </Typography>
            <TextField
              label={t("contact_input_1")}
              color="info"
              variant="standard"
              {...getFieldProps("subject")}
              helperText={touched.subject && errors.subject && errors.subject}
              error={touched.subject && errors.subject ? true : false}
            />
            <TextField
              label={t("contact_input_2")}
              color="info"
              variant="outlined"
              multiline
              rows={10}
              {...getFieldProps("body")}
              helperText={touched.body && errors.body && errors.body}
              error={touched.body && errors.body ? true : false}
            />
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button type="submit" color="info">
                {t("contact_btn_1")}
              </Button>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};
