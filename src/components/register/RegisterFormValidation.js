import * as yup from 'yup'

export const registerValidationSchema = yup
    .object({
        firstName: yup
            .string()
            .required()
            .min(3, 'firstname should be at least 3 characters')
            .max(50, 'max 50 characters'),
        lastName: yup
            .string()
            .required()
            .min(3, 'lastname should be at least 3 characters'),
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
