import { Fragment, useState } from 'react';

import QrScanner from './QrScanner';
import QrGenerate from './QrGenerate';
import '../../../assets/scss/qr.scss';

function Qr() {
	const [mode, setMode] = useState(null);
	const handleMode = (e) => {
		setMode(e.target.innerHTML);
	};
	return (
		<Fragment>
			{mode === 'Scanner' && <QrScanner></QrScanner>}
			{mode !== 'Scanner' && <QrGenerate></QrGenerate>}
			<div className="qr-mode-btn">
				<span
					onClick={handleMode}
					className={mode !== 'Scanner' ? 'active' : ''}
				>
					Generate
				</span>
				<span
					onClick={handleMode}
					className={mode === 'Scanner' ? 'active' : ''}
				>
					Scanner
				</span>
			</div>
		</Fragment>
	);
}

export default Qr;
