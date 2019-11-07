import React from 'react';
import {CirclePicker} from 'react-color';

const ColorPicker = ({colors,ColorPickerWidth,ChangePlayerColor,player,...props}) => {


  const handleChangeComplete = (color, event) => {
    ChangePlayerColor(player,color.hex);
  }
  return (
      <CirclePicker colors={colors} onChangeComplete={handleChangeComplete} width={ColorPickerWidth}/>
  )
}


export default ColorPicker;