import React from 'react';
import styled from 'styled-components';
import ColorPicker from "./ColorPicker";
import {connect} from "react-redux";
import {ChangePlayerColor} from "../../store/GameReduser";

const ColorPickerContainer = ({ChangePlayerColor, player = 'X', ...props}) => {
  const StyledColorPicker = styled.div`
  display: inline-block;
  padding: 15px;
  `;
  const StyledTitle = styled.div`
    padding-bottom: 10px;
`;
  const colors = ["#f44336", "#e91e63", "#9c27b0",
    "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4",
    "#ffeb3b", "#ff9800", "#ff5722", "#795548", "#607d8b"];
  const ColorPickerWidth = 200;
  return (
    <StyledColorPicker>
      {player === 'X' && <StyledTitle>Игрок <b>Х</b> выберите цвет</StyledTitle>}
      {player === '0' && <StyledTitle>Игрок <b>0</b> выберите цвет</StyledTitle>}
      <ColorPicker colors={colors} ColorPickerWidth={ColorPickerWidth}
                   ChangePlayerColor={ChangePlayerColor} player={player}/>
    </StyledColorPicker>)
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {ChangePlayerColor})(ColorPickerContainer);