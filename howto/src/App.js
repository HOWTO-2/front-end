import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as yup from 'yup'


// COMPONENT IMPORTS
import Header from './Components/Header'
import HowToCard from './Components/HowToCard'
import Signup from './Components/Signup'
import formSchema from './Components/Validation/FormSchema'

import styled from 'styled-components'

const StyledCardsDiv = styled.div`
display:flex;
flex-direction: column;
align-items: center;
h2{
  font-size: 2rem;
}
`

const StyledBody = styled.body`
background: purple;
display: flex;
flex-direction: column;
width: 100%;
`

const StyledTopDiv = styled.div`
background: url('https://upload.wikimedia.org/wikipedia/commons/8/86/Alongtheriver_QingMing.jpg');
background-position: center;
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
border: 10px solid cyan;
`
const StyledUpperTopDiv = styled.div`
display: flex;
justify-content: center;
font-size: 4rem;
color: yellow;
border: 1px solid white;
width: 40%;
`

const StyledLowerTopDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
border: 2px solid black;
width: 95%;
`

const StyledList = styled.ul`
font-size: 2rem;
display: flex;
flex-direction: column;
justify-content: center;
width: 20%;
border: 2px solid yellow;
li {
  color: white;
  margin: 3%;
}
`

const StyledLogo = styled.img`
width: 60%;
border: 5px solid blue;
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


function App() {
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
    postNewUser(newUser)
  }

  const submitCard = () => {
    const newCard = {
      username: howToFormValues.username.trim(),
      topic: howToFormValues.topic.trim(),
      steps: howToFormValues.steps.trim(),
    }
    postNewCard(newCard)
  }


  ////////////////////////////////////
  ////////////WHATEFFECT///////////////
  ///////////////////////////////////
  useEffect(() => {
    getCards()
  }, [])

  useEffect(() => {
    formSchema.isValid(signUpFormValues).then(valid => {
      setDisabled(!valid)
    })
  }, [signUpFormValues])

  return (
    <StyledBody>
      <Header />
      <StyledTopDiv>

        <StyledUpperTopDiv>
          <h1>How To</h1>
        </StyledUpperTopDiv>

        <StyledLowerTopDiv>
          <Signup
            values={signUpFormValues}
            inputChange={inputChange}        
            submit={submitUser}
            disabled={disabled}
            errors={formErrors} 
            />
          <StyledList>
            <li>Is Useful</li>
            <li>Learn whatever</li>
            <li>Fun and simple to use</li>
            <li>Share your life hacks</li>
            <li>You should use it</li>
          </StyledList>
          <StyledLogo src='http://www.pngmart.com/files/7/Red-Smoke-Transparent-Images-PNG.png' />
        </StyledLowerTopDiv>

      </StyledTopDiv>

      <StyledCardsDiv>
          <h2>Popular How To's!</h2>
          {howToCards.map(card=>{
            return(
            <HowToCard key={card.id} card={card}/>
            )
          })}
      </StyledCardsDiv>
    </StyledBody>
  );
}

export default App;
