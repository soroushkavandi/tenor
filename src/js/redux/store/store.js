import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers/index';

const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(thunk, logger))
);
export default store;
