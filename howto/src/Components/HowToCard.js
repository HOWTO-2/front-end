import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { useLocation, useParams, useHistory } from "react-router-dom";

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
    flex-direction: column;
    align-items: center;
    padding: 1px;
    .editLink{
        color: purple;
        &:hover{
            color: violet;
        }
    }
}
`


export default function HowToCard({ card }) {
    console.log('////////////', card.id)
    if (!card) {
        return <h2>Finding Cards</h2>
    }
    return (
        //////////sample PLEASE CHANGE VALUES WHEN ENDPOINT UPDATED////////
        <StyledCard>
            <h2>Title</h2>
            <img src='https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2014&q=80'/>
            
            <div className='cardbottomdiv'>
            <p className='cardText'>Author: {card.first_name}{card.last_name}</p>
            <p className='cardText'>Topic: {card.email}</p>
            <p className='cardText'>Guide: {card.avatar}</p>
            <div className='cardEdit'>
<<<<<<< HEAD
                <Link to={`/user/edit/${card.id}`}className='editLink'>Edit</Link>
                <button >Delete</button>
=======
                <Link to={`/user/edit/${card.id}`} className='editLink'>Edit</Link>
                <button>Delete</button>
>>>>>>> f77ba59049e4dc0eb1c9152e5527ca98ba2377dc
            </div>
            </div>
        </StyledCard>
    )
}