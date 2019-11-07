import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import GameReducer from "./GameReduser";
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

const Reducers = combineReducers({
  GameReducer: GameReducer,
  form: formReducer
});

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
const store = createStore(Reducers, enhancer);

export default store;
