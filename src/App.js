import React from 'react';
import './App.css';
import GameBox from "./components/GameBox/GameBox";
import {Provider} from "react-redux";
import store from "./store/redux-store";

const App =() => {
  return (
    <Provider store={store}>
      <GameBox/>
    </Provider>
  );
}

export default App;
