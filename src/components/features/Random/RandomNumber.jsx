import { useState } from 'react';
import SwitchButton from '../../public/SwitchButton';


function RandomNumber() {
    const [isRepeat, setRepeat] = useState(false);
    const [type, setType] = useState('int');
    const [except, setExcept] = useState('');
    const handleRepeat = (e) => {
        setRepeat(!isRepeat);
    }
    const handleType = (e) => {
        setType(e.target.value);
        console.log(e.target);
    }
    const handleExcept = (e) => {
        setExcept(e.target.value.split(','))
    }
    const handleGenerate = (e) => {
        const count = document.getElementById('random-number-count').value;
        const min = document.getElementById('random-number-min').value;
        const max = document.getElementById('random-number-max').value;
        const fp = document.getElementById('random-number-float-point').value;


        console.log({ count, min, max, fp, type, except, isRepeat });

    }
    return (
        <div id="random-number">
            <article className="config">
                <section className="generateConfig">
                    Generate
                <input type="number" id="random-number-count" />
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
                    no-repeat <SwitchButton checked={isRepeat} callback={handleRepeat} /> repeat
                </section>
                <section className="generateConfig">
                    except: <input type="text" onChange={handleExcept} />
                </section>
                <section className="generateConfig">
                    Float point to: <input type="number" id="random-number-float-point" />
                </section>
                <section className="generateConfig">
                    <button className="generateBtn" onClick={handleGenerate}>Generate</button>
                </section>
            </article>
        </div>
    );
}
export default RandomNumber;