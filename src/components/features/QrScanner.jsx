import { Fragment, useState } from 'react';
import QrReader from 'react-qr-reader';

import '../../assets/scss/qrScanner.scss';

function QrScanner() {
    const [delay] = useState(1000);
    const [data, setData] = useState('No Result');
    const handleError = (e) => {
        console.log(e);
    }
    const handleScan = (d) => {
        if (d)
            setData(d);
    }
    return (
        <Fragment>
            <QrReader
                className="qrScanner"
                delay={delay}
                onError={handleError}
                onScan={handleScan}
            />
            <p className="qrResult">{data}</p>
        </Fragment>
    )
}

export default QrScanner;