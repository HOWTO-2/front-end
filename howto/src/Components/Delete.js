import React from 'react'
import styled from 'styled-components'

const StyledDelete = styled.button`
background: red;
color: black;
font-size: 5rem;
width: 75%;
padding: 88px;
margin: 7%;
border: 1px solid red;
border-radius: 20px;
&:hover{
    color: red;
    cursor: pointer;
    border: 1px solid black;
    box-shadow: 0px 0px 100px 10px;
    background: url('https://i.giphy.com/media/3oEhmP1i8wzdgx2vrW/source.gif')
    
}
`

export default function Delete(props){
    const { disabled } = props

    return(
        <StyledDelete>Delete Me</StyledDelete>
    )
}