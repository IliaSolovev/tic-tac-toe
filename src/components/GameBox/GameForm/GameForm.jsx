import React from 'react';
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import {ChangeField, removeState} from "../../../store/GameReduser";
import {createField} from "../../common";
import styled from 'styled-components';

const StyledGameFrom = styled.div`
  display: inline-block;
  width: 500px;
`


const GameForm = (props) => {

  let {ChangeField, size} = props;

  const handleSubmit = (value) => {
    ChangeField(value.setSizeGame)
  };
  const removeState = () => {
    props.removeState({gameStateArray: createField(size), player: 'X', countStep: 0, size, winArray: []})
  };

  return (
    <StyledGameFrom>
      <ReduxForm onSubmit={handleSubmit} removeState={removeState}/>
    </StyledGameFrom>
  )

};

const mapStateToProps = (state) => ({
  size: state.GameReducer.size
});

const Form = (props) => {

  let {handleSubmit, removeState} = props;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Field name={'setSizeGame'} component='input' placeholder='Выберите размер поля' type="text"/>
        <button type="submit">Submit</button>
      </form>
      <button onClick={removeState}>Remove</button>
    </>
  )
};

const ReduxForm = reduxForm({form: 'game'})(Form);

export default compose(
  connect(mapStateToProps, {ChangeField, removeState}),
)(GameForm);