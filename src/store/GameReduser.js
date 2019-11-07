import lodash from 'lodash';
import {createField, isWin} from "../components/common";

const CHANGE_PLAYER = 'GameReducer/CHANGE_PLAYER';
const CHANGE_GAME_STATE_ARRAY = 'GameReducer/CHANGE_GAME_STATE_ARRAY';
const SET_WIN = 'GameReducer/SET_WIN';
const ADD_STEP = 'GameReducer/ADD_STEP';
const REMOVE_STATE = 'GameReducer/REMOVE_STATE';
const SET_WIN_ARRAY = 'GameReducer/SET_WIN_ARRAY';
const CHANGE_PLAYER_ZERO_COLOR = 'GameReducer/CHANGE_PLAYER_ZERO_COLOR';
const CHANGE_PLAYER_CROSS_COLOR = 'GameReducer/CHANGE_PLAYER_CROSS_COLOR';
const ADD_CROSS_WINS_COUNT = 'GameReducer/ADD_CROSS_WINS_COUNT';
const ADD_ZERO_WINS_COUNT = 'GameReducer/ADD_ZERO_WINS_COUNT';


const playerZero = '0';
const playerCross = 'X';


const initialState = {
  gameStateArray: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
  player: playerCross,
  countStep: 0,
  isWin: null,
  size: 3,
  GameBoxWidth: 500,
  GameBoxHeight: 500,
  winArray: [],
  colorZero: 'black',
  colorCross: 'black',
  crossWinsCount: 0,
  zeroWinsCount: 0,
  winsTable: []
};

const GameReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PLAYER:
      return {
        ...state,
        player: action.player
      };
    case CHANGE_PLAYER_ZERO_COLOR:
      return {
        ...state,
        colorZero: action.color
      };
    case CHANGE_PLAYER_CROSS_COLOR:
      return {
        ...state,
        colorCross: action.color
      };
    case CHANGE_GAME_STATE_ARRAY:
      return {
        ...state,
        gameStateArray: action.newArray
      };
    case ADD_STEP:
      return {
        ...state,
        countStep: state.countStep + 1
      };
    case SET_WIN:
      return {
        ...state,
        isWin: action.player
      };
    case REMOVE_STATE:
      return {
        ...state,
        ...action.state,
        isWin: null,
        winArray:[],
        player: playerCross,
      };
    case SET_WIN_ARRAY:
      return {
        ...state,
        winArray: action.arr
      };
    case ADD_CROSS_WINS_COUNT:
      return {
        ...state,
        crossWinsCount: state.crossWinsCount + 1,
        winsTable: [...state.winsTable,'Победил игрок Х']
      };
    case ADD_ZERO_WINS_COUNT:
      return {
        ...state,
        zeroWinsCount: state.zeroWinsCount + 1,
        winsTable: [...state.winsTable,'Победил игрок 0']
      };
    default:
      return state
  }
};

const changePlayer = (player) => ({type: CHANGE_PLAYER, player});
const changeGameState = (newArray) => ({type: CHANGE_GAME_STATE_ARRAY, newArray});
const setWin = (player) => ({type: SET_WIN, player});
const addStep = () => ({type: ADD_STEP});
const changePlayerZeroColor = (color) => ({type: CHANGE_PLAYER_ZERO_COLOR, color});
const changePlayerCrossColor = (color) => ({type: CHANGE_PLAYER_CROSS_COLOR, color});
export const setWinArray = (arr) => ({type: SET_WIN_ARRAY, arr});
export const removeState = (state) => ({type: REMOVE_STATE, state});
const addCrossWinsCount = () => ({type: ADD_CROSS_WINS_COUNT});
const addZeroWinsCount = () => ({type: ADD_ZERO_WINS_COUNT});

export const ChangePlayerColor = (player, color) => (dispatch) => {
  if (player === playerCross) {
    dispatch(changePlayerCrossColor(color));
  } else {
    dispatch(changePlayerZeroColor(color));
  }
};

export const ChangeField = (size) => (dispatch) => {
  dispatch(removeState({
    size,
    gameStateArray: createField(size),
  }));
};

export const ChangeGameState = (currentArray, currentPlayer, coordinate, size, countStep, indexI, indexJ) => (dispatch) => {
  const newArr = currentArray.map((arr, arrIndex) => {
    return arr.map((item, itemIndex) => {
      if (item === playerCross || item === playerZero) {
        return item
      }
      return arrIndex === coordinate[0] && itemIndex === coordinate[1] ? currentPlayer : item;
    });
  });
  const newPlayer = currentPlayer === playerZero ? playerCross : playerZero;
  if (lodash.isEqual(newArr, currentArray)) {
    alert('Вы не можеть выбрать эту клетку!!!');
    return 0;
  }

  dispatch(changeGameState(newArr));
  dispatch(changePlayer(newPlayer));
  dispatch(addStep());
  if (countStep >= size) {
    if (isWin(newArr, currentPlayer, indexI, indexJ, size)) {
      dispatch(setWin(currentPlayer));

      if (currentPlayer === playerCross) {
        dispatch(addCrossWinsCount());
      } else {
        dispatch(addZeroWinsCount());
      }
      dispatch(setWinArray(isWin(newArr, currentPlayer, indexI, indexJ, size)));
    }
  }

};


export default GameReducer;