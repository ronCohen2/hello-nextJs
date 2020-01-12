import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./Store/Reducers/rootReducer";
import reducer from "./Store/Reducers/Reducer";

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(compose(applyMiddleware(thunk)))
// );

const initStore = (initialState = {}) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
};
export default initStore;
