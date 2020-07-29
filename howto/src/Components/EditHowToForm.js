import React from 'react'
import styled from 'styled-components'

const StyledAddForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
width: 30%;
margin: 20px;;
padding: 30px;

color: white;
font-size: 1.3rem;
text-align: center;
background: black;
border-radius: 20% 20%;
h2{
   
}
input {
    display: flex;
    color: lightblue;
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
    background: green;
    width: 40%;
    padding: 5px;
    border-radius: 15px;
}
`

export default function EditHowToForm(props){
    const { inputChange, submit, disabled, errors } = props

    const onInputChange = e =>{ 
        const { name, value } = e.target
        inputChange(name, value)
    }

    const onSubmit = e =>{
        e.preventDefault()
        //submit()
    }

    return(
        <StyledAddForm
            onSubmit={onSubmit}
        >
            <div>{errors.title}</div>
            <div>{errors.author}</div>
            <div>{errors.topic}</div>
            <div>{errors.steps}</div>

            <h2>Edit this How To</h2>
            <label>Title
                <input
                    name='title'
                    type='text'
                    onChange={onInputChange}
                    />
            </label>

            <label>Name
                <input
                    name='author'
                    type='text'
                    onChange={onInputChange}
                />
            </label>
            
            <label>Topic
                <input
                    name='topic'
                    type='text'
                    onChange={onInputChange}
                />
            </label>

            <label>Steps
                <input
                    id='stepsInput'
                    name='steps'
                    type='text'
                    onChange={onInputChange}
                />
            </label>
            <br></br>
            <button disabled={disabled}> Confirm Changes </button>
        </StyledAddForm>
    )
}