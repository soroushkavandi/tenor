import SET_DATA from '../actions/actionTypes';
// import { dataState } from '../store/dataState';

const initialState = [];
const cocktailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};
// console.log(action.payload);
// console.log(cocktailReducer);
export default cocktailReducer;
