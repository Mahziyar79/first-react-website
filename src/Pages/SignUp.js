import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../common/Input";

const initialValues = {
  name: "",
  email: "",
  password: "",
  PasswordConfirm: "",
  PhonNumber: "",
  terms: false,
};

const validationSchema = Yup.object({
  name: Yup.string()
    .required("name is required")
    .min(6, "must be at least 6 char"),
  email: Yup.string()
    .email("Invalid email format")
    .required("email is required"),
  PhonNumber: Yup.string()
    .required("Phon Number is required")
    .matches(/^[0-9]{11}$/, "Invalid Phone Number"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  PasswordConfirm: Yup.string()
    .required("Password Confirmation is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  terms: Yup.boolean().oneOf([true], "Must Accept Terms and Conditions"),
});

const SignUp = (props) => {
  console.log(props);
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(values);
      props.history.push("/")
    },
    validationSchema,
    validateOnMount: true,
  });
  return (
    <div className="signup-parent">
      <form className="form-signup" onSubmit={formik.handleSubmit}>
        <h1>Sign Up</h1>
        <Input formik={formik} name="name" label="Name" />
        <Input formik={formik} name="email" label="Email" type="email" />
        <Input formik={formik} name="PhonNumber" label="Phone Number" />
        <Input
          formik={formik}
          name="password"
          label="Password"
          type="password"
        />
        <Input
          formik={formik}
          name="PasswordConfirm"
          label="Password Confirmation"
          type="password"
        />
        <div className="terms">
          <input
            name="terms"
            id="conditions"
            type="checkbox"
            onChange={formik.handleChange}
          />
          <label htmlFor="conditions">Terms and Conditions</label>
        </div>
        <button type="submit" disabled={!formik.isValid}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
