import { string, ref, object } from 'yup'

export const signUpSchema = object({
  userName: string()
    .required('user name is required')
    .matches(/^\S*$/g, 'user name should not have any spaces'),
  email: string()
    .email('please enter a valid email')
    .required('email address is required'),
  password: string()
    .min(8, 'password need to be bigger than 8 characters')
    .matches(
      /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))/,
      'you should enter 1 uppercase, 1 lowercase , 1 special'
    )
    .required('password is required'),
  confirmPassword: string()
    .required()
    .oneOf([ref('password'), null], 'Passwords must match'),
  phone: string().required('phone number is required'),
  country: string().required('country is required'),
  city: string().required('city is required'),
  gender: string().required('please select one of the gender'),
}).required()
