import { applyMiddleware, legacy_createStore } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

const store = legacy_createStore(rootReducer, applyMiddleware(...middlewares));

console.log(store)

export default store;