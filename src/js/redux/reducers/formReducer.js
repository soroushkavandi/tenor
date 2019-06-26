import formState from '../store/formState';
import {
  UPDATE_FORM_FIELD,
  EMPTY_INPUT,
  ERROR_INPUT,
} from '../actions/actionTypes';

const formReducer = (state = formState, action) => {
  switch (action.type) {
    case UPDATE_FORM_FIELD:
      return {
        ...state,
        input: action.payload,
      };
    case EMPTY_INPUT:
      return {
        ...state,
        error: false,
      };
    case ERROR_INPUT:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
export default formReducer;
