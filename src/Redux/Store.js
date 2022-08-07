import {
    legacy_createStore,
    combineReducers,
    applyMiddleware,
    compose,
  } from "redux";
  
  import thunk from "redux-thunk";
  
  import authReducer from "./auth/reducer"
  
  const rootreducer = combineReducers({ authReducer: authReducer });
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE || compose;
  
  const store = legacy_createStore(
    rootreducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  
  export default store;
  