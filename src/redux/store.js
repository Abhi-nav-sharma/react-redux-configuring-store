import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./auth/reducer";
import appReducer from "./app/reducer";

const rootReducer = combineReducers({ auth: authReducer, app: appReducer });

const loggerMiddleWare = (store) => (next) => (action) => {
  console.log("Dispatching the action", action);
  console.log(store.getState());
  const value = next(action);
  console.log(value);
  console.log(store.getState());
};

export const store = createStore(
  rootReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  applyMiddleware(loggerMiddleWare)
);

// function loggerMiddleWare() {
//   return function (next) {
//     return function (action) {
//       console.log("Dispatching the action", action);
//     };
//   };
// }

// console.log(store.getState());
