import React from 'react';
import styled from 'styled-components';

const TotalScore = ({score, tryGame}) => {
  return (
    <ScoreContainer>
           <div> <h1>{score}</h1>
           <p>{score < 0 ? "😭" :"🥰" }Total Score</p></div>

           <div>
           <h1>{tryGame}</h1>
           <p>😺Total Try</p>
           </div>
    </ScoreContainer>
  )
}

export default TotalScore;

const ScoreContainer = styled.div`
        text-align: center;
        max-width: 135px;
        display: flex;
        gap: 50px;
    h1{
        font-size: 100px;
        line-height: 100px;
    }

    p{
        font-size: 24px;
        font-weight: 500;
        white-space: nowrap;
    }
`