import * as yup from 'yup'

export const saveProductValidationSchema = yup
    .object({
        name: yup
            .string()
            .required()
            .min(3, 'name should be at least 3 characters'),
        description: yup
            .string()
            .required()
            .min(3, 'description should be at least 3 characters'),
        brand: yup
            .string()
            .required()
            .min(3, 'brand should be at least 3 characters'),
        category: yup
            .string()
            .required()
            .min(6, 'category should be at least 6 characters'),
        price: yup
            .number()
            .required()
            .min(1, 'price should be at least 1 characters'),
    })
