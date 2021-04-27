import { Switch, Route } from 'react-router-dom';
import QrReader from 'react-qr-reader';

import SM from './features/SM';
import { useState } from 'react';

function Tool() {
	const [delay] = useState(1000);
	const [data, setData] = useState('null');
	const handleError = (e) => {
		console.log(e);
	}
	const handleScan = (d) => {
		if (d)
			setData(d);
		// console.log(d);
	}
	return (
		<Switch>
			<Route path="/tools/qr">
				<QrReader
					delay={delay}
					onError={handleError}
					onScan={handleScan}
					style={{ width: '500px', height: '500px' }}
				/>
				<h1>{data}</h1>
			</Route>
			<Route path="/tools/sm" component={SM}></Route>
		</Switch>
	);
}

export default Tool;
