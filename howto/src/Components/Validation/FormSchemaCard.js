import * as yup from 'yup'

const formSchemaCard = yup.object().shape({
title: yup
    .string()
    .min(1, 'Title please' )
    .required('Must include title'),
author: yup
    .string()
    .min(1, 'Names must use at least 3 characters')
    .required('Must include a name'),
topic: yup
    .string()
    .min(1, 'Please describe what your post explains to do')
    .required('Must include a topic'),
steps: yup
    .string()
    .required('A guide is required'),
})

export default formSchemaCard