import * as yup from "yup";

export const shirtsValidationSchema = yup.object().shape({
    name: yup.string().required().matches(/^[A-Za-zА-Яа-яЁёІіЇїЄє\s]+$/),
    tel: yup.string().required().matches(/.{13,13}/),
    email: yup.string().email(),
})