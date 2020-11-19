import * as yup from "yup";

export default yup.object().shape({
    category: yup
        .string()
        .required("Please enter a category"),
    name: yup
        .string()
        .required("Please name item"),
    price: yup
        .number()
        .required("Please price item"),
    location: yup
        .string()
        .required("Please choose your location"),
});