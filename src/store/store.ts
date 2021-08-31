import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./reducers/rootReducer";
import { rootSaga } from "./sagas/rootSaga";
import { composeWithDevTools } from 'redux-devtools-extension'

const saga = createSagaMiddleware();
const middleware = saga;

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(middleware)));

saga.run(rootSaga);
