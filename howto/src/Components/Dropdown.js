import React from 'react'
import styled, { keyframes } from 'styled-components'

const kfCategories = keyframes`
10%{
  color: teal;
}
20%{
  color: lightblue;
  background: indigo;
}
30%{
  color: lavender;
  background: teal;
}
40%{
  color: black;
  background: pink;
}
50%{
  color: magenta;
  background: white;
}

60%{
  color: teal;
}
70%{
  color: lightblue;
  background: indigo;
}
80%{
  color: lavender;
  background: teal;
}
90%{
  color: white;
  background: violet;
}
100%{
  color: black;
  background: white;
}
`

const StyledDropdown = styled.form`
select{
    color: white;
    font-size: 1.3rem;
    background: black;
    border: 0px solid silver;
    &:hover{
      cursor: pointer;
    }
    option{
      font-size: 1.3rem;
      color: white;
      animation: ${kfCategories} 50s ease-in-out forwards;
    }
  }
`
export default function Dropdown(){
    return(
        <StyledDropdown>
              <select>
                <option disabled='disabled' selected='selected'>Select a Category</option>
                <option>Home and Living</option>
                <option>Business</option>
                <option>Health</option>
                <option>Educational</option>
              </select>
        </StyledDropdown>
    )
}
