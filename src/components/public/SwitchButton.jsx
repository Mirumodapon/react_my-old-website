function SwitchButton({ callback, checked }) {
    const handleChange = (e) => e.target.checked;
    return (
        <label className="switch">
            <input type="checkbox" onChange={callback ? callback : handleChange} checked={checked} />
            <span className="slider"></span>
        </label>
    );
}

export default SwitchButton;