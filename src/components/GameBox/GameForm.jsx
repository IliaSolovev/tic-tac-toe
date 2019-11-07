import React from 'react';
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import {ChangeField, removeState} from "../../store/GameReduser";
import {createField} from "../common";

const GameForm = ({ChangeField, ...props}) => {

  const handleSubmit = (value) => {
    ChangeField(value.setSizeGame)
  };
  const removeState = () => {
    props.removeState({gameStateArray: createField(props.size), player: 'X', countStep: 0, size: props.size,winArray:[]})
  };
  return <ReduxForm onSubmit={handleSubmit} removeState={removeState}/>

};

const mapStateToProps = (state) => ({
  size: state.GameReducer.size
});

const Form = ({handleSubmit, removeState, ...props}) => {
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