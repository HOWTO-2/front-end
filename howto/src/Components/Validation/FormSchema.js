import * as yup from 'yup'

const formSchema = yup.object().shape({
    fName: yup
        .string()
        .min(3, "Name or Nick is fine")
        .required("Must include First Name"),
    lName: yup
        .string()        
        .required("Must include Last Name"),
    email: yup
        .string()
        .email("Must be a valid email address.")
        .required("Must include email address."),
    password: yup
        .string()
        .min(8, "Passwords need 6 charas")
        .required('Password is required'),
    username: yup
        .string()
        .min(5, 'Minimum 5 characters on username')
        .required('username is required')

});

export default formSchema