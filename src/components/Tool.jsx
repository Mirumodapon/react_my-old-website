import { Switch, Route, Link } from 'react-router-dom';

import SM from './features/SM';
import Qr from './features/QR';

import '../assets/scss/tools.scss';

function ToolList() {
	return (
		<div className="toolslist">
			<div className="container">
				<Link to="/tools/sm">
					<span>S</span>Screen Message
				</Link>
				<Link to="/tools/qr">
					QR code Tools<span>Q</span>
				</Link>
				<Link to="/tools/ran">
					<span>R</span>Random Generater
				</Link>
			</div>
		</div>
	);
}

function Tool() {
	return (
		<Switch>
			<Route path="/tools" component={ToolList} exact></Route>
			<Route path="/tools/qr" component={Qr}></Route>
			<Route path="/tools/sm" component={SM}></Route>
		</Switch>
	);
}

export default Tool;
