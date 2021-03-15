import { useState, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from '../public/Hamburger';
import '../../assets/scss/navbar.scss';

function Navbar() {
	const [isMobile, setMobile] = useState(true);
	const [isActive, setActive] = useState(false);
	useLayoutEffect(() => {
		function updateSize() {
			if (window.innerWidth <= 600) setMobile(true);
			else setMobile(false);
		}
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, []);
	const isVisible = () => !(isMobile && !isActive);
	const handleHamburger = (e) => setActive(e);
	const handleNavItem = (e) => setActive(false);
	const navItems = [
		{
			label: 'Home',
			url: '/'
		},
		{
			label: 'About',
			url: '/about'
		},
		{
			label: 'Works',
			url: '/works'
		},
		{
			label: 'Tools',
			url: '/tools'
		}
	];
	return (
		<nav id="navbar">
			<Hamburger
				className="navbar__hamburger"
				callback={handleHamburger}
				active={isActive}
			></Hamburger>
			<ul className={`navbar__nav ${isVisible() ? 'show' : ''}`}>
				{navItems.map(function (item, index) {
					return (
						<li key={index} className="navbar__nav--item">
							<Link to={item.url} onClick={handleNavItem}>
								{item.label}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default Navbar;
