import * as yup from 'yup'

export const loginValidationSchema = yup
    .object({
        email: yup
            .string()
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,4}$/i, 'regex invalid email format')
            // .email('invalid email format')
            .required(),
        password: yup
            .string()
            .min(6, 'password should be at least 6 characters')
            .max(20, 'password should not be more than 20 characters')
            .required()
    })
