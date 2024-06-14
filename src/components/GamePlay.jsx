import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";

function GamePlay() {
    
  const [score, setScore] = useState();
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const diceRole = () => {
    let randomNumber = generateRandomNumber(1, 7);
    console.log(randomNumber);
    setCurrentDice((prev) => randomNumber);
  };

  return (
    <Main>
      <div className="top_section">
        <TotalScore></TotalScore>
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        ></NumberSelector>
      </div>
      <RoleDice currentDice={currentDice} diceRole={diceRole}></RoleDice>
    </Main>
  );
}

export default GamePlay;

const Main = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
`;
