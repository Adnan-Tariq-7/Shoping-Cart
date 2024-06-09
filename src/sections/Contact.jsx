import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
};

const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
});

const Contact = () => {
  return (
    <section id='contact-us'>
      <h1 className="text-center text-4xl font-semibold text-primary py-5">
        Contact Us
      </h1>
      <div className="md:w-[50%] max-md:w-[80%] mx-auto bg-secondary max-md:p-4 p-10">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col">
              <label
                htmlFor="firstName"
                className="text-white font-semibold text-lg"
              >
                First Name
              </label>
              <Field
                className="py-2 border-[3px] px-1 outline-none rounded-md border-primary"
                name="firstName"
                type="text"
              />
              <ErrorMessage
                component="div"
                className="text-red-400"
                name="firstName"
              />

              <label
                htmlFor="lastName"
                className="text-white font-semibold text-lg mt-4"
              >
                Last Name
              </label>
              <Field
                className="py-2 border-[3px]  px-1 outline-none rounded-md border-primary"
                name="lastName"
                type="text"
              />
              <ErrorMessage
                component="div"
                className="text-red-400"
                name="lastName"
              />

              <label
                htmlFor="email"
                className="text-white font-semibold text-lg mt-4"
              >
                Email Address
              </label>
              <Field
                className="py-2 border-[3px]  px-1 outline-none rounded-md border-primary"
                name="email"
                type="email"
              />
              <ErrorMessage
                component="div"
                className="text-red-400"
                name="email"
              />

              <button
                className="mt-6 py-2 bg-primary text-white font-semibold rounded-md"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Contact;
