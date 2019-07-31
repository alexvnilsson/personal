import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { uiState } from "./Reducer";
import { actions } from "./Actions";

let store = undefined;

if (process.env.NODE_ENV === "development") {
  store = createStore(uiState, composeWithDevTools());
} else {
  store = createStore(uiState, composeWithDevTools());
}

export { store, actions };
