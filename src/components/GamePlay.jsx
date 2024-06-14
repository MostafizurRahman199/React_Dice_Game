import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { Button } from "./staled/Button";

function GamePlay() {

  const [error, setError] = useState("");
  const [score, setScore] = useState(0);
  const [tryGame, setTryGame] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const[toggleRules, setToggleRules] = useState(false);


const resetHandle = ()=>{
setScore(0);
setTryGame(0);

}

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const diceRole = () => {

    if(!selectedNumber){
        setError("You have not selected any number!");
        return;
    }

 
    let randomNumber = generateRandomNumber(1, 7);
    console.log(randomNumber);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setTryGame((prev)=>prev + 1);
    setSelectedNumber(undefined)
  };

  return (
    <Main>
      <div className="top_section">
        <TotalScore score={score} tryGame={tryGame}></TotalScore>
        <NumberSelector
        setError={setError}
        error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        ></NumberSelector>
      </div>

      {
        toggleRules && <div className="rules"> 
        <p className="rules_headline">How to play dice game</p>
        <p className="rules details">Select any number <br />
        1. Click on dice image <br />
        2. After click on  dice  if selected number is equal to dice number you will get same point as dice  <br />
        3. If you get wrong guess then  2 point will be dedcuted <br />
        
        </p>
      </div>
      }

    {
        !toggleRules &&   <RoleDice currentDice={currentDice} diceRole={diceRole}></RoleDice>
    }

      <div className="btns">
            <Button onClick={()=>{resetHandle(0)}}>Reset🫡</Button>
            <Button onClick={()=>setToggleRules((prev)=>!prev)}>{toggleRules === false ? "See rules 🤠" : "Off Rules😊"}</Button>
      </div>

    
    </Main>
  );
}

export default GamePlay;

const Main = styled.main`
  padding-top: 10px;

  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }


  .btns{
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    gap: 10px;
    margin-top: 40px;
    align-items: center;
  }

  .rules{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    margin: 0 auto;
    background-color: #FBF1F1;
    border-radius: 4px;
    padding: 10px;
    margin-top: 10px;
  }

  .rules_headline{
    font-size: 24px;
    font-weight: 700;
  }
`;
