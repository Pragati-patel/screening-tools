import React from "react";
import styles from "./FindGreatForm.module.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Button from "@/components/common/Button";

export default function FindGreatForm() {
  const heading1 = "Find out how Sourcebae can upgrade your hiring process";
  const specialHeading = " Sourcebae";
  const heading2 = " can upgrade your hiring process";

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(25, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    role: Yup.string().required("Required"),
  });

  return (
    <div className={styles.border_wrapper}>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          {heading1}
          <span className="gradiant_color">{specialHeading}</span>
          {heading2}
        </div>
          <Formik
            initialValues={{
              firstName: "",
              role: "",
              email: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className={styles.form_wrapper}>
                <div className={styles.field_wrapper}>
                  <label className={styles.label}>Full Name</label>
                  <Field name="firstName" className={styles.form_field} placeholder="First & Last Name"/>
                  {errors.firstName && touched.firstName ? (
                    <p className={styles.error_msg}>{errors.firstName}</p>
                  ) : null}
                </div>

                <div className={styles.field_wrapper}>
                  <label className={styles.label}>Business Email</label>
                  <Field
                    name="email"
                    type="email"
                    className={styles.form_field}
                    placeholder=" Your work email"
                  />
                  {errors.email && touched.email ? (
                    <p className={styles.error_msg}>{errors.email}</p>
                  ) : null}
                </div>

                <div className={styles.field_wrapper}>
                  <label className={styles.label}>Role</label>
                  <Field name="role" className={styles.form_field} placeholder="Which best describes your role"/>
                  {errors.firstName && touched.firstName ? (
                    <p className={styles.error_msg}>{errors.role}</p>
                  ) : null}
                </div>

                <div className={styles.field_wrapper}>
                  <label className={styles.label}>Message (Optional)</label>
                  <Field name="message" className={styles.form_field} placeholder="Type your message here"/>
                </div>

                  <Button  type="submit" otherStyles={styles.submit}>BOOK A FREE DEMO</Button>
              </Form>
            )}
          </Formik>
      </div>
    </div>
  );
}
