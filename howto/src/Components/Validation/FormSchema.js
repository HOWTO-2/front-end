import * as yup from 'yup'

const formSchema = yup.object().shape({
    fname: yup
        .string()
        .min(3, "Name or Nick is fine")
        .required("Must include First Name"),
    lname: yup
        .string()
        .min(3, "Last Name")
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
    .min(8,'username please')
    .required('username is required')

});

export default formSchema