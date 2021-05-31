import { useState, Fragment, useRef } from 'react';
import QrReader from 'react-qr-reader';

function QrScanner() {
	const [delay] = useState(1000);
	const [data, setData] = useState('No Result');
	const [isLink, setIsLink] = useState(false);
	const [showScanner, setShowScanner] = useState(true);
	const [copyHintStyle, setCopyHintStyle] = useState({ opacity: 0 });
	const copyfield = useRef();
	const handleError = (e) => {
		setShowScanner(false);
		setData(e.message);
	};
	const handleScan = (d) => {
		if (d) {
			setData(d);
			const reg = /^(https)|(http)/;
			setIsLink(reg.exec(d) ? true : false);
		}
	};
	const handleCopy = (e) => {
		const copy = copyfield.current;
		copy.style.display = 'block';
		copy.select();
		document.execCommand('copy');
		copy.style.display = 'none';
		setCopyHintStyle({ opacity: 1 });
		setTimeout(() => setCopyHintStyle({ opacity: 0 }), 3000);
	};
	return (
		<Fragment>
			{showScanner && (
				<QrReader
					className="qrScanner"
					delay={delay}
					onError={handleError}
					onScan={handleScan}
				/>
			)}
			<p className="qrResult">{data}</p>
			<div className="qr-feature">
				<span
					className={data === 'No Result' || 'qr-feature-show'}
					onClick={handleCopy}
				>
					Copy
				</span>
				<a href={data} className={!isLink || 'qr-feature-show'}>
					Go to Link
				</a>
			</div>
			<input ref={copyfield} value={data} style={{ display: 'none' }} />
			<span className="qr-copy-hint" style={copyHintStyle}>
				The text has been copied.
			</span>
		</Fragment>
	);
}

export default QrScanner;
