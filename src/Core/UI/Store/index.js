import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { uiState } from "./Reducer";
import { actions } from "./Actions";

export const store = createStore(uiState, composeWithDevTools());

export { actions };
