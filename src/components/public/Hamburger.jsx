import { useState, useEffect } from 'react';
import '../../assets/scss/public/hamburger.scss';

function Hamburger(props) {
    const [active, setactive] = useState(false);
    useEffect(() => {
        props.callback(active);
    },
        // eslint-disable-next-line
        []
    );
    const handleClick = (e) => {
        const isActive = active;
        setactive(!isActive);
        if (props.callback) props.callback(!isActive);
    }
    return (
        <button
            id="__hamburger__"
            className={`${props.className} __hamburger__`}
            onClick={handleClick}
        >
            <div className={`item${active ? ' active' : ''}`}></div>
            <div className={`item${active ? ' active' : ''}`}></div>
            <div className={`item${active ? ' active' : ''}`}></div>
        </button>

    )
}

export default Hamburger;