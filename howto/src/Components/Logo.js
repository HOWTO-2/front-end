import React from 'react'
import styled from 'styled-components'
import media from '../Media'

const StyledLogo = styled.img`
width: 12%;
border: 5px solid cyan;
border-radius: 50% 50%;
background: teal;
padding: 3px;
${media.large`
    background: violet;
`}

`

export default function Logo(){
    return(
        <StyledLogo src='http://www.pngmart.com/files/4/Satin-Transparent-Background.png' alt='butterfly' />
        )
}