import React from 'react';
import ScoreTableItem from "./ScoreTableItem";
import styled from "styled-components";

const StyledScoreTable = styled.div`
    width: 100%;
    height: 360px;
    overflow: auto;
    `

const ScoreTable = (props) => {

  let {winsTable} = props;

  const tableContent = winsTable.reverse().map(text => <ScoreTableItem text={text}/>);

  return (
    <StyledScoreTable>
      {tableContent}
    </StyledScoreTable>
  )
};


export default ScoreTable;