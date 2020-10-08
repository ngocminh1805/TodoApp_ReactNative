import todoApp from './reducer';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

export const store = createStore(
  todoApp,
  applyMiddleware(logger)
);
