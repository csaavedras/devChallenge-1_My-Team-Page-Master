import './App.css';
import Header from './components/Header'
import TeamPanel from './components/TeamPanel'
import styled from 'styled-components'

function App() {
  return (
    <Container>
      <Header />
      <TeamPanel/>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`