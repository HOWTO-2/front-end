import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: maroon;
width: 15%;
padding: 10px;
border: 5px solid red;
`

const StyledText = styled.h2`
border: 2px solid green;
text-align: center;
color: teal;
`

const StyledLabel = styled.label`
display: flex;
flex-direction: column;
align-items: center;
font-size: 1rem;
color: yellow;
background: purple;
border: 5px solid white;
`

const StyledInput = styled.input`
color: red;
background: blue;
border: 5px solid green;
&:hover{
    background: black;
}
`

const StyledButton = styled.button`
color: cyan;
background: orange;
border: 5px solid pink;
border-radius: 10px;
`


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
        <StyledForm
            onSubmit={onSubmit}
        >
            <div>{errors.email}</div>
            <div>{errors.password}</div>

            <StyledText>Sign up and create posts!</StyledText>

            <StyledLabel>First Name
                <StyledInput
                        name='fname'
                        type='text'
                        maxLength='15'
                        onChange={onInputChange}
                        value={values.fname}
                    />
            </StyledLabel>
            <StyledLabel>Last Name
        <StyledInput
                    name='lname'
                    type='text'
                    maxLength='15'
                    onChange={onInputChange}
                    value={values.lname}
                />
            </StyledLabel>
            <StyledLabel>Email
                <StyledInput
                    name='email'
                    type='email'
                    maxLength='25'
                    onChange={onInputChange}
                    value={values.email}
                />
            </StyledLabel>
            <StyledLabel>Username
                <StyledInput
                    name='username'
                    type='text'
                    maxLength='15'
                    onChange={onInputChange}
                    value={values.username}
                />
            </StyledLabel>
            <StyledLabel>Password
                <StyledInput
                    name='password'
                    type='password'
                    maxLength='15'
                    minLength='7'
                    onChange={onInputChange}
                    value={values.password}
                />
            </StyledLabel>
            <br></br>
            <StyledButton disabled={disabled}> Sign Up </StyledButton>
        </StyledForm >
    )
}