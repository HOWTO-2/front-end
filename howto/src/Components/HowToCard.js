import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

import media from '../Media'

const kfCard = keyframes`
100%{
    box-shadow: 0px 3px 30px 1px; 
}
`

const StyledCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
color: black;
background: url(
    'https://images.unsplash.com/photo-1521729839347-131a32f9abcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1932&q=80'
);
width: 35%;
margin: 25px;
border: 1px solid black;
border-radius: 50px 50px 10px 10px;
h2{
    color: white;
    background: black;
    width: 100%;
    text-align: center;
    border: 1px solid black;
    border-radius: 20px 20px 0px 0px;
}
img {
    width: 45%;
}
.cardbottomdiv{
    background: black;
    width: 100%;
    border-radius: 0px 0px 10px 10px;
}
.cardText{
    color: white;
}
&:hover{
    color: violet;
    animation: ${kfCard} 0.5s ease-in-out forwards;
    cursor: pointer;
}
.cardEdit{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1px;
    color: purple;
    .cardLink{
        color: purple;
        padding: 10px;
        &:hover{
            color: violet;
        }
    }
}
${media.large`
    width: 42%;
    padding: 100px;
    h2{
        background: none;
        border: none;
    }
    img{
        
    }
    .cardbottomdiv{
        border-radius: 10px;
        width: 120%;
    }
`}
${media.medium`
    .cardbottomdiv{
        width: 148%;
    }
`}
${media.small`
    .cardbottomdiv{
        width: 200%;
    }
`}

`


export default function HowToCard({ card }) {
    if (!card) {
        return <h2>Finding Cards</h2>
    }

    return (
        //////////sample PLEASE CHANGE VALUES WHEN ENDPOINT UPDATED////////
        <StyledCard>
            <h2>Title</h2>
            <img src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2014&q=80' alt='Design for How To Guide'/>
            
            <div className='cardbottomdiv'>
            <p className='cardText'>Author: {card.first_name}{card.last_name}</p>
            <p className='cardText'>Topic: {card.email}</p>
            <p className='cardText'>Guide: {card.avatar}</p>
            <div className='cardEdit'>
                <Link to='/user/edit' className='cardLink'>Edit</Link>
                {'|'}
                <Link to='/user/delete' className='cardLink'>Delete</Link>
            </div>
            </div>
        </StyledCard>
    )
}