import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {postHowto} from './Store/actions/action'

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
const initialState = {
    first_name: '',
    last_name: '',
    email: ''
}

function AddHowToForm(props){
    const { inputChange, submit, disabled, errors } = props
    const [state, setState] = useState(initialState)

    // const onInputChange = e =>{ 
    //     const { name, value } = e.target
    //     inputChange(name, value)
    // }
    const onInputChange = e =>{ 
        e.persist();
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }
    const onSubmit = e =>{
        e.preventDefault()
        const newUser = {
            first_name: state.first_name,
            last_name: state.last_name,
            email: state.email
        }
        props.postHowto(newUser)
    }

    return(
        <StyledAddForm
            onSubmit={onSubmit}
        >
            <div>{errors.title}</div>
            <div>{errors.author}</div>
            <div>{errors.topic}</div>
            <div>{errors.steps}</div>

            <h2>Create a How To</h2>
            <label>Title of your How To
                <input
                    name='first_name'
                    type='text'
                    onChange={onInputChange}
                    value={state.first_name}
                    />
            </label>

            <label>Your name
                <input
                    name='last_name'
                    type='text'
                    onChange={onInputChange}
                    value={state.last_name}
                />
            </label>
            
            <label>Topic
                <input
                    name='email'
                    type='text'
                    onChange={onInputChange}
                    value={state.email}
                />
            </label>

            <label>Explain your idea in straightforward steps
                <input
                    id='stepsInput'
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
const mapStateToProps = state => {
    return {
      howto: state.howto,
      isloading: state.isloading,
      error: state.error
    };
  };
export default connect(mapStateToProps,{postHowto})(AddHowToForm)