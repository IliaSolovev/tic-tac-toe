import React from 'react';
import styled from "styled-components";


const Zero = ({color = 'black',...props}) => {
  const StyledZero = styled.div`
  width: 95%;
  height: 95%;
  border: 3px solid ${color};
  border-radius: 50%;
  position: relative;
`;
  return (
    <StyledZero/>
  )
};


export default Zero;