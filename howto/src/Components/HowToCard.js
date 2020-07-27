import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
color: indigo;
background: gold;
width: 35%;
margin: 25px;
border: 5px solid green;
border-radius: 10px;
img {
    width: 60%;
}
`

export default function HowToCard({ card }) {
    if (!card) {
        return <h2>Finding Cards</h2>
    }

    return (
        //////////sample PLEASE CHANGE VALUES WHEN ENDPOINT UPDATED////////
        <StyledCard>
            <h2>Title</h2>
            <img src='https://static01.nyt.com/images/2018/10/04/magazine/04blackhole1/04blackhole1-superJumbo-v3.jpg'/>
            <p>Author:{card.first_name}{card.last_name}</p>
            <p>Topic:{card.email}</p>
            <p>Guide:{card.avatar}</p>
        </StyledCard>
    )
}