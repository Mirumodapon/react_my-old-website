import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment-timezone';

import Popup from '../public/Popup';

function Clock() {
	const [isPopup, setPopup] = useState(false);

	const [unix, setUnix] = useState(Date.now());
	const [time, setTime] = useState(moment(Date.now()));
	const [current, setCurrent] = useState();
	const [popupBlock, setPopupblock] = useState('Asia/Taipei');

	const interval = useRef(0);
	const timezone = useSelector((s) => s.timezone);
	const handleZoneClick = (zone) => {
		setPopupblock(zone);
		setPopup(true);
	};
	useEffect(() => {
		interval.current = setInterval(() => {
			const d = Date.now();
			const m = moment(d);
			setUnix(Math.floor(d / 1000));
			setTime(m);
			setCurrent(m.format('MMM DD, YYYY hh:mm:ss'));
		}, 1000);
		return () => clearInterval(interval.current);
	});
	return (
		<div id="Ck">
			<div className="clock">
				<ul>
					<li>
						<h2 onClick={(e) => handleZoneClick('Unix Time')}>
							Unix Time
						</h2>
						<time>{unix}</time>
					</li>
					<li>
						<h2 onClick={(e) => handleZoneClick('Current Time')}>
							Current Time
						</h2>
						<time>{current}</time>
					</li>
					{timezone.map((zone, index) => (
						<li key={index}>
							<h2 onClick={(e) => handleZoneClick(zone)}>
								{zone.split('/').reverse()[0] || zone}
							</h2>
							<time>
								{moment(time)
									.tz(zone)
									.format('lll')}
							</time>
						</li>
					))}
				</ul>
			</div>
			<Popup
				className="ck-popup"
				id="ck-popup"
				close={() => setPopup(false)}
				active={isPopup}
			>
				<div>
					<span>{popupBlock}</span>
					<time>
						{popupBlock === 'Unix Time'
							? unix
							: popupBlock === 'Current Time'
							? current
							: moment(time)
									.tz(popupBlock)
									.format('MMM DD, YYYY hh:mm:ss')}
					</time>
				</div>
			</Popup>
		</div>
	);
}

export default Clock;
