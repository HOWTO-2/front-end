import React, { useEffect } from 'react'
import styled from 'styled-components'
import formSchemaCard from './Validation/FormSchemaCard'

import Logo from './Logo'

const StyledAddForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
width: 27%;


padding: 16px;
color: white;
font-size: 1.3rem;
text-align: center;
background: url('https://images.unsplash.com/photo-1557683311-eac922347aa1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2030&q=80');
border-radius: 20% 20%;
h2{
}
input {
    display: flex;
    color: white;
    font-size: 2rem;
    background: black;
    border-radius: 10px;
    border: 1px solid gray;
    }
#stepsInput{
    display: flex;
}
button{
    color: white;
    background: violet;
    width: 40%;
    padding: 5px;
    border-radius: 15px;
    &:hover{
        cursor: pointer;
        background: gold;
    }
}
`

export default function AddHowToForm(props){
    const { 
        values, 
        setValues, 
        inputChange, 
        submit, 
        disabled, 
        setDisabled, 
        errors } = props

    const onInputChange = e =>{ 
        const { name, value } = e.target
        inputChange(name, value, values, setValues, formSchemaCard)
    }

    const onSubmit = e =>{
        e.preventDefault()
        submit()
    }

    useEffect(() => {
        formSchemaCard.isValid(values).then(valid => {
          setDisabled(!valid)
        })
      }, [values])

    return(
        <StyledAddForm
            onSubmit={onSubmit}
        >
            <div>{errors.title}</div>
            <div>{errors.author}</div>
            <div>{errors.topic}</div>
            <div>{errors.steps}</div>

            <Logo />

            <h2>Create a How To</h2>
            <label>Title of your How To
                <input
                    value={values.title}
                    name='title'
                    type='text'
                    onChange={onInputChange}
                    />
            </label>

            <label>Your name
                <input
                    value={values.author}
                    name='author'
                    type='text'
                    onChange={onInputChange}
                />
            </label>
            
            <label>Topic
                <input
                    value={values.topic}
                    name='topic'
                    type='text'
                    onChange={onInputChange}
                />
            </label>

            <label>Explain your idea in steps
                <input
                    id='stepsInput'
                    value={values.steps}
                    name='steps'
                    type='text'
                    onChange={onInputChange}
                />
            </label>
            <br></br>
            <button disabled={disabled}> Create </button>
        </StyledAddForm>
    )
}