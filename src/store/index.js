import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// import config file
import storeConfig from './store.config.json';
import timezoneConfig from './timezone.config.json';
// reduxer
import navbar from './reduxer/navbar';
import tools from './reduxer/tools';
import timezone from './reduxer/timezone';
const reduxer = combineReducers({ navbar, tools, timezone });

const middleware = [thunk];

const init = { ...storeConfig, timezone: timezoneConfig };

const store = createStore(
	reduxer,
	init,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
