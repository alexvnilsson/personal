import { createStore } from 'redux';
import { uiState } from './Reducer';
import { actions } from './Actions';

export const store = createStore(uiState);

export {
  actions
};