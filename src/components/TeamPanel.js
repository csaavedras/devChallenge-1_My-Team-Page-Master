import React from 'react'
import styled from 'styled-components'
import TeamCard from './TeamCard'

function TeamPanel() {
    return (
        <Container>
            <TeamCard/>
        </Container>
    )
}

export default TeamPanel

const Container = styled.div`
  width: 65%;
  
`
