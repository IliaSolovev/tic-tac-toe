import React from 'react';
import CrossItem from "./CrossItem";
import styled from "styled-components";

const StyledCross = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const Cross = ({color = 'black' ,...props}) => {

  return (
    <StyledCross>
      <CrossItem color={color} countItem={1} style={{transform: ' rotate(45deg)'}}/>
      <CrossItem color={color} countItem={2} style={{transform: 'rotate(-45deg)'}}/>
    </StyledCross>
  )
};


export default Cross;