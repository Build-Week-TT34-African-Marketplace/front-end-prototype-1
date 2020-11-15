import * as yup from "yup";

export default yup.object().shape({
    owner: yup
        .string()
        .required("Please name owner")
        .min(2, "Owner name must be 2 chars long"),
    itemName: yup
        .string()
        .required("Please name item"),
    itemDescription: yup
        .string()
        .required("Please describe item"),
    itemPrice: yup
        .number()
        .required("Please price item"),
    itemCurrency: yup
        .string()
        .required("Please choose currency"),
});