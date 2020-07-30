import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {useParams, useHistory} from 'react-router-dom'
import axios from 'axios'
import { updateHowto } from './Store/actions/action'
import { connect } from "react-redux"; 

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

const intialState = {
    email: '',
    first_name: '',
    last_name: ''
}

function EditHowToForm(props){
    const params = useParams();
    
    const [thisUser, setThisUser] = useState(intialState)

    const fetchHowto = ()=>{
        axios
        .get(`https://reqres.in/api/users/${params.id}`)
        .then(res=>{console.log(res)
            setThisUser(res.data.data)
        })
        .catch(err=>{console.log(err)})
    }

    useEffect(()=>{
        fetchHowto()
    },[])

    const { inputChange, submit, disabled, errors } = props

    const onInputChange = e =>{ 
        setThisUser(
            {
                ...thisUser,
                [e.target.name]: e.target.value
            }
        )
    }
    const { push } = useHistory();
    const onSubmit = e =>{
        e.preventDefault()
        props.updateHowto(thisUser)
        
        //push('/')
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
                    name='first_name'
                    type='text'
                    onChange={onInputChange}
                    value = {thisUser.first_name}
                    />
            </label>

            <label>Name
                <input
                    name='last_name'
                    type='text'
                    onChange={onInputChange}
                    value = {thisUser.last_name}
                />
            </label>
            
            <label>Topic
                <input
                    name='email'
                    type='text'
                    onChange={onInputChange}
                    value = {thisUser.email}
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
const mapStateToProps = state => {
    return {
      howto: state.howto,
      isloading: state.isloading,
      error: state.error
    };
  };
export default connect(mapStateToProps,{updateHowto})(EditHowToForm)