import React, { useEffect } from 'react'
import styled from 'styled-components'
import formSchema from './Validation/FormSchema'
import Logo from './Logo'
import media from '../Media'

const StyledForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: black;
color: white;
width: 20%;
padding: 30px;
margin: 1px;
border-radius: 20% 20%;
box-shadow: 0px 0px 80px 5px;
${media.large`
    background: url('https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2030&q=80');
    width: 42%;
    padding: 100px;
    box-shadow: none;
    button{
        color: white;
        background: violet;
    }
`}

`

const StyledText = styled.h2`
text-align: center;
color: white;
`

const StyledLabel = styled.label`
display: flex;
flex-direction: column;
align-items: center;
font-size: 1rem;
color: white;
`

const StyledInput = styled.input`
color: lightblue;
background: black;
font-size: 1.3rem;
border: 1px solid gray;
padding: 5px;
border-radius: 10px;
`

const StyledButton = styled.button`
color: white;
background: green;
width: 40%;
padding: 5px;
border-radius: 15px;
&:hover{
    background: gold;
    cursor: pointer;
}
`




export default function Signup(props) {

    const { 
        values, 
        setValues, 
        inputChange, 
        submit, 
        disabled, 
        setDisabled, 
        errors } = props

    //////////////////┬─┬ ノ( ゜-゜ノ)
    //Helper Functions//┬─┬ ノ( ゜-゜ノ)
    ///////////////////////////////////

    const onInputChange = e => {
        const { name, value } = e.target
        inputChange(name, value, values, setValues, formSchema)
    }

    const onSubmit = e => {
        e.preventDefault()
        submit()
    }

    useEffect(() => {
        formSchema.isValid(values).then(valid => {
          setDisabled(!valid)
        })
      }, [values])

    return (
        <StyledForm
            onSubmit={onSubmit}
            >
            <div>{errors.fName}</div>
            <div>{errors.lName}</div>
            <div>{errors.email}</div>
            <div>{errors.username}</div>
            <div>{errors.password}</div>
            <Logo />
            <StyledText>Wecome to How To!</StyledText>

            <StyledLabel>First Name
                <StyledInput
                        name='fName'
                        type='text'
                        maxLength='15'
                        onChange={onInputChange}
                        value={values.fName}
                        />
            </StyledLabel>

            <StyledLabel>Last Name
        <StyledInput
                    name='lName'
                    type='text'
                    maxLength='15'
                    onChange={onInputChange}
                    value={values.lName}
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