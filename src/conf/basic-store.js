import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import basic_reducer from './basic-reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(basic_reducer, composeEnhancers(applyMiddleware(thunk, logger)));
