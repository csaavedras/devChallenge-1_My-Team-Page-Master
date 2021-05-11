import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Container>
            <Content>
                <h1>The creative crew</h1>
                <div class="content__text">
                    <h2>Who we are</h2>
                    <p>We are team of creatively diverse.  driven.  innovative individuals working in various locations from the world.</p>
                </div>
            </Content>
        </Container>
    )
}

export default Header

const Container = styled.div`
   margin-top: 60px;
   display: flex;
   justify-content: center;
   align-content: center;
`

const Content = styled.div`
   display: flex;
   justify-content: space-between;
   width: 65%;

   h1 {
       font-size: 2rem;
       font-family: 'PT Serif', serif;
       font-weight: 700;
       width: 50%;
       align-self: center;
   }
   
   .content__text {
       display: flex;
       flex-direction: column;
       font-family: 'Poppins', sans-serif;
       width: 50%;

       h2 {
        padding-top: 40px;
        text-transform:uppercase;
        font-size: 1.1rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        }
       p {
        margin-top:0;
        font-size: 1.1rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        padding-right: 1rem;
        }
   }

`