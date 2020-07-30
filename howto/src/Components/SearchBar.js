import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import styled from 'styled-components'

const StyledSearchBarDiv = styled.div`
input{
    font-size: 1.5rem;
      border-radius: 6px;
      background: violet;
      color: black;
      border: 1px solid black;
}
`


const initialSearchBarValue = 'Search...'

export default function SearchBar(props){
    const { 
        // cards, 
        // setCards, 
        getCards } = props

    const [ searchBarValue, setSearchBarValue ] = useState(initialSearchBarValue)

  

      const inputChange = (name, value) =>{
          setSearchBarValue({
              [name]: value
            })
        }
        
        const changeHandler = e =>{
            const { name, value } = e.target 
            // axios.get(`https://reqres.in/api/users?page=${Math.random}`)  //does not appear to actually generate random page number. Always generates same.
            // .then(res =>{
            //     if(value === value){   //filter data by value compared to title/tags, map matches to new array, setCards as new array//
            //         console.log(cards)
            //         setCards(res.data.data)
            //         console.log(res.data.data) //cards is updating every keystroke on searchbar. would be obvious if Math.random worked//
            //     }else{
            //         setCards([])
            //     }
            // })
            // .catch(err =>{
            //     debugger
            // })
            inputChange(name, value)
            console.log(searchBarValue)
        }

    useEffect(() =>{
        getCards()
    }, [])
        
    return(
        <StyledSearchBarDiv>
            <input
                name='search'
                type="text"
                placeholder={initialSearchBarValue}
                onChange={changeHandler}
            />
        </StyledSearchBarDiv>
    )
}