const generateRow = (arr, index) => {
  return arr[index];
};
const generateColumn = (array, indexItem) => {
  let result = array.map((arr) => {
    return arr.filter((item, index) => {
      return index === indexItem
    })
  });
  return result.map(item => item[0]);
};
const generateMainDiagonal = (arr, length) => {
  let result = [];
  for (let i = 0; i < length; i++) {
    result = [...result, arr[i][i]];
  }
  return result
};
const generateSideDiagonal = (arr, length) => {
  let result = [];
  for (let i = length - 1; i >= 0; i--) {
    result = [...result, arr[i][length - (i + 1)]];
  }
  return result
};
const getWinArray = (type, indexI, indexJ, fieldSize) => {
  let res = [];
  switch (type) {
    case 'row':
      for (let i = 0; i < fieldSize; i++) {
        res = [...res, [indexI, i]]
      }
      return res;
    case 'column':
      for (let i = 0; i < fieldSize; i++) {
        res = [...res, [i, indexJ]]
      }
      return res;
    case 'mainDiagonal':
      for (let i = 0; i < fieldSize; i++) {
        res = [...res, [i, i]]
      }
      return res;
    case 'sideDiagonal':
      for (let i = 0; i < fieldSize; i++) {
        res = [...res, [i, fieldSize - (i + 1)]]
      }
      return res;
    default:
      return 0;
  }
};

export const isWin = (arr, elem, indexI, indexJ, fieldSize) => {
  const arrayType = {
    0: 'row',
    1: 'column',
    2: 'mainDiagonal',
    3: 'sideDiagonal',
  };
  let newArr = [
    generateRow(arr, indexI),
    generateColumn(arr, indexJ),
    generateMainDiagonal(arr, fieldSize),
    generateSideDiagonal(arr, fieldSize)];

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].filter(item => item === elem).length === newArr[i].length) {
      return getWinArray(arrayType[i], indexI, indexJ, fieldSize);
    }
  }
  return false

};
export const createField = (size) => {
  let result = [[]];
  for (let i = 0; i < size; i++) {

    for (let j = 0; j < size; j++) {
      result[i] = [...result[i], 0];
    }
    if (i === size - 1) {
      break;
    }
    result = [...result, []];
  }
  console.log(result);
  return result;
};
