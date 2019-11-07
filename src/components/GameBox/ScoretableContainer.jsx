import React from 'react';
import styled from 'styled-components';
import ScoreTable from "./ScoreTable";
import {connect} from "react-redux";
import Score from "./Score";

const ScoreTableContainer = ({crossWinsCount, zeroWinsCount, winsTable, ...props}) => {

  const StyledScoreTableContainer = styled.div`
    display: inline-block;
    position: relative;
    margin-top: 15px;
    margin-left: 15px;
    border: 2px solid black;
    width: 400px;
    height: 400px;
    vertical-align: top;
    
`;

  return (
    <StyledScoreTableContainer>
      <Score player='X' score={crossWinsCount}/>
      <Score player='0' score={zeroWinsCount}/>
      <ScoreTable winsTable={winsTable}/>
    </StyledScoreTableContainer>
  )
};

const mapStateToProps = (state) => ({
  crossWinsCount: state.GameReducer.crossWinsCount,
  zeroWinsCount: state.GameReducer.zeroWinsCount,
  winsTable: state.GameReducer.winsTable
});

export default connect(mapStateToProps, {})(ScoreTableContainer);