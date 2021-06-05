import React from 'react'
import styled from 'styled-components'
import TeamCard from './TeamCard'

function TeamPanel() {
    return (
        <Container>
            <FirtContainer>
                <TeamCard className="card1" />
                <TeamCard className="card1" />
            </FirtContainer>
            <SecondsContainer>
                <TeamCard className="card1" />
                <TeamCard className="card1" />
            </SecondsContainer>
            <FirtContainer>
                <TeamCard className="card1" />
                <TeamCard className="card1" />
            </FirtContainer>
        </Container>
    )
}

export default TeamPanel

const Container = styled.div`
  width: 65%;
  /* margin: 5% auto; */
  display: flex;
  justify-self: center;
  align-self: center;
  margin: 5% 25px;
  justify-content: space-between;
  
`

const FirtContainer = styled.div`

`

const SecondsContainer = styled.div`
    margin-top: 8%;
`