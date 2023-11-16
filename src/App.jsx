import { useState } from 'react'
import './App.css'
import NavBar from './component/NavBar/NavBar';
import Container from './component/Container/Container';

function App() {
  const [count,] = useState(0)
  console.log(count);
  return (
    <>
      <NavBar></NavBar>
      <Container></Container>
    </>
  )
}

export default App
