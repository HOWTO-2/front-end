import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import styled, {keyframes} from 'styled-components'

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
// "password": "pistol"
//
// RESPONSE BELOW
//
// "id": 4
// "token": "QpwL5tke4Pnpja7X4"


export default function Signup(props) {

    const { values, inputChange, submit, disabled, errors } = props


    //////////////////┬─┬ ノ( ゜-゜ノ)
    //Helper Functions//┬─┬ ノ( ゜-゜ノ)
    ///////////////////////////////////

    let initialState = {    
      email: "",
      password: ""
    }
  
    const [ newUser, setNewUser ] = useState(initialState)
    const { push } = useHistory();
  
    const handleChange = e => {
      setNewUser({
          ...newUser,
          [e.target.name]: e.target.value
      })
    }
  
    const addUser = e => {
      e.preventDefault();
      axios
      .post("https://reqres.in/api/register", newUser)
      .then(res => {
          console.log('registry successful', res.data)
          push('/login')
      })
      .catch(err => console.log({ err }))
    } 


    return (
        <StyledForm
            onSubmit={addUser}
            >
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <StyledLogo src='http://www.pngmart.com/files/4/Satin-Transparent-Background.png' />
            <StyledText>Sign up and create posts!</StyledText>

            <StyledLabel>Email
                <StyledInput
                    name='email'
                    type='text'
                    maxLength='25'
                    onChange={handleChange}
                    value={newUser.email}
                    />
            </StyledLabel>

            <StyledLabel>Password
                <StyledInput
                    name='password'
                    type='text'
                    maxLength='15'
                    onChange={handleChange}
                    value={newUser.password}
                    />
            </StyledLabel>
            <br></br>
            <StyledButton > Sign Up </StyledButton>

        </StyledForm >
    )
}