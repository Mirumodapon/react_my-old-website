import { Switch, Route } from 'react-router-dom';

import SM from './features/SM';
import QrScanner from './features/QrScanner';

function Tool() {

	return (
		<Switch>
			<Route path="/tools/qr" component={QrScanner}></Route>
			<Route path="/tools/sm" component={SM}></Route>
		</Switch>
	);
}

export default Tool;
