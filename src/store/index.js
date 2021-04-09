import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
// reduxer
import Navbar from './reduxer/Navbar';
const reduxer = combineReducers({ Navbar });

const middleware = [thunk];

const init = {};

const store = createStore(
	reduxer,
	init,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
