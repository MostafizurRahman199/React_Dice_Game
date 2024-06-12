import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from 'styled-components'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay'




function App() {

const [isGameStarted, setGameStarted] = useState(false);

const toogleGame = ()=>{
  setGameStarted((prev)=> !prev)
}

  return (
    <>
    {
      isGameStarted ? <GamePlay></GamePlay> :
     <StartGame toogle={toogleGame}></StartGame>
    }
    </>
  )
}

export default App


const Button  = styled.button`

background-color:black;
color:white;
padding:10px;

`;
