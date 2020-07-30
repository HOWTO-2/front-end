import * as yup from 'yup'

const formSchemaUser = yup.object().shape({
    fName: yup
        .string()
        .min(1, "Name or Nick is fine")
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
        .min(1, "Passwords need 6 characters")
        .required('Password is required'),
    username: yup
        .string()
        .min(1, 'username please')
        .required('username is required'),
  
   
    })

export default formSchemaUser