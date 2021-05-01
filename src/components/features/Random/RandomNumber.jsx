import { Fragment } from 'react';
import { useState } from 'react';

import random from '../../../util/random';

import Popup from '../../public/Popup';
import SwitchButton from '../../public/SwitchButton';


function RandomNumber() {
    const [isRepeat, setRepeat] = useState(false);
    const [type, setType] = useState('int');
    const [except, setExcept] = useState('');
    const [showPopup, setPopup] = useState(true);
    const [result, setResult] = useState([]);
    const [erro, setError] = useState([]);
    const handleRepeat = (e) => {
        setRepeat(!isRepeat);
    }
    const handleType = (e) => {
        setType(e.target.value);
    }
    const handleExcept = (e) => {
        setExcept(e.target.value.split(',').map(x => parseFloat(x, 10)))
    }
    const isValid = ({ count, min, max, fp, type, except, isRepeat }) => {
        let v = true;
        const temp = [];
        console.log(except.length)
        if (isRepeat) {
            if (type === 'int') {
                if (max - min + 1 < count) {
                    temp.push('There is not enough different number.');
                    v = false;
                }
            }
            else {
                if ((max - min) + Math.pow(10, fp) + 1 < count) {
                    temp.push('There is not enough different number.');
                    v = false;
                }
            }
        }
        if (count < 1 || isNaN(count)) {
            temp.push('Please enter how many number do you want to generate.');
            v = false;
        }
        if (isNaN(max) || isNaN(min)) {
            temp.push('Please enter the number between.');
            v = false;
        }
        if (type === 'float' && isNaN(fp)) {
            temp.push('Please enter exp.');
            v = false;
        }
        if (fp > 5) {
            temp.push('The exp is limit 5.');
            v = false;
        }
        setError(temp);
        return v;
    }
    const handleGenerate = (e) => {
        const count = parseInt(document.getElementById('random-number-count').value, 10);
        let min = parseFloat(document.getElementById('random-number-min').value, 10);
        let max = parseFloat(document.getElementById('random-number-max').value, 10);
        const fp = parseInt(document.getElementById('random-number-float-point').value, 10);
        if (max < min) {
            let x = max;
            max = min;
            min = x;
        }
        if (isValid({ count, min, max, fp, type, except, isRepeat })) {
            const temp = [];
            while (temp.length < count) {
                let ranNum;
                if (type === 'int') ranNum = random.int(Math.floor(min), Math.floor(max + 1));
                else ranNum = Math.floor(random[type](min, max) * Math.pow(10, fp)) / Math.pow(10, fp);

                if (isRepeat) {
                    if (result.indexOf(ranNum) > -1) continue;
                } else {
                    if (except.indexOf(ranNum) > -1) continue;
                }
                temp.push(ranNum);

            }
            setResult(temp);
        } else {
            setResult([]);
        }
        setPopup(true);
    }
    return (
        <div id="random-number">
            <article className="config">
                <section className="generateConfig">
                    Generate
                <input type="number" id="random-number-count" min="1" />
                random
                <div className="selectType">
                        <div>
                            <input
                                type="radio"
                                name="type"
                                value="int"
                                defaultChecked
                                onChange={handleType} />
                            <label>Integer</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="type"
                                value="float"
                                onChange={handleType} />
                            <label>Float</label>
                        </div>
                    </div>
                </section>
                <section className="generateConfig">
                    Between
                    <input className="limit" type="number" id="random-number-min" />
                    to
                    <input className="limit" type="number" id="random-number-max" />
                </section>
                <section className="generateConfig">
                    repeat <SwitchButton checked={isRepeat} callback={handleRepeat} /> no-repeat
                </section>
                <section className="generateConfig">
                    except: <input type="text" onChange={handleExcept} disabled={isRepeat} />
                </section>
                <section className="generateConfig">
                    Float point to: <input type="number" id="random-number-float-point" disabled={type === 'int'} />
                </section>
                <section className="generateConfig">
                    <button className="generateBtn" onClick={handleGenerate}>Generate</button>
                </section>
            </article>
            <Popup active={showPopup} close={(e) => setPopup(false)} className="random-number-result">
                <div>
                    <h1>Result</h1>
                    <hr />
                    <div className="result">
                        {result.map((x, index) => <span key={index}>{x}</span>)}

                    </div>
                    <p>{erro.map((x, index) => <Fragment key={index}><span className="error">{x}</span><br /></Fragment>)}</p>
                </div>
            </Popup>
        </div>
    );
}
export default RandomNumber;