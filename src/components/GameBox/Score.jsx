import React from 'react';
import styled from 'styled-components';
const Score = ({player,score,...props}) => {

  const StyledScore = styled.div`
      padding: 10px 0 0 8px;
      display: inline-block;
      border-bottom: 2px solid black;
      border-right: 2px solid black;
      border-left: 2px solid black;
      width: 47%;
      height: 30px;
`;

  return (
    <StyledScore>
      Счет игрока {player}: {score}
    </StyledScore>
  )
};


export default Score;