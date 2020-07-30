import React from 'react'
import styled from 'styled-components'

const StyledLogo = styled.img`
width: 12%;
border: 5px solid cyan;
border-radius: 50% 50%;
background: violet;
padding: 3px;
`

export default function Logo(){
    return(
        <StyledLogo src='http://www.pngmart.com/files/4/Satin-Transparent-Background.png' alt='butterfly' />
        )
}