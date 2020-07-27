import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const StyledHeader = styled.header`
background: pink;
padding: 5px;
border: 5px solid indigo;
display: flex;
flex-direction: row;
justify-content: space-between;
`

const StyledNav = styled.nav`
display: flex;
justify-content: space-evenly;
align-items: center;
border: 5px solid blue;
width: 50%;
background: white;
`


const StyledLogo = styled.img`
width: 5%;
border: 5px solid blue;
`

export default function Header(props){

    return(
        <StyledHeader>
            <StyledNav>
            {/* <nav> will change into Links once completed */}
                <a href="#">Home</a>
                <a>Log In</a>
                <a>Sign Up</a>                             
            </StyledNav>
            <StyledLogo src='http://www.pngmart.com/files/7/Red-Smoke-Transparent-Images-PNG.png' />
        </StyledHeader>
    )

}