import React from 'react';
import Zero from "../Cells/Cell/Zero/Zero";
import Cross from "../Cells/Cell/Cross/Cross";
import {StyledInfoTableItem} from "../../styled/Styled";
import {connect} from "react-redux";


const InfoTable = ({player,colorZero,colorCross,...props}) => {

  return (
    <>
      <StyledInfoTableItem style={{border:`3px solid ${player === 'X'?'green':'red'}`}}>
        <Cross color={colorCross}/>
      </StyledInfoTableItem>
      <StyledInfoTableItem style={{border:`3px solid ${player === '0'?'green':'red'}`}}>
        <Zero color={colorZero}/>
      </StyledInfoTableItem>
    </>
  )
};

const mapStateToProps = (state) => ({
  colorZero: state.GameReducer.colorZero,
  colorCross: state.GameReducer.colorCross,
});


export default connect(mapStateToProps,{})(InfoTable);