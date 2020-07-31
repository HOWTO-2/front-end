import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as yup from 'yup'
import { Route } from 'react-router-dom'



// COMPONENT IMPORTS
import Header from './Components/Header'

import Signup from './Components/Signup'
import formSchema from './Components/Validation/FormSchema'
import Login from './Components/Login'
import HowToCards from './Components/HowToCards'


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

// const initialLogIn = {
//   username: '',
//   password: ''
// }

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

  // const postNewCard = newCard => {
  //   axios.post('https://reqres.in/api/users', newCard)
  //     .then(res => {
  //       setHowToCards([res.data, ...howToCards])
  //       setHowToFormValues(initialHowToForm)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

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

  // const submitCard = () => {
  //   const newCard = {
  //     username: howToFormValues.username.trim(),
  //     topic: howToFormValues.topic.trim(),
  //     steps: howToFormValues.steps.trim(),
  //   }
  //   postNewCard(newCard)
  // }


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
    <div>
      <Header />
      <Route exact path='/'>
        <HowToCards howToCards={howToCards} />
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
      <Route path='/login'>
        <Login />
      </Route>
    </div>
  );
}

export default App;
// {howToCards.map(card => {
//   return (
//     <HowToCard key={card.id} card={card} />
//   )
// })}