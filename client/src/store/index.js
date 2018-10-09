import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import DataService from '../components/DataService';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(DataService) ));

export default store;