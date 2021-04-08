import { useEffect, useRef, useState } from 'react';
import useQuery from '../../hook/useQuery';

import '../../assets/scss/SM.scss';

function SM({ navbar }) {
	const query = useQuery().get('t');
	const test = useRef(null);
	const [text, setText] = useState(query ? query : 'mirumo');
	const [areaStyle, setStyle] = useState({});
	const textareaWidth = window.innerWidth;
	const textareaHeight = window.innerHeight - 72;
	var ratioX, ratioY, ratio, fontSize;
	var newHeight, newWidth;
	function handleChange() {
		const { offsetHeight, offsetWidth } = test.current;
		// console.log(text);
		window.history.replaceState(null, null, `?t=${encodeURI(text)}`);
		ratioX = textareaWidth / offsetWidth;
		ratioY = textareaHeight / offsetHeight;
		ratio = Math.min(ratioX, ratioY);
		fontSize = Math.floor(30 * ratio) + 'px';
		newHeight = Math.ceil(test.offsetHeight * ratio);
		newWidth = Math.ceil(test.offsetWidth * ratio);

		setStyle({
			paddingTop: Math.floor((window.innerHeight - newHeight) / 2) + 'px',
			paddingBottom:
				Math.floor((window.innerHeight - newHeight) / 2) + 'px',
			paddingLeft:
				Math.max(0, Math.floor((window.innerWidth - newWidth) / 2)) +
				'px',
			paddingRight:
				Math.max(0, Math.floor((window.innerWidth - newWidth) / 2)) +
				'px',
			width: newWidth + 'px',
			height: newHeight + 'px',
			top: Math.floor((window.innerHeight - newHeight) / 2) + 'px',
			fontSize: fontSize
		});

		test.current.innerHTML =
			newHeight + ' ' + window.innerHeight + ' ' + fontSize;
	}
	useEffect(() => {
		handleChange();
		// eslint-disable-next-line
	}, [query, text]);
	return (
		<div>
			<span id="test" ref={test}>
				{text}
			</span>
			<textarea
				id="textarea"
				onChange={(e) => setText(e.target.value)}
				value={text}
				style={areaStyle}
				onLoad={handleChange}
			></textarea>
		</div>
	);
}

export default SM;
