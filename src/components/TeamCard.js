import React from 'react'
import styled from 'styled-components'

function TeamCard() {
    return (
        <Container>
            <div className="imgContainer">
                <img src="assets\images\photo1.png" alt="image team people" />
                <p>Product owner </p>
            </div>
            <h3>Bill Mahoney</h3>
        </Container>
    )
}

export default TeamCard

const Container = styled.div`
   width: 230px;
   height: 333px;
   .imgContainer {
       display: flex;
   }

   img {
       width: 80%;
       height: auto;
   }
   h3 {
       align-self: flex-end;
       font-family: 'PT Serif', serif;
       font-weight: 700;
       font-size: 1.25rem;
       padding: 0;
       margin: 0;
   }
   p {
       font-size: .7rem;
       font-weight: 400;
       font-family: 'PT Serif', serif;
       text-transform: uppercase;
       transform-origin: top right;
       transform: rotate(90deg);
       position: absolute;
       padding-left: 115px;
       margin-top: 96px;
   }
  

`