import * as yup from "yup";

export default yup.object().shape({
    firstName: yup
        .string()
        .required("First name is a required field"),
    lastName: yup
        .string()
        .required("Last name is a required field"),
    email: yup
        .string()
        .email("Please enter a valid email address")
        .required("Email address is a required field"),
    username: yup
        .string()
        .required("Username is a required field"),
    password: yup
        .string()
        .required("Password is a required field")
        .min(8, "Minimum password length is eight characters")
});