import * as yup from "yup";

export default yup.object().shape({
    department: yup
        .string()
        .required("Must type buyer"),
    username: yup
        .string()
        .required("Username is a required field"),
    password: yup
        .string()
        .required("Password is a required field")
        .min(8, "Minimum password length is eight characters")
});