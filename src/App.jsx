import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// style
import './assets/scss/index.scss';
// components
import Header from './components/layout/Header.jsx';
import Home from './components/Home';
import About from './components/About';

function App() {
	return (
		<Router>
			<Header></Header>
			<Switch>
				<Route path="/" component={Home} exact></Route>
				<Route path="/about" component={About}></Route>
			</Switch>
		</Router>
	);
}

export default App;
