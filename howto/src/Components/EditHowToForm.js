import React, { useEffect } from 'react'
import styled from 'styled-components'
// import axios from 'axios'
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

export default function EditHowToForm(props){
    const {
        values,
        setValues,
        inputChange,
        submit,
        disabled,
        setDisabled,
        errors,
        // cards,
        // setCards,
        // initial, 
    } = props

    // const getCard = (id) =>{
    //     const myCard = []
    //     axios.get('https://reqres.in/api/users?page=2')
    //     .then(res=>{
    //         res.data.data.map(card =>{
    //             if(card.id === id){
    //                 myCard.push(card)
    //             }
    //         }) 
    //     })
    //     .catch(err =>{
    //         debugger
    //     })
    //     return myCard
    // }

    // function submitIt(){
    //     getCard(7)
    // }

    const onInputChange = e =>{ 
        const { name, value } = e.target
        inputChange(name, value, values, setValues, formSchemaCard)
    }


    // const postEdit = edit =>{
    //     axios.post('https://reqres.in/api/users', edit)
    //     .then(res=>{
    //         // setCards([res.data, ...cards])
    //         setValues(initial)
    //         // setCards({
    //         //     ...cards,
    //         //     [title]: values.title,
    //         //     [author]: values.author,
    //         //     [topic]: values.topic,
    //         //     [steps]: values.steps
    //         // })
    //     })
    //     .catch(err=>{
    //         debugger
    //     })
    // }

    // const submitNewEdit = () =>{
    //     const editedCard = {
    //         title: values.title.trim(),
    //         author: values.author.trim(),
    //         topic: values.topic.trim(),
    //         steps: values.steps.trim(),
    //     }
    //     postEdit(editedCard)
    // }

    const onSubmit = e =>{
        e.preventDefault()
        submit()
        console.log('backend works here')
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

            <h2>Edit this How To</h2>
            <label>Title
                <input
                    value={values.title}
                    name='title'
                    type='text'
                    onChange={onInputChange}
                    />
            </label>

            <label>Name
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

            <label>Steps
                <input
                    value={values.steps}
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