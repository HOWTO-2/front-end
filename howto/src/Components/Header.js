import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const StyledHeader = styled.header`
background: black;
color: white;
padding: 4px;
display: flex;
flex-direction: row-reverse;
justify-content: space-between;
`

const StyledNav = styled.nav`
display: flex;
justify-content: space-evenly;
align-items: center;
font-size: 1rem;
font-weight: bold;
width: 18%;
#loginlink{
    background: orange;
    border-radius: 13px;
    &:hover{
        background: white;
        color: orange;
    }
}
.navlink {
    padding: 13px;
    color: white;
    &:hover {
        border-radius: 13px;
        background: teal;
    }
}
`

const StyledHowTo = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
width: 15%;
font-size: 1rem;
color: purple;
.navlink{
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 6px 5px;
    border-radius: 13px;
    color: purple;
    &:hover{
        color: white;
    }
}
`


const StyledLogo = styled.img`
width: 17%;
border: 5px solid cyan;
border-radius: 50% 50%;
background: teal;
padding: 3px;
`


export default function Header(props){

    return(
        <StyledHeader>
            <StyledNav>
            {/* <nav> will change into Links once completed */}
                {/* <Link to='/user/create' className='navlink'>Create</Link> */}
                <Link to='/' className='navlink'>Home</Link>
                    {'|'}
                <Link to='/signup' className='navlink'>Sign Up</Link> 
                    {'|'}
                <Link to='/login' className='navlink' id='loginlink'>Log In</Link>                        
            </StyledNav>

            <StyledHowTo>
                <StyledLogo src='http://www.pngmart.com/files/4/Satin-Transparent-Background.png' />
                <h3>How To</h3>
                {'|'}
                <Link to='/user/create' className='navlink'>Create</Link>
            </StyledHowTo>
        </StyledHeader>

    )

}