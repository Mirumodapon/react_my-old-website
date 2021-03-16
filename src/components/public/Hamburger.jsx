import { useState, useEffect, Fragment } from 'react';
import '../../assets/scss/public/hamburger.scss';

function Hamburger(props) {
	const [active, setactive] = useState(false);
	useEffect(
		() => {
			props.callback(active);
		},
		// eslint-disable-next-line
		[]
	);
	const handleClick = (e) => {
		let isActive;
		if (props.active !== undefined) {
			isActive = props.active;
		} else {
			isActive = active;
		}
		setactive(!isActive);
		if (props.callback) props.callback(!isActive);
	};
	return (
		<button
			id="__hamburger__"
			className={`${props.className} __hamburger__`}
			onClick={handleClick}
		>
			{props.active === undefined ? (
				<Fragment>
					<div className={`item${active ? ' active' : ''}`}></div>
					<div className={`item${active ? ' active' : ''}`}></div>
					<div className={`item${active ? ' active' : ''}`}></div>
				</Fragment>
			) : (
				<Fragment>
					<div
						className={`item${props.active ? ' active' : ''}`}
					></div>
					<div
						className={`item${props.active ? ' active' : ''}`}
					></div>
					<div
						className={`item${props.active ? ' active' : ''}`}
					></div>
				</Fragment>
			)}
		</button>
	);
}

export default Hamburger;
