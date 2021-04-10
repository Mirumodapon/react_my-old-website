import '../../assets/scss/public/popup.scss';

function Popup(props) {
    return (
        <div id={props.id} className="popup" style={{ visibility: props.active ? 'visible' : 'hidden' }}>
            <div className="popup-bg" onClick={() => props.close()}></div>
            <div className={`popup-container ${props.class}`}>
                {props.children}
            </div>
        </div>
    )
}

export default Popup;