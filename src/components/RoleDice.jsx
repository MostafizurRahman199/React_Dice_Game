import React, { useState } from 'react'
import styled from 'styled-components'

export default function RoleDice({currentDice, diceRole}) {






  return (
    <DiceContainer>
        <div className='dice_div' onClick={()=>{diceRole()}}>
            <img className='.image_dice' src={`/public/dice_${currentDice}.png`} alt="" />
        </div>
        <p>Click to Dice to Roll</p>
    </DiceContainer>
  )
}


const DiceContainer = styled.main`
display: flex;
flex-direction: column;
align-items: center;
margin-top:48px;

.dice_div{
    cursor: pointer;
   
    
}

.dice_div img:hover{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 20px;
    transition: 0.3s;
}


p{
    font-size: 24px;
}
`
