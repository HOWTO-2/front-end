import * as yup from 'yup'

const formSchemaLogin = yup.object().shape({
    username: yup
        .string()
        .required('Please tell us your username'),
    password: yup
        .string()
        .required('Please tell us your password')
})

export default formSchemaLogin