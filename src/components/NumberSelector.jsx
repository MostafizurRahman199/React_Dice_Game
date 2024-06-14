import React, { useState } from 'react'
import styled from 'styled-components'


export default function NumberSelector({setError, error, selectedNumber, setSelectedNumber}) {
    
    const array = [1,2,3,4,5,6];
   
    console.log("Selected Number : "+selectedNumber);

    const numberSelectorHandelar = (num)=>{
        setSelectedNumber(num);
        setError("");

    }
  return (
    <NumberSelectorContainer>
        <p className='error_msg'>{error}</p>
       <div className='number_inner_div'>
            {array.map((num)=>(
                    <Box key={num} onClick={()=>numberSelectorHandelar(num)} isSelected={num === selectedNumber}> {num}</Box>
            ))}
       </div>

      <div>
      <p className='select_number'>Select Number</p>
      </div>
    </NumberSelectorContainer>
  )
}


const Box = styled.div`

    width: 72px;
    height: 72px;
    border: 1px solid black;
    font-weight: 700;
    font-size: 24px;
    /* text-align: center; */
    display: grid;
    /* justify-content: center; */
    place-items: center;
    background-color: ${(props)=> props.isSelected ? "black" : "white"};
    color: ${(props)=> props.isSelected ? "white" : "black"};
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        border-radius: 10px;
        transition: 0.3s;
    }
  
`


const NumberSelectorContainer = styled.div `

        display: flex;
        flex-direction: column;
        align-items: end;
        gap: 30px;

 .error_msg{
    color: red;
    height: 4px;
 }

    .number_inner_div{
       display :flex ;
       gap: 24px;
       max-width: 552px;
       /* height: 138px; */
       cursor: pointer;

   
    }

   

    .select_number{
        font-size: 24px;
        font-weight: 700;
       
    }
`
