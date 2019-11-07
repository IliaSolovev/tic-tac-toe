import React from 'react';
import styled from 'styled-components';

const StyledScore = styled.div`
      padding: 10px 0 0 8px;
      display: inline-block;
      border-bottom: 2px solid black;
      border-right: 2px solid black;
      border-left: 2px solid black;
      width: 47%;
      height: 30px;
`;

const Score = (props) => {

  const {player,score} = props;

  return (
    <StyledScore>
      Счет игрока {player}: {score}
    </StyledScore>
  )
};


export default Score;