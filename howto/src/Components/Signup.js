import React from 'react'




export default function Signup(props) {

    const { values, inputChange, submit, disabled, errors } = props


    //////////////////┬─┬ ノ( ゜-゜ノ)
    //Helper Functions//┬─┬ ノ( ゜-゜ノ)
    ///////////////////////////////////

    const onInputChange = e => {
        const { name, value } = e.target
        inputChange(name, value)
    }

    const onSubmit = e => {
        e.preventDefault()
        submit()
    }


    return (
        <form onSubmit={onSubmit}>
            <button disabled={disabled}> Sign Up </button>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <label>FirstName
            <input
                    name='fName'
                    type='text'
                    maxLength='15'
                    onChange={onInputChange}
                    value={values.fName}
                />
            </label>
            <label>Last Name
        <input
                    name='lName'
                    type='text'
                    maxLength='15'
                    onChange={onInputChange}
                    value={values.lName}
                />
            </label>
            <label>Email
        <input
                    name='email'
                    type='email'
                    maxLength='25'
                    onChange={onInputChange}
                    value={values.email}
                />
            </label>
            <label>Username
        <input
                    name='username'
                    type='text'
                    maxLength='15'
                    onChange={onInputChange}
                    value={values.username}
                />
            </label>
            <label>Password
        <input
                    name='password'
                    type='password'
                    maxLength='15'
                    minLength='7'
                    onChange={onInputChange}
                    value={values.password}
                />
            </label>
        </form >
    )
}