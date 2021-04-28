import { useState, Fragment } from 'react';
import QrCode from 'qrcode.react';

import Popup from '../../public/Popup';


function QrGenerate() {
    const [value, setValue] = useState('https://mirumo.org');
    const [isPopup, setPopup] = useState(false);
    const [{ inputValue, qrSize }, setQrSize] = useState({ inputValue: 0, qrSize: 30 });
    const handleChange = (e) => {
        setValue(e.target.value);
    }
    const handleQrSize = (e) => {
        let { value } = e.target;
        if (value > 10) value = 10;
        if (value < 0 || !value) value = 0;
        setQrSize({ inputValue: e.target.value, qrSize: 5 * value + 30 });
    }
    const qrSizeAdd = (e) => {
        let value = inputValue;
        value += e;
        if (value > 10) value = 10;
        if (value < 0 || !value) value = 0;
        setQrSize({ inputValue: value, qrSize: 5 * value + 30 });
    }
    const getStyleforQrPopup = (e) => ({ maxWidth: `${e}vh`, maxHeight: `${e}vw`, width: `${e}vw`, height: `${e}vh` })
    return (
        <Fragment>
            <QrCode value={value} className="qrgenetate" onClick={() => setPopup(true)} />
            <textarea value={value} onChange={handleChange} className="qr-gen-set-vlaue"></textarea>
            <Popup
                className="qr-gen-setting"
                id="qr-gen-setting"
                close={() => setPopup(false)} active={isPopup}
                style={getStyleforQrPopup(qrSize)}
            >
                <QrCode value={value} className="qrgenetate" />
                <div className="setqrsize">
                    <button onClick={() => qrSizeAdd(-1)}>{"<"}</button>
                    <input onChange={handleQrSize} type="number" max="10" value={inputValue} />
                    <button onClick={() => qrSizeAdd(1)}>{">"}</button>
                </div>
            </Popup>
        </Fragment >
    );
}

export default QrGenerate;