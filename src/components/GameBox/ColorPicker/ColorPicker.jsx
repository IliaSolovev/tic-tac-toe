import React from 'react';
import {CirclePicker} from 'react-color';

const ColorPicker = (props) => {

  let {colors,ColorPickerWidth,ChangePlayerColor,player} = props;

  const handleChangeComplete = (color, event) => {
    ChangePlayerColor(player,color.hex);
  };

  return (
      <CirclePicker colors={colors} onChangeComplete={handleChangeComplete} width={ColorPickerWidth}/>
  )
}


export default ColorPicker;