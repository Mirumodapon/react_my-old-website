import { Switch, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SM from './features/SM';
import Qr from './features/QR';

import Random from './features/Random';

function ToolList() {
	const toolslist = useSelector((store) => store.tools);
	return (
		<div className="toolslist">
			<div className="container">
				{toolslist.map((x, index) => (
					<Link key={index} to={`/tools/${x.link}`}>
						{index % 2 === 0 && <span>{x.label[0]}</span>}
						{x.label}
						{index % 2 === 1 && <span>{x.label[0]}</span>}
					</Link>
				))}
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
			<Route path="/tools/ran" component={Random}></Route>
		</Switch>
	);
}

export default Tool;
