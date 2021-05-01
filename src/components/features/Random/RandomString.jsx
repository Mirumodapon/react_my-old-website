import { useState } from 'react';
import random, { upperCaseAlphabet, lowerCaseAlphabet, symbol, number } from '../../../util/random';

function RandomNumber() {
    const [result, setResult] = useState([]);
    const [custom, setCustom] = useState(false);
    const handleCustom = (e) => {
        setCustom(e.target.checked);
    }
    const handleGenerate = (e) => {
        let length = parseInt(document.getElementById('random-string-length').value);
        let count = parseInt(document.getElementById('random-string-count').value);
        const getRandom = (s) => random.string(length, s === '' ? ' ' : s);
        const temp = []
        if (isNaN(length)) length = 20;
        if (isNaN(count)) count = 1;

        while (temp.length < count)
            if (custom) {
                const cus = document.getElementById('random-string-CS').value;
                temp.push(getRandom(cus));
            } else {
                const upper = document.getElementById('random-string-A').checked ? upperCaseAlphabet : '';
                const lower = document.getElementById('random-string-a').checked ? lowerCaseAlphabet : '';
                const num = document.getElementById('random-string-0').checked ? number : '';
                const sym = document.getElementById('random-string-S').checked ? symbol : '';

                temp.push(getRandom(upper + lower + num + sym));
            }
        setResult(temp);
    }
    const handleCopy = (e) => {
        console.log(e.target);
    }
    return (
        <div id="random-string">
            <div className="config">
                <section><label>Length: </label><input type="number" id="random-string-length" placeholder="20" /></section>
                <section><label>Count: </label><input type="number" id="random-string-count" placeholder="1" /></section>
                <section><input type="checkbox" id="random-string-A" disabled={custom} /><label>Uppercase(A~Z)</label></section>
                <section><input type="checkbox" id="random-string-a" disabled={custom} /><label>Lowercase(a~z)</label></section>
                <section><input type="checkbox" id="random-string-0" disabled={custom} /><label>Number(0~9)</label></section>
                <section><input type="checkbox" id="random-string-S" disabled={custom} /><label>Symbol</label></section>
                <section>
                    <input type="checkbox" id="random-string-C" onChange={handleCustom} />
                    <label>Custom: </label>
                    <input type="text" id="random-string-CS" disabled={!custom} />
                </section>
                <button className="generateBtn" onClick={handleGenerate}>Generate</button>
                <div className="result">
                    <ul>
                        {result.map((x, index) => <li key={index} id={`random-string-id-${index}`} onClick={handleCopy}>{x}</li>)}
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default RandomNumber;