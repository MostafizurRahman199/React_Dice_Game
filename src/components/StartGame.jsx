import React from 'react';
import styled from 'styled-components';
import { Button } from './staled/Button';

function StartGame({toogle}) {
    console.log(toogle);
  return (
   <Container>
   <div>
        <img src="/homepic.png" alt="home_dice_pic" />
   </div>
    <div className='content'>
        <h1>Dice Game</h1>
        <Button onClick={toogle}>Play Now</Button>

    </div>
   </Container>
  )
}

export default StartGame;

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    height: 100vh;
    align-items: center;

    .content{
        h1{
            font-size: 96px;
            white-space: nowrap;

        }
    }
`

