import React, { useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import formSchemaLogin from'./Validation/FormSchemaLogin'
import Logo from './Logo'
import media from '../Media'

const StyledForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
background: black;
color: white;
width: 20%;
text-align: center;
padding: 30px;
margin: 25px;
border: 1px solid pink;
border-radius: 20% 20%;
box-shadow: 0px 0px 80px 5px;
input{
    font-size: 1.3rem;
    background: black;
    color: lightblue;
}
h2 {
    color: white;
}
${media.large`
    background: url('https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2030&q=80');
    width: 30%;
    padding: 100px;
    border: none;
    box-shadow: none;
    button{
        color: white;
        background: violet;
    }
`}

`

const StyledLabel = styled.label`
display: flex;
flex-direction: column;
align-items: center;
font-size: 1rem;
color: white;
margin: 30px;
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

const StyledLogo = styled.img`
width: 12%;
border: 5px solid cyan;
border-radius: 50% 50%;
background: teal;
padding: 3px;
${media.large`
    background: violet;
    width: 25%;
`}

`

export default function Login(props) {
    const { 
        values,
        initial,
        setValues, 
        inputChange, 
        disabled, 
        setDisabled, 
        errors } = props

    const onInputChange = e => {
        const { name, value } = e.target
        inputChange(name, value, values, setValues, formSchemaLogin)
    }

    const submitLogin = () => {
        axios.get(`https://reqres.in/api/users?${values.username}`)
        .then(res =>{
            console.log('Backend works here', res.data.data)
        })
        .catch(err =>{
            debugger
        })
        setValues(initial)
      }

      const onSubmit = e => {
        e.preventDefault()
        submitLogin()
    }

    useEffect(() => {
        formSchemaLogin.isValid(values).then(valid => {
          setDisabled(!valid)
        })
      }, [values])

    return (
        <StyledForm
            onSubmit={onSubmit}
            >

            <div>{errors.username}</div>
            <div>{errors.password}</div>
      
            <h2>Welcome Back!</h2>
            <Logo />
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
                onChange={onInputChange}
                value={values.password}       
                />
            </StyledLabel>
            <br></br>
            <StyledButton disabled={disabled}> Log In </StyledButton>
        </StyledForm>
        
    )
}