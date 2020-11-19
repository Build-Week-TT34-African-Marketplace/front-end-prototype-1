import * as yup from "yup";

export default yup.object().shape({
    name: yup
        .string()
        .required("Please name item"),
    description: yup
        .string()
        .required("Please give an item description"),
    price: yup
        .number()
        .required("Please price item"),
    location: yup
        .string()
        .required("Please choose your location"),
    category: yup
        .string()
        .required("Please enter a category"),
});