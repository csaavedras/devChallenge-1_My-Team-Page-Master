import React from 'react'
import styled from 'styled-components'

function TeamCard() {
    return (
        <Container>
            <img src="assets\images\photo1.png" alt="image team people" />
            <h3>Bill Mahoney</h3>
            <p>Product owner</p>
        </Container>
    )
}

export default TeamCard

const Container = styled.div`
   width: 264px;
   height: 383px;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-template-rows: repeat(3, 1fr);

   img {
       width: 238px;
       height: 341px;
       grid-column: 1 / 3;
       grid-row: 1 / 3;
   }
   h3 {
       grid-column: 1 / 3;
       grid-row: 3 / 3;
       align-self: flex-end;
       font-family: 'PT Serif', serif;
       font-weight: 700;
       font-size: 1.25rem;
   }
   p {
      transform: rotate(90deg);
      text-transform:uppercase;
      font-family: 'PT Serif', serif;
      font-weight: 400;
      font-size: 0.85rem;
      grid-column-start: 3;
      grid-row: 1;
      justify-self: flex-start;

   }
`