import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import config file
import storeConfig from './store.config.json';
// reduxer
import navbar from './reduxer/navbar';
import tools from './reduxer/tools';
const reduxer = combineReducers({ navbar, tools });

const middleware = [thunk];

const init = storeConfig;

const store = createStore(
	reduxer,
	init,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
