import React from 'react';
import Cell from "./Cell";
import {StyledCellsContainer} from "../styled/Styled";
import {connect} from "react-redux";
import {ChangeGameState} from "../../store/GameReduser";

const checkElemIsEqual = (elem, arr) => {
  return arr.some(item => {
    return item[0] === elem[0] && item[1] === elem[1];
  })
}

const CellsContainer = ({gameStateArray, size, countStep, winArray,
                          GameBoxWidth, GameBoxHeight, colorZero,
                          colorCross,isWin
                          ,...otherProps
                          }) => {

  const filed = gameStateArray.map((arr, arrIndex) => {
    return arr.map((item, itemIndex) => {
      let colors = null;
      if (winArray) {
        colors = checkElemIsEqual([arrIndex, itemIndex], winArray) ? ['green','green'] : [colorZero, colorCross];
      }
      return <Cell key={`${arrIndex}-${itemIndex}`} internalState={item}
                   coordinate={[arrIndex, itemIndex]}
                   gameStateArray={gameStateArray} size={size}
                   countStep={countStep}
                   indexI={arrIndex} indexJ={itemIndex}
                   colors={colors} GameBoxWidth={GameBoxWidth} GameBoxHeight={GameBoxHeight}
                   isWin={isWin}
                   {...otherProps}/>
    })
  });

  return (
    <StyledCellsContainer>
      {filed}
    </StyledCellsContainer>
  )
};

const mapStateToProps = (state) => ({
  gameStateArray: state.GameReducer.gameStateArray,
  player: state.GameReducer.player,
  size: state.GameReducer.size,
  countStep: state.GameReducer.countStep,
  winArray: state.GameReducer.winArray,
  GameBoxWidth: state.GameReducer.GameBoxWidth,
  GameBoxHeight: state.GameReducer.GameBoxHeight,
  colorZero: state.GameReducer.colorZero,
  colorCross: state.GameReducer.colorCross,
  isWin: state.GameReducer.isWin,
});


export default connect(mapStateToProps, {ChangeGameState})(CellsContainer);