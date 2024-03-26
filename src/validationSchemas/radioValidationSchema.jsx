import * as yup from "yup";

export const radiosValidationSchema = yup.object().shape({
    value: yup.string().required(),
})