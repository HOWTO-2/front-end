import React, { useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import formSchemaLogin from'./Validation/FormSchemaLogin'

const StyledForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
background: black;
color: white;
width: 20%;

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
      
            <StyledLogo src='http://www.pngmart.com/files/4/Satin-Transparent-Background.png' alt='butterfly' />
            <h2>Welcome Back!</h2>
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