import * as yup from "yup";

export default yup.object().shape({
    name: yup
        .string()
        .required("Name is required")
        .min(2, "Name must be 2 chars long."),
    size: yup
        .string()
        .required("Must select size."),
    pepperoni: yup
        .boolean(),
    olives: yup
        .boolean(),
    onions: yup
        .boolean(),
    peppers: yup
        .boolean(),
    instructions: yup
        .string(),
});