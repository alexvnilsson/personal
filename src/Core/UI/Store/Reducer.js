import { UIActions } from './Actions';

const initialState = {
  colorTheme: null
};

export function uiState(state = initialState, action) {
  switch(action.type) {
    case UIActions.UPDATE_COLOR_THEME: {
      return Object.assign({}, state, {
        colorTheme: action.payload
      });
    }


    default: return state;
  }
}