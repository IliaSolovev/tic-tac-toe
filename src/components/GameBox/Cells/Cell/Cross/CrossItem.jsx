import React from 'react';
import styled from "styled-components";


const CrossItem = ({countItem,color, ...props}) => {

  const deg = countItem === 1 ? 45 : -45;

  const StyledCrossItem = styled.div`
  width: 100%;
  height: 15%;
  top:40%;
  background: ${color};
  position: absolute;
`;
  return (
    <StyledCrossItem style={{transform: `rotate(${deg}deg)`}}/>
  )
};


export default CrossItem;