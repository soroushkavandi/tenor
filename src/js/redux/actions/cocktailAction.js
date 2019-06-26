import axios from 'axios';
import { SET_DATA } from './actionTypes';

export const getData = () => (dispatch, getState) => {
  axios
    .get(
      `https://api.tenor.com/v1/search?q=${
        getState().form.input
      }&key=D8DYG7OOJQVF`
    )
    .then(
      data =>
        dispatch({
          type: SET_DATA,
          payload: data.data.results,
        })
      // console.log(data);
      // console.log(initialState);
    );
};
