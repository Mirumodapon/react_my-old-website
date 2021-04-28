import { Switch, Route } from 'react-router-dom';

import SM from './features/SM';
import Qr from './features/QR';

function Tool() {

	return (
		<Switch>
			<Route path="/tools/qr" component={Qr}></Route>
			<Route path="/tools/sm" component={SM}></Route>
		</Switch>
	);
}

export default Tool;
