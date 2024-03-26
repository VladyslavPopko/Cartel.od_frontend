import * as yup from "yup";

export const shirtsValidationSchema = yup.object().shape({
    name: yup.string().required(),
    tel: yup.string().required(),
    email: yup.string().email(),
})