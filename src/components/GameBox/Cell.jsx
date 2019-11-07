import React from 'react';
import Zero from "./Zero";
import Cross from "./Cross";
import styled from "styled-components";


const Cell = ({
                internalState, player, ChangeGameState, gameStateArray, coordinate,
                size, GameBoxWidth, GameBoxHeight, countStep, indexI, indexJ,
                colors = 'black',isWin, ...otherProps
              }) => {
  const item = internalState === '0'
    ? <Zero color={colors[0]}/> : internalState === 'X'
      ? <Cross color={colors[1]}/> : <></>;
  let CellWidth = GameBoxWidth / size - 2;
  let CellHeight = GameBoxHeight / size - 2;

  const StyledCell = styled.div`
  width: ${CellWidth}px;
  height: ${CellHeight}px;
  border: 1px solid black;`;

  const setChoice = () => {
    if(isWin){
      return 0;
    }
    ChangeGameState(gameStateArray, player, coordinate, size, countStep, indexI, indexJ);
  }

  return (
    <StyledCell onClick={setChoice}>
      {item}
    </StyledCell>
  )
};


export default Cell;