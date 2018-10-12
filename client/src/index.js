import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/index';
import registerServiceWorker from './registerServiceWorker';
import { makeMainRoutes } from './routes';
import { Provider } from 'react-redux';
import { GET_COURSE_DATA } from './constants/action-types'
const routes = makeMainRoutes();



ReactDOM.render(<Provider store={store}>{routes}</Provider>, document.getElementById('root'));
registerServiceWorker();

store.dispatch({type: GET_COURSE_DATA})