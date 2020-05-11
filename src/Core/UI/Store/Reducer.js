import { UIActions } from "./Actions";

const initialState = {
  colorTheme: {
    body: undefined,
    header: undefined
  }
};

export function uiState(state = initialState, action) {
  switch (action.type) {
    case UIActions.UPDATE_COLOR_THEME: {
      if (action.payload && (action.payload.body || action.payload.header)) {
        return Object.assign({}, state, {
          colorTheme: Object.assign({}, state.colorTheme, action.payload)
        });
      } else {
        return state;
      }
    }

    default:
      return state;
  }
}
