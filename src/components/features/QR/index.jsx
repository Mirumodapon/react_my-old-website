import { Fragment, useState, useEffect } from 'react';
import { Link, matchPath, useLocation } from 'react-router-dom';

import QrScanner from './QrScanner';
import QrGenerate from './QrGenerate';
import '../../../assets/scss/qr.scss';

function Qr() {
    const [mode, setMode] = useState(null);
    const location = useLocation();
    const match = matchPath(location.pathname, '/tools/qr/:mode');
    useEffect(() => {
        if (match)
            setMode(match.params.mode);
        else
            setMode('scan');
    }, [match])
    return (
        <Fragment>
            {mode === 'scan' && <QrScanner></QrScanner>}
            {mode === 'gen' && <QrGenerate></QrGenerate>}
            <div className="qr-mode-btn">
                <Link to="/tools/qr/scan" className={mode === 'scan' ? 'active' : ''}>Scanner</Link>
                <Link to="/tools/qr/gen" className={mode === 'gen' ? 'active' : ''}>Genetate</Link>
            </div>
        </Fragment>
    )
}

export default Qr;