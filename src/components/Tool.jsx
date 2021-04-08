import { Switch, Route } from 'react-router-dom';

import SM from './features/SM';

function Tool() {
	return (
		<Switch>
			<Route path="/tools/sm" component={SM}></Route>
		</Switch>
	);
}

export default Tool;
