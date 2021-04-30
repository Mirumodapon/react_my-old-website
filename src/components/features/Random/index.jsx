import { Fragment, useState } from 'react';

import RandomNumber from './RandomNumber';
import RandomString from './RandomString';

import '../../../assets/scss/ran.scss';

function RanNumber() {
    const [mode, setMode] = useState('Number');
    const handleModeButton = (e) => {
        setMode(e.target.innerHTML);
    }
    return (
        <Fragment>
            {mode === 'Number' && <RandomNumber />}
            {mode === 'String' && <RandomString />}
            <div className="ran-mode-btn">
                <span onClick={handleModeButton} className={mode === 'String' ? 'active' : ''}>String</span>
                <span onClick={handleModeButton} className={mode === 'Number' ? 'active' : ''}>Number</span>
            </div>
        </Fragment>
    );
}

export default RanNumber;

