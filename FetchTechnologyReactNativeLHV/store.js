import createSagaMiddleware from 'redux-saga';
import rootReducer from './src/networking/store/reducers'
import { createStore, applyMiddleware } from "redux";
import rootSaga from './src/networking/middlewares'
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  );

sagaMiddleware.run(rootSaga)

export default store 