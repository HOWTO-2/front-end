import React, { useState } from 'react'
// import axios from 'axios'
import styled from 'styled-components'
import { axiosWithAuth } from '../Utils/axiosWithAuth'
import { useHistory } from 'react-router-dom'

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
`

const StyledLogo = styled.img`
width: 12%;
border: 5px solid cyan;
border-radius: 50% 50%;
background: teal;
padding: 3px;
`

// example provided on reqres.in website
// MUST USE EXAMPLE USERS TO REGISTER AND LOGIN!
//
// "email": "eve.holt@reqres.in",
// "password": "cityslicka"
//
// RESPONSE BELOW
//
// "token": "QpwL5tke4Pnpja7X4"

const Login = (props) => {

    let initialState = {
        email: "",
        password: ""
      }
    

    const { values, inputChange, disabled, errors } = props

    const [ userLogin, setUserLogin ] = useState(initialState);
    const { push } = useHistory();
    
    const handleChange = e => {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
      }
    
    const login = (e) => {
        e.preventDefault();
        // make a post request to the login page
        axiosWithAuth()
            .post("/api/login", userLogin)
            .then((res) => {
                console.log('IF YOU SEE THIS THE LOGIN WORKED', res);
                localStorage.setItem('token', res.data.payload);
                push('/user/create/protected');
            })
            .catch((err) => console.log({ err }));
    };

    return (
        <StyledForm
        onSubmit={login}
        >
      
            <StyledLogo src='http://www.pngmart.com/files/4/Satin-Transparent-Background.png' />
            <h2>Welcome Back!</h2>
            <StyledLabel>Username
                <StyledInput
                    name='email'
                    type='text'
                    value={userLogin.email}
                    onChange={handleChange}
                />
            </StyledLabel>

            <StyledLabel>Password
                <StyledInput
                name='password'
                type='password'
                value={userLogin.password}
                onChange={handleChange}
            />
            </StyledLabel>
            <br></br>
            <StyledButton> Log In </StyledButton>
        </StyledForm>
        
    )
}
export default Login;