import React from 'react';
import styled from 'styled-components';

const StyledItem = styled.div`
    width: 98%;
    height: 30px;
    padding: 4px;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
`

const ScoreTableItem = (props) => {

  let {text} = props;

  return (
    <StyledItem>
      {text}
    </StyledItem>
  )
};


export default ScoreTableItem;