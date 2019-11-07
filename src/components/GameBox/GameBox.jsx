import React from 'react';
import {StyledGameForm, StyledInfoTableContainer} from "../styled/Styled";
import CellsContainer from "./Cells/CellContainer";
import InfoTable from "./InfoTable/InfoTable";
import {connect} from "react-redux";
import GameForm from "./GameForm/GameForm";
import styled from "styled-components";
import ColorPickerContainer from "./ColorPicker/ColorPickerContainer";
import ScoreTableContainer from "./ScoreTable/ScoretableContainer";


const GameBox = (props) => {

  let StyledGameBox = styled.div`
    display: inline-block;
    margin: 0;
    padding: 15px;
    width: ${props.GameBoxWidth}px;
    height: ${props.GameBoxHeight}px; 
`;
  return (
    <>
      <StyledGameBox>
        <CellsContainer/>
      </StyledGameBox>

      <ScoreTableContainer/>

      <StyledInfoTableContainer>
        <InfoTable player={props.player}/>
      </StyledInfoTableContainer>

      <StyledGameForm>
        <GameForm/>
      </StyledGameForm>

      <ColorPickerContainer player='X'/>
      <ColorPickerContainer player='0'/>
    </>
  )
};


const mapStateToProps = (state) => ({
  player: state.GameReducer.player,
  GameBoxWidth: state.GameReducer.GameBoxWidth,
  GameBoxHeight: state.GameReducer.GameBoxHeight,
});

export default connect(mapStateToProps, {})(GameBox);