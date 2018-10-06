import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/index';
import { addCourse } from './actions/index';
import registerServiceWorker from './registerServiceWorker';
import { makeMainRoutes } from './routes';
import { Provider } from 'react-redux';
const routes = makeMainRoutes();

window.store = store;
window.addCourse = addCourse;

ReactDOM.render(<Provider store={store}>{routes}</Provider>, document.getElementById('root'));
registerServiceWorker();
