import React, {useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams, useHistory } from 'react-router-dom'
import axios from 'axios'
import { updateHowto, deleteHowto} from './Store/actions/action'
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

const initialState = {
    first_name: '',
    last_name: '',
    email: ''
}

function EditHowToForm(props){
    const params = useParams();
    const { push } = useHistory();
    const [thisUser, setThisUser] = useState(initialState);
    
    const fetchHowToTwo = (id) => {
          axios
          .get(`https://reqres.in/api/users/${id}`)
          .then(res => {
              console.log(res.data.data)
              setThisUser(res.data.data)
          })
          .catch(err => console.log({ err }));
          }

    useEffect(() => {
        fetchHowToTwo(params.id);
    }, [params.id])
    
    const {disabled, errors } = props

    const onInputChange = e =>{ 
        e.persist();
        setThisUser({
            ...thisUser,
            [e.target.name]: e.target.value
        });
    }
    const onSubmit = e =>{
        e.preventDefault()
        props.updateHowto(thisUser)
    }

    const handleDelete = e =>{
        //console.log(props.howto)
        //console.log(thisUser)
        e.preventDefault()
        props.deleteHowto()
    }

    return(
        <>
        <StyledAddForm
            onSubmit={onSubmit}
        >
            <div>{errors.title}</div>
            <div>{errors.author}</div>
            <div>{errors.topic}</div>
            <div>{errors.steps}</div>

            <h2>Edit this How To</h2>
            <label>First Name
                <input
                    name='first_name'
                    type='text'
                    onChange={onInputChange}
                    value = {thisUser.first_name}
                    value={thisUser.first_name}
                    />
            </label>

            <label>Last Name
                <input
                    name='last_name'
                    type='text'
                    onChange={onInputChange}
                    value={thisUser.last_name}
                />
            </label>
            
            <label>Email
                <input
                    name='email'
                    type='text'
                    onChange={onInputChange}
                    value={thisUser.email}
                />
            </label>
            <br></br>
            <button disabled={disabled}> Confirm Changes </button>
        </StyledAddForm>
        <button onClick={handleDelete}>delete</button>
        </>
    )
}
const mapStateToProps = state => {
    console.log(state)
    return {
      howto: state.howto,
      isloading: state.isloading,
      error: state.error
    };
  };
export default connect(mapStateToProps,{updateHowto, deleteHowto})(EditHowToForm);
  
