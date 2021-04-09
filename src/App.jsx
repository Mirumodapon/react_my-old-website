import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// store
import { Provider } from 'react-redux';
import Store from './store';
// style
import './assets/scss/index.scss';
// components
import Header from './components/layout/Header.jsx';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Tool from './components/Tool';

function App() {
	return (
		<Provider store={Store}>
			<Router>
				<Header></Header>
				<Switch>
					<Route path="/" component={Home} exact></Route>
					<Route path="/about" component={About}></Route>
					<Route path="/works" component={Work}></Route>
					<Route path="/tools" component={Tool}></Route>
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
