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
        .min(8, "Passwords need 6 characters")
        .required('Password is required'),
    username: yup
        .string()
        .min(8, 'username please')
        .required('username is required'),
    title: yup
        .string()
        .min(6, 'title please' )
        .required('Must include title'),
    author: yup
        .string()
        .min(3, 'Names must use at least 3 characters')
        .required('Must include a name'),
    topic: yup
        .string()
        .min(8, 'Please describe what your post explains to do')
        .required('Must include a topic'),
    steps: yup
        .string()
        .required('A guide is required')

});

export default formSchema