import { Formik } from "formik";
import * as YUP from "yup";
import "./App.css";
import FullNameInput from "./components/FullNameInput/FullNameInput";
import GenderInput from "./components/GenderInput/GenderInput";
import PasswordInput from "./components/PasswordInput/PasswordInput";
import SubmitButton from "./components/SubmitButton/SubmitButton";

function App() {
  const validSchema = YUP.object().shape({
    name: YUP.string()
      .trim()
      .matches(/^[A-Za-zԱ-Ֆա-ֆ]+$/, "Name must contain only letters")
      .min(2, "Name must be at least 2 characters")
      .max(6, "Name must be at most 6 characters")
      .required("Name is required"),

    lastname: YUP.string()
      .trim()
      .matches(/^[A-Za-zԱ-Ֆա-ֆ]+$/, "Name must contain only letters")
      .min(3, "Last name must be at least 3 characters")
      .max(10, "Last name must be at most 10 characters")
      .required("Last name is required"),
    gender: YUP.string().required("Gender is required"),
    contact: YUP.string()
      .required("Email or phone number is required")
      .test(
        "email-or-phone",
        "Enter a valid email or phone number",
        (value) =>
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
          /^\+?[0-9]{8,15}$/.test(value),
      ),
    password: YUP.string()
      .trim()
      .matches(/^\S*$/, "No spaces allowed")
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/[a-z]/, "Must contain at least one lowercase letter")
      .matches(/[0-9]/, "Must contain at least one number")
      .matches(/[!@#$%^&*]/, "Must contain at least one special character")
      .required("Password is required"),
    confirmPassword: YUP.string()
      .trim()
      .oneOf([YUP.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          lastname: "",
          gender: "",
          contact: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(value) => console.log(value)}
        validationSchema={validSchema}
      >
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit} className="container">
            <FullNameInput
              values={values}
              handleChange={handleChange}
              errors={errors}
              touched={touched}
            />
            <GenderInput
              values={values}
              handleChange={handleChange}
              errors={errors}
              touched={touched}
            />
            <PasswordInput
              values={values}
              handleChange={handleChange}
              errors={errors}
              touched={touched}
            />
            <SubmitButton />
          </form>
        )}
      </Formik>
    </>
  );
}

export default App;
