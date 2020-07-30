import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as yup from 'yup'
import {Route} from 'react-router-dom'


//REDUX IMPORTS//
import { connect } from "react-redux"; 
import { postUser, fetchHowto } from './Components/Store/actions/action'

// COMPONENT IMPORTS
import Header from './Components/Header'
import HowToCard from './Components/HowToCard'
import Signup from './Components/Signup'
import formSchema from './Components/Validation/FormSchema'
import Login from './Components/Login'
import SearchBar from './Components/SearchBar'
import AddHowToForm from './Components/AddHowToForm'
import EditHowToForm from './Components/EditHowToForm'

import styled, { keyframes } from 'styled-components'




const StyledCardsDiv = styled.div`
display:flex;
flex-direction: column;
align-items: center;
.cardsHeading{
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background: black;
  width: 100%;
  h1{
    padding: 5px 15px;
    font-size: 1.5rem;
  }
  form{
    select{
      color: white;
      font-size: 1.3rem;
      background: black;
      border: 0px solid silver;
      option{
        font-size: 2rem;
      }
    }
  }
  h3{
    padding: 5px;
    font-size: 1rem;
  }
}
h2{
  font-size: 2rem;
}
`

const StyledBody = styled.div`
background: url(
  'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
);
background-size: cover;
display: flex;
flex-direction: column;
width: 100%;
`

const StyledTopDiv = styled.div`
background: url('https://images.unsplash.com/photo-1595864612598-33be0c23b00f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
background-position: center;
background-size: 1920px 1080px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`
const StyledUpperTopDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 2%;
font-size: 1.5rem;
color: black;
font-family: garamond;
width: 40%;
`

const StyledLowerTopDiv = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
padding: 2%;
width: 95%;
`
const kfLogo = keyframes`
100%{
   background teal;
   color: black;
   border: 1px solid teal;
}
`
const StyledLogo = styled.img`
width: 20%;
border: 1px solid gray;
border-radius: 50% 50%;
margin: 150px 0px 32px 0px;
color: white;
background: none;
padding: 5px;
box-shadow: 0px 0px 80px 1px;
animation: ${kfLogo} 1.3s ease-in-out forwards;
`



/////////////////////////////////(╯°□°）╯︵ ┻━┻
/////Empty Form Structures//////(╯°□°）╯︵ ┻━┻
///////////////////////////////(╯°□°）╯︵ ┻━┻
const initialSignupValue = {
  fName: '',
  lName: '',
  username: '',
  password: '',
  email: '',
}

const initialLogIn = {
  username: '',
  password: ''
}

const initialHowToForm = {
  username: '',
  topic: '',
  steps: '',
}

const initialFormErrors = {
  email: '',
  password: '',

}

const initialDisabled = true
const initialHowtoCards = []
const initialUsers = []


function App(props) {
  /////////////////////////(╯°□°）╯︵ ┻━┻
  //SignUpStates//////////(╯°□°）╯︵ ┻━┻
  ////////////////////////(╯°□°）╯︵ ┻━┻
  const [signUpFormValues, setSignUpFormValues] = useState(initialSignupValue)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [users, setUser] = useState(initialUsers)

  ///////////////////////////////
  //HowToCardStates(╯°□°）╯︵ ┻━┻
  //////////////////////////////
  const [howToCards, setHowToCards] = useState(initialHowtoCards)
  const [howToFormValues, setHowToFormValues] = useState(initialHowToForm)


  ////////////┬─┬ ノ( ゜-゜ノ)
  ////AXIOSREQUESTFUNCTIONS┬─┬ ノ( ゜-゜ノ)
  ////////////////////////////////////////┬─┬ ノ( ゜-゜ノ)
  const getCards = () => {
    axios.get('https://reqres.in/api/users?page=2')
      .then(res => {
        setHowToCards(res.data.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const postNewCard = newCard => {
    axios.post('https://reqres.in/api/users', newCard)
      .then(res => {
        setHowToCards([res.data, ...howToCards])
        setHowToFormValues(initialHowToForm)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUser([res.data, ...users])
        setSignUpFormValues(initialSignupValue)
      })
      .catch(err => {
        console.log(err)
      })
  }
  ////////////////////////////////////////////////
  ////////////AXIOS ENDS HERE/////////////////////
  ///////////////////////////////////////////////

  //////////////FORM HELPER FUNCTIONS START HERE//////
  ///////////////////////////////////////////////////
  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)

      .validate(value)

      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })

      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })

    setSignUpFormValues({
      ...signUpFormValues,
      [name]: value
    })
  }


  const submitUser = () => {
    const newUser = {
      fName: signUpFormValues.fName.trim(),
      lName: signUpFormValues.lName.trim(),
      username: signUpFormValues.username.trim(),
      password: signUpFormValues.password.trim(),
      email: signUpFormValues.email.trim(),
    }
    props.postUser(newUser)
  }

  const submitCard = () => {
    const newCard = {
      title: howToFormValues.title.trim(),
      author: howToFormValues.author.trim(),
      topic: howToFormValues.topic.trim(),
      steps: howToFormValues.steps.trim(),
    }
    postNewCard(newCard)
  }


  ////////////////////////////////////
  ////////////WHATEFFECT///////////////
  ///////////////////////////////////
  useEffect(() => {
    props.fetchHowto()
  }, [])

  useEffect(() => {
    formSchema.isValid(signUpFormValues).then(valid => {
      setDisabled(valid)
    })
  }, [signUpFormValues])

  return (
    <StyledBody>
      <Header />

      <StyledTopDiv>
        
        
        <StyledUpperTopDiv>
          <h1>
            "If you think you can do a thing or think that you can't, you're right." - Henry Ford
          </h1>
        </StyledUpperTopDiv>

        <StyledLowerTopDiv>

          <Route path='/user/edit/:id'>
            <EditHowToForm
              inputChange={inputChange}
              submit={submitCard}
              disabled={disabled}
              errors={formErrors}
            />
          </Route>

          <Route path='/user/create'>  
          {/* A workable link is commented out inside the Header Component */}
            <AddHowToForm
              inputChange={inputChange}
              submit={submitCard}
              disabled={disabled}
              errors={formErrors}
            />
          </Route>

          <Route path='/signup'>
            <Signup
              values={signUpFormValues}
              inputChange={inputChange}        
              submit={submitUser}
              disabled={disabled}
              errors={formErrors} 
              />
          </Route>

          <Route exact path = '/'>
          <StyledLogo src='http://www.pngmart.com/files/4/Satin-Transparent-Background.png'></StyledLogo>
          </Route>

          <Route path ='/login'>
            <Login />
          </Route>

        </StyledLowerTopDiv>

      </StyledTopDiv>
    <Route exact path='/'>
      <StyledCardsDiv>
        
        <div className='cardsHeading'>
          <h1>Popular How To's!</h1>
          
          <form>
            <SearchBar/>
          </form>
          <form>
          <select>
            <option>Select a Category</option>
            <option>Home and Living</option>
            <option>Business</option>
            <option>Health</option>
            <option>Educational</option>
          </select>
          </form>
        </div>
        {props.isLoading && <h2>LOADING...</h2>}
        {props.error && (<p>ERROR {props.error}</p>)}

        {props.howto.length > 0 &&(
          props.howto[0].map(card=>{
            return(
            <HowToCard key={card.id} card={card}/>
            )
          })
        )}

      </StyledCardsDiv>
    </Route>

    </StyledBody>

  
  );
}
const mapStateToProps = state => {
  console.log(state)
  return {
    howto: state.howto,
    isloading: state.isloading,
    error: state.error
  };
};
export default connect(mapStateToProps,{postUser, fetchHowto})(App);
