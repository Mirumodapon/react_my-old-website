import { Fragment, useState } from 'react';
import QrReader from 'react-qr-reader';

import '../../assets/scss/qrScanner.scss';

function QrScanner() {
    const [delay] = useState(1000);
    const [data, setData] = useState('No Result');
    const [isLink, setIsLink] = useState(false);
    const handleError = (e) => {
        console.log(e);
    }
    const handleScan = (d) => {
        if (d) {
            setData(d);
            const reg = /^(https)|(http)/;
            setIsLink(reg.exec(d) ? true : false);
        }
    }
    return (
        <Fragment>
            <QrReader
                className="qrScanner"
                delay={delay}
                onError={handleError}
                onScan={handleScan}
            />
            <p className="qrResult">
                {data}
                <br />
                {isLink && <a href={data} target="_blank" rel="noreferrer">Go to Link</a>}
            </p>
        </Fragment>
    )
}

export default QrScanner;